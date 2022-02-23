const hre = require("hardhat"); //import the hardhat

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const balancer = await ethers.getContractFactory("swap","ExchangeRouter");
    const balancerdep = await balancer.deploy();
    
    console.log("Token address:", balancerdep.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });