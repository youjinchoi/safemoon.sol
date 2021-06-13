const SafemoonFork = artifacts.require('SafemoonFork.sol');

// official pancakeswap testnet - 0xD99D1c33F9fC3444f8101754aBC46c52416550D1
// https://bsc.kiemtienonline360.com/ - 0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3
module.exports = function (deployer, network) {
    if(network === 'bscTestnet') {
        deployer.deploy(SafemoonFork, '0xD99D1c33F9fC3444f8101754aBC46c52416550D1');
    } else {
        deployer.deploy(SafemoonFork, '0x10ed43c718714eb63d5aa57b78b54704e256024e');
    }
};