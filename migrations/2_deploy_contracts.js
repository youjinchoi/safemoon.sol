const SafemoonFork = artifacts.require('SafemoonFork.sol');

module.exports = function (deployer, network) {
    if(network === 'bscTestnet') {
        deployer.deploy(SafemoonFork, '0xD99D1c33F9fC3444f8101754aBC46c52416550D1');
    } else {
        deployer.deploy(SafemoonFork, '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F');
    }
};