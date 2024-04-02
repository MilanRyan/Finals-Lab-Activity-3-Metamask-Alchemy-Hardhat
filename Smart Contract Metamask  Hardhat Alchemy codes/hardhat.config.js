/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
solidity: "0.7.3",
defaultNetwork: "sepolia",
networks: {
hardhat: {},
sepolia: {
url: "https://eth-mainnet.g.alchemy.com/v2/3kG1TqKDgfCh78q2b0dx75y_crRh6om3",
accounts: [`0x${"6b391948e005e7d9a61b9b47aff2f1f6ded33cd6345be5384d65c7be6f12f8e9"}`]
}
},
}