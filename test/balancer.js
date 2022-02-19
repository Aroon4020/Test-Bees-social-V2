// const {expect} = require('chai');
// const web3 = require("web3");
// var provider = new web3('https://rinkeby.infura.io/v3/0a2c350c40b442b895262df39adcd52c');

// const ETH  = "0x0000000000000000000000000000000000000000";
// const Bal  = "0xba100000625a3754423978a60c9317c58a424e3D";

// describe("Deployment & Swapping", function(){
//     it("123", async function(){
//         const cont_instance = await ethers.getContractFactory("testBalancerswap");
//         swap          = await cont_instance.deploy();
//         console.log("123", swap.address);
        
//     });


//     it("swap:with dex 1(Eth to Bal)", async function(){
//         let single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014', 0, '0x0000000000000000000000000000000000000000', '0xba100000625a3754423978a60c9317c58a424e3D', web3.utils.toWei("1"), '0x']
//         let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,web3.utils.toWei("1"),'0x']];
//         let Assets = ['0x0000000000000000000000000000000000000000','0xba100000625a3754423978a60c9317c58a424e3D'];
//         let kind = 0;
//         let limit = [web3.utils.toWei("1"), web3.utils.toWei("1")];
//         //let limit  = 0;
//         let deadline = 111111111111111;
//         //let DaiFAct= await ethers.getContractAt("ERC20",Dai);
//         // let UniFact= await ethers.getContractAt("ERC20",Usdc);
//         // UniFact.approve("0x1f10F3Ba7ACB61b2F50B9d6DdCf91a6f787C0E82", web3.utils.toWei("10000000000000000000000000000000000"));
        

//         //UniFact.approve("0x3aAde2dCD2Df6a8cAc689EE797591b2913658659", web3.utils.toWei("10000000000"));
//         console.log("Contract Address==>", swap.address);
//             let result = await swap.useBatchswap(
//             kind,
//             Batch_swap,
//             Assets,
//             //single_swap,
//             limit,
//             deadline,
//             {value: web3.utils.toWei("1")}
//         );
//     });


// });    