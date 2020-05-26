import React from 'react';
import factory from '../ethereum/factory';
import { Card }  from 'semantic-ui-react';
import { Button, Icon } from 'semantic-ui-react';
import Layout from '../components/layout';
import {Link} from '../routes';


export default class Campaignindex  extends React.Component{
    static async getInitialProps(){
        const campaignAddress = await factory.methods.getCampaigns().call();
        return {campaignAddress};
    }
    
    rendercamp=()=>{
        const items = this.props.campaignAddress.map(address =>{
            return {
                header: address,
                description : <Link route={`/campaigns/${address}`}><a>vew campaign</a></Link>,
                fluid : true
            }
        })

        return <Card.Group items = {items}/>;
    }

    render(){
        return(
        
        <div>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <Layout/>
        <h3>open campaign</h3>
        <Link route='/campaigns/new'><a>
        <Button floated='right' content="Create campaign" icon="add cirlce" primary/>
        </a>
        </Link>
        {this.rendercamp()}
        </div>
        )
    }
}