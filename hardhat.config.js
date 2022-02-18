/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 //const hardhat = require("hardhat")
 //const hre = require("hardhat");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const { key } = require('./secret.json');

//require("hardhat");
 // Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "KEY";
//import {hre} from "hardhat";
// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const ROPSTEN_PRIVATE_KEY = "YOUR ROPSTEN PRIVATE KEY";
// hre.network.provider.request({
//  method: "hardhat_impersonateAccount",
//  params: ["0x8Bcf7E0ca3de9Ec2637A76184eB746e844d2e2F6"],
//});
apiKey: "XG6QZCS4MH6SES6YC64ZXG76YSSSUAN3US"
module.exports = {
  
  solidity: {
    
  compilers: [
    {
      version: "0.6.6",
      settings: {
        // https://hardhat.org/hardhat-network/#solidity-optimizer-support
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
    
    {
      version: "0.7.6",
      settings: {
        // https://hardhat.org/hardhat-network/#solidity-optimizer-support
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },  
    {
      version: "0.8.0",
      settings: {
        // https://hardhat.org/hardhat-network/#solidity-optimizer-support
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },  
    {
      version: "0.6.0",
      settings: {
        // https://hardhat.org/hardhat-network/#solidity-optimizer-support
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },  
    {
      version: "0.4.18",
      settings: {
        // https://hardhat.org/hardhat-network/#solidity-optimizer-support
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
     
  ],
  settings: {
    // https://hardhat.org/hardhat-network/#solidity-optimizer-support
    optimizer: {
      enabled: true,
      runs: 200
    }
  }

},
  networks: {
    hardhat:{
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/zjbTUg1cryscWQnHcvHKvU30v2U7bPQf",
        blockNumber: 14225404 
      },
    },
    kovon: {
      url: "https://kovan.infura.io/v3/0b40e4fd2cca41138c8ebbc5ee029842", //Infura url with projectId
      accounts: [key] // add the account that will deploy the contract (private key)
     },
     local: {
			url: 'http://127.0.0.1:8545'
	  	},

   },

   etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "XG6QZCS4MH6SES6YC64ZXG76YSSSUAN3US"
  }
};
