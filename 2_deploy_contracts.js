const EcommerceStore = artifacts.require("EcommerceStore");

module.exports = function(deployer) {
 accounts = web3.eth.getAccounts()
 deployer.deploy(EcommerceStore, '0x7b2f30126c89b77a1ddfa4f8fde1b40349f0a999');
};