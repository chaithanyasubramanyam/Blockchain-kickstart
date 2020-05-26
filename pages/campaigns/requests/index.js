import React, { Component } from 'react';
import Layout from '../../../components/layout';
import { Button} from 'semantic-ui-react';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import { Table } from 'semantic-ui-react';
import RequestRow from '../../../components/requestrow'
export default class RequestIndex extends Component{
    static async getInitialProps(props){
        const { address } = props.query;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();
        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((element,index)=>{
                return campaign.methods.requests(index).call()
            })
        )
        return { address, requests, requestCount };
    }

    renderRow=()=>{
        return this.props.requests.map((request,index)=>{
            return <RequestRow
            key = {index}
            Id = {index}
            request = {request}
            address={this.props.address}
            />
        })
    }

    render(){
        const { Header, Row, HeaderCell, Body} = Table;
        return(
            <Layout>
                <h3>Request list</h3>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary>add request </Button>
                    </a>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Receipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>
                    <Body>{this.renderRow()}</Body>
                </Table>
            </Layout>
            
        )
        
    }
}
