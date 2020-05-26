import React, { Component } from 'react';
import { Form, Button , Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import  Layout  from '../../../components/layout'

export default class RequestNew extends Component{
    state={
        Value :'',
        Description: '',
        Recipient: ''
    }
    static async getInitialProps(props){
        const { address } = props.query;
        return { address }
    }

    onSubmit = async (e) =>{
        e.preventDefault();
        const campaign = Campaign(this.props.address);
        const {Value, Description, Recipient} = this.state;
        try{
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.createRequest(
            Description,
            web3.utils.toWei(Value,'ether'),
            Recipient)
            .send({from: accounts[0]});
    }catch (err){
        console.log(err)
    }
    }

    render(){
        return(
            <Layout>
                <h3>Create a request</h3>
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Description</label>
                    <Input 
                    value={this.state.Description}
                    onChange={e=>{this.setState({Description:e.target.value})}}/>
                </Form.Field>

                <Form.Field>
                    <label>Value in ether </label>
                    <Input
                    value={this.state.Value}
                     onChange={e=>{this.setState({Value:e.target.value})}}/>
                </Form.Field>

                <Form.Field>
                    <label>Recipient</label>
                    <Input
                    value={this.state.Recipient}
                    onChange={e=>{this.setState({Recipient:e.target.value})}}/>
                </Form.Field>

                <Button primary>Create</Button>
            </Form>
            </Layout>
            
        )
    }
}