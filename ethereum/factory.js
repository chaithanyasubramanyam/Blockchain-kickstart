import web3 from './web3';

import Factory from './build/Factory.json';

const instance = new web3.eth.Contract(JSON.parse(Factory.interface),'0x39Ed52B080Dc47dac0C54b847173F5382B45ADEF');

export default instance;