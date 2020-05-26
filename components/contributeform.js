import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from "../ethereum/web3";
import { Router } from '../routes';

export default class Contribution extends Component{
    state = {
        value : '',
        err: '',
        loading : false,
    }
    onSubmit = async e =>{
        e.preventDefault();
        const campaign = Campaign(this.props.address)
        this.setState({loading:true, err: ''})

        try{
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value : web3.utils.toWei(this.state.value,'ether')
            });

            Router.replaceRoute(`/campaigns/${this.props.address}`)
        }catch(err){
            this.setState({err: err.message})
        }

        this.setState({loading:false, value:''})

    }
    render(){
        return(
            <Form onSubmit = {this.onSubmit}>
                <Form.Field>
                    <label> Amount to Contribute </label>
                    <Input label="ether" 
                        labelPosition="right"
                        value = {this.state.value}
                        onChange= {e=> this.setState({value:e.target.value})}/>
                </Form.Field>
                <Message error header ="Oops!" content={this.state.err}/>
                <Button primary loading={this.state.loading}>Contribute</Button>
            </Form>
        )
    }
}