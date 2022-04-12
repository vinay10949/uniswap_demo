//require('babel-register');
//require('babel-polyfill');
//require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
//const privateKeys = process.env.PRIVATE_KEYS || ""

const privateKeys = "33b1837edd7d5bbc1b825d3b7809a5c878fa9d6b7fef1390085ce75f26199089";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
      //    `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
      `https://ropsten.infura.io/v3/81a3b70703584e118f8aa6d6e73f6d73`
        )
      },
      gas: 50000000,
      gasPrice: 25000000000,
      network_id: 3
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
