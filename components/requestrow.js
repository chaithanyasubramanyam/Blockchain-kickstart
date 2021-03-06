import React , { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

export default class RequestRow extends Component{
    onApprove= async ()=>{

        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(this.props.Id).send({from: accounts[0]})
    }

    onFinalise =async()=>{
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.finalizeRequest(this.props.Id).send({from: accounts[0]})
    }

    render(){
        const { Row, Cell } = Table
        return (
            <Row>
                <Cell>
                    {this.props.Id}
                </Cell>
                <Cell>
                    {this.props.request.description}
                </Cell>
                <Cell>
                    {web3.utils.fromWei(this.props.request.value, 'ether')}
                </Cell>
                <Cell>
                    {this.props.request.recipient}
                </Cell>
                <Cell>
                    {this.props.request.approvalCount}
                </Cell>
                <Cell>
                    <Button color="green" basic onClick={this.onApprove}>Approve</Button>
                </Cell>
                <Cell>
                <Button color="teal" basic onClick={this.onFinalise}>Finalise</Button>
                </Cell>
            </Row>
        )
        
    }
}

