import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    //we are in the browser and metamask is running//
    web3 = new Web3(window.web3.currentProvider);
}else{
    //we user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/8bf475fb9dd5428a92a990ddb3f9b0b3'
    );

    web3 = new Web3(provider)
}

export default web3;
