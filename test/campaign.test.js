const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledfactory = require('../ethereum/build/Factory.json');
const compiledcampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignaddress;
let campaign;

beforeEach(async()=>{
    accounts = await web3.eth.getAccounts();
    factory = await new web3.eth.Contract(JSON.parse(compiledfactory.interface))
                .deploy({data: compiledfactory.bytecode})
                .send({from : accounts[0], gas:'1000000'});

    await factory.methods.createCampaign('100').send({
        from : accounts[0],
        gas : '1000000'
    });

    const address = await factory.methods.getCampaigns().call();
    campaignaddress = address[0];
    campaign = await new web3.eth.Contract(JSON.parse(compiledcampaign.interface),campaignaddress);
});

describe('Campaigns',()=>{
    it('deployed',()=>{
        assert.ok(factory.options.address)
        assert.ok(campaign.options.address)
    })

    it('manager',async ()=>{
        console.log(campaignaddress)
        const manager = await campaign.methods.manager().call();
        assert(accounts[0]==manager);
    })
})

