import React from 'react';
import Layout from '../../components/layout';
import  { Form,Button,Input } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Message } from 'semantic-ui-react';
import { Link, Router } from '../../routes';

export default class CampaignNew extends React.Component{
    state = {
        minimumContribution : '',
        err : '',
        loading: false
    }
    onSubmit = async (e) =>{
        e.preventDefault();
        this.setState({loading : true})
        try{
        const accounts = await web3.eth.getAccounts();
        await factory.methods.createCampaign(this.state.minimumContribution).send({
            from : accounts[0]
        })

        Router.pushRoute('/');
    }catch (err){
        this.setState({err : err.message})
    }
        this.setState({loading : false})

    }
    render(){
        return(
            <div>
                <Layout/>
                <h3>Create New Campaign</h3>

                <Form onSubmit={this.onSubmit} error={!!this.state.err}>
                    <Form.Field>
                        <label>Min Contr</label>
                        <Input 
                        label="wei" 
                        labelPosition="right"
                        value = {this.state.minimumContribution}
                        onChange = {e=>this.setState({minimumContribution:e.target.value})}
                        />
                    </Form.Field>
                        <Button primary loading={this.state.loading}>Create</Button>
                    <Message error header ="Oops!" content={this.state.err}/>
                    
                </Form>
            </div>
        )
    }
    
}