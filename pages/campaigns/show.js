import React from 'react';
import Layout from '../../components/layout';
import Campaign from '../../ethereum/campaign'
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import Contrbutionform from '../../components/contributeform';
import { Link } from '../../routes';

export default class CampaignShow extends React.Component{
    static async getInitialProps(props){
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        return {
                address: props.query.address, 
                minimumContrbution:summary[0], 
                balance : summary[1],
                requestsCount : summary[2],
                approversCount : summary[3],
                manager:summary[4]  }
    }

    renderCards(){
        const {
            balance,
            manager,
            minimumContrbution,
            requestsCount,
            approversCount
        } = this.props;
        const items = [
            {
                header: manager,
                meta: 'Address of the manager',
                description: 'Manager created this campaign',
                style : {overflowWrap:'break-word'}
            },
            {
                header: minimumContrbution,
                meta: 'min contrbution in wei',
                description: 'this much wei',
                style : {overflowWrap:'break-word'}
            },
            {
                header: requestsCount,
                meta: 'requests',
                description: 'requests',
                style : {overflowWrap:'break-word'}
            },
            {
                header: approversCount,
                meta: 'approvers count',
                description: 'this many should approve',
                style : {overflowWrap:'break-word'}
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance',
                description: 'this much is left',
                style : {overflowWrap:'break-word'}
            }
        ];

        return <Card.Group items={items}/>
    }
    render(){
        return(
            <Layout>
                <h3>Campaign Show</h3>
                <Grid>
                    <Grid.Column width = {10}>
                    {this.renderCards()}
                    <Link route={`/campaigns/${this.props.address}/requests`}>
                        <a>
                            <Button primary>View Button</Button>
                        </a>
                    </Link>
                    </Grid.Column>
                    <Grid.Column width = {6}>
                    <Contrbutionform  address={this.props.address}/>
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}