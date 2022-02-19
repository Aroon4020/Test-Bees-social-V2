// /*const {expect} = require('chai');

// //const { ethers } = require('ethers');
// //const { ethers } = require('ethers');
// const web3 = require("web3");
// var provider = new web3('https://rinkeby.infura.io/v3/0a2c350c40b442b895262df39adcd52c');
// const weth = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
// const Usdc = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
// const grt  = "0xc944E90C64B2c07662A292be6244BDf05Cda44a7";
// const Dai  = "0x6b175474e89094c44da98b954eedeac495271d0f";
// const USDT = "0xdac17f958d2ee523a2206206994597c13d831ec7";
// const Bal  = "0xba100000625a3754423978a60c9317c58a424e3D";
// const BAT  = "0x0d8775f648430679a709e98d2b0cb6250d2887ef";
// const UNI  = "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984";
// const ZRX  = "0xe41d2489571d322189246dafa5ebde1f4699f498";
// const Tribe= "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B";
// //const NUSDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"

// //        address[] memory Tokens_In_Out,
// //        uint256[] memory amountIn_deadline,
// //        uint[] memory DexRoute,   
// //        uint[] memory U_amountIn, //for uniswap 
// //        int[] memory options,           
// //        address[] memory path,
// //        Ibal.SingleSwap calldata singleswap,
// //        Ibal.BatchSwapStep [] memory batchswap,
// //        IAsset[] memory assets,
// //        Ibal.SwapKind kind,
// //        uint256[] memory limits

//     //let swap = null; 
// describe("Dex Aggregator", function(){
//     before(async function () {
//         it("Deployment =>", async function () {
//             const abc = await ethers.getContractFactory("swap");      
//             var swap = await abc.deploy();
//             console.log('DEX-Contract Address==>', swap.address);
//     });
// });

//     describe("SWAP", function (){
//     it("Should Swap Eth to Dai U_O_2", async function(){
//     let Tokens_In_Out = [weth,Dai];
//     let amountIn_deadline = [web3.utils.toWei("1"), 111111111111111];
//     let dex_route = [0];
//     let amountIn = [web3.utils.toWei("1")];
//     //let amountOut = [0];
//     let options = [2];
//     let path = [weth, Dai];
//     const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2','0xba100000625a3754423978a60c9317c58a424e3D',10,'0x'];
//     let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,1000,"0x"]];
//     let Assets = [weth, Dai];
//     let kind = 0;
//     let limit = [0];
//     //let deadline = 1641827078;

//     let result = await swap.dex(
//             Tokens_In_Out,
//             amountIn_deadline,
//             dex_route,
//             amountIn,
//             //amountOut,
//             options,  
//             //deadline,
//             path,
//             single_swap,
//             Batch_swap,
//             Assets,
//             kind,
//             limit,
//             {value: web3.utils.toWei("1")}
//         );
//     //console.log(result);
//     }); 


//     /////* Test Case #2 */
//     //it("Should Swap Eth to Dai to Usdc U_O_2_0", async function(){
//     //    let Tokens_In_Out = [weth,Dai];
//     //    let amountIn_deadline = [web3.utils.toWei("1"), 111111111111111];
//     //    let dex_route = [0,0];
//     //    let amountIn = [web3.utils.toWei("1"), web3.utils.toWei("3000") ];
//     //    let options = [2,0];
//     //    let path = [weth, Dai, Usdc];
//     //    const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2','0xba100000625a3754423978a60c9317c58a424e3D',10,'0x'];
//     //    let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,1000,"0x"]];
//     //    let Assets = [weth, Dai];
//     //    let kind = 0;
//     //    let limit = [0];
// //
//     //    
//     //    let Eth_balance = await provider.eth.getBalance('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266');
//     //    console.log("ETH=>", Eth_balance);
//     //    let DaiFAct=await ethers.getContractAt("ERC20",Dai);
//     //    let Dai_balance = await DaiFAct.balanceOf('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266');
//     //    let Dai_approval = await DaiFAct.approve('0x3347B4d90ebe72BeFb30444C9966B2B990aE9FcB', web3.utils.toWei("310000"));
//     //    console.log("Dai=>",Dai_balance);
//     //  
//     //    let result = await swap.dex(
//     //            Tokens_In_Out,
//     //            amountIn_deadline,
//     //            dex_route,
//     //            amountIn,
//     //            options,  
//     //            path,
//     //            single_swap,
//     //            Batch_swap,
//     //            Assets,
//     //            kind,
//     //            limit,
//     //            {value: web3.utils.toWei("1")}
//     //        );
//     //    console.log(result);
//     //    })

// ////
//     it("Should Swap Eth to Dai to USdc to BAT U_O_2_0_1", async function(){
//         let dex_route = [0,0,0];
//         let Tokens_In_Out = [weth,Dai];
//         let amountIn_deadline = [web3.utils.toWei("1"), 111111111111111];
//         let amountIn = [web3.utils.toWei("1"), web3.utils.toWei("30"), web3.utils.toWei("1")];
//         let options = [2,0,0];
//         let path = [weth, UNI, Dai, Usdc];
//         const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2','0xba100000625a3754423978a60c9317c58a424e3D',10,'0x'];
//         let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,1000,"0x"]];
//         let Assets = [weth, Dai];
//         let kind = 0;
//         let limit = [0];
//         //let deadline = 1641827078;
// //       
//         let Eth_balance = await provider.eth.getBalance('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266');
//         console.log("ETH=>", Eth_balance);
//         let DaiFAct=await ethers.getContractAt("ERC20",Dai);
//         let USDCFACT = await ethers.getContractAt("ERC20", Usdc);
//         let USDTFACT = await ethers.getContractAt("ERC20", USDT);
//         let UNIFACT = await ethers.getContractAt("ERC20", UNI);
//         let Dai_balance = await DaiFAct.balanceOf('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266');
//         let Dai_approval = await DaiFAct.approve('0x3347B4d90ebe72BeFb30444C9966B2B990aE9FcB', web3.utils.toWei("310000000098711"));
//         let USDT_approval = await USDTFACT.approve('0x3347B4d90ebe72BeFb30444C9966B2B990aE9FcB', web3.utils.toWei("1024567999789"));
//         let USDC_approval = await USDCFACT.approve('0x3347B4d90ebe72BeFb30444C9966B2B990aE9FcB', web3.utils.toWei("1024567999789"));
//         let UNI_approval = await UNIFACT.approve('0x3347B4d90ebe72BeFb30444C9966B2B990aE9FcB', web3.utils.toWei("102456"));
//         console.log("Dai=>",Dai_balance);
      
//         let result = await swap.dex(
//                 Tokens_In_Out,
//                 amountIn_deadline,
//                 dex_route,
//                 amountIn,
//                 options,  
//                 path,
//                 single_swap,
//                 Batch_swap,
//                 Assets,
//                 kind,
//                 limit,
//                 {value: web3.utils.toWei("1")}
//             );
//         console.log(result);
//     });
//     //it("Should Swap Eth to Dai to USdc to BAT U_O_2_0_1", async function(){
//     //    let dex_route = [0,0,0];
//     //    let amountIn = [web3.utils.toWei("1"), web3.utils.toWei("30"), web3.utils.toWei("1")];
//     //    let options = [2,0,0];
//     //    let path = [weth, UNI, Dai, Usdc];
//     //    const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2','0xba100000625a3754423978a60c9317c58a424e3D',1,'0x'];
//     //    let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,1000,"0x"]];
//     //    let Assets = [weth, Dai];
//     //    let kind = 0;
//     //    let limit = [0];
//     //    let deadline = 1641827078;
// //
//     //    
//     //    let Eth_balance = await provider.eth.getBalance('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266');
//     //    console.log("ETH=>", Eth_balance);
//     //    let WETHFAct = await ethers.getContractAt("ERC20", weth);
//     //    let DaiFAct=await ethers.getContractAt("ERC20",Dai);
//     //    let USDCFACT = await ethers.getContractAt("ERC20", Usdc);
//     //    let USDTFACT = await ethers.getContractAt("ERC20", USDT);
//     //    let UNIFACT = await ethers.getContractAt("ERC20", UNI);
//     //    let Dai_balance = await DaiFAct.balanceOf('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266');
//     //    let Dai_approval = await DaiFAct.approve('0x276C216D241856199A83bf27b2286659e5b877D3', web3.utils.toWei("310000000098711"));
//     //    let USDT_approval = await USDTFACT.approve('0x276C216D241856199A83bf27b2286659e5b877D3', web3.utils.toWei("1024567999789"));
//     //    let USDC_approval = await USDCFACT.approve('0x276C216D241856199A83bf27b2286659e5b877D3', web3.utils.toWei("1024567999789"));
//     //    let UNI_approval = await UNIFACT.approve('0x276C216D241856199A83bf27b2286659e5b877D3', web3.utils.toWei("102456"));
//     //    let weth_approval = await WETHFAct.approve('0x276C216D241856199A83bf27b2286659e5b877D3', web3.utils.toWei("310000000098711"));
//     //    console.log("Dai=>",Dai_balance);
//     //  
//     //    let result = await swap.dex(
//     //            dex_route,
//     //            amountIn,
//     //            options,  
//     //            deadline,
//     //            path,
//     //            single_swap,
//     //            Batch_swap,
//     //            Assets,
//     //            kind,
//     //            limit,
//     //            {value: web3.utils.toWei("1")}
//     //        );
//     //    console.log(result);
//     //    });
// //
//     //it("should Swap Eth to Dai to USdc to BAT U_O_2_0_1", async function(){
//     //    let dex_route = [1];
//     //    let amountIn = [web3.utils.toWei("1"), web3.utils.toWei("30"), web3.utils.toWei("100")];
//     //    let options = [2,0,0];
//     //    let path = [weth, Usdc];
//     //    const single_swap = ['0x7edde0cb05ed19e03a9a47cd5e53fc57fde1c80c0002000000000000000000c8',0,Usdc,'0x52C9886d5D87B0f06EbACBEff750B5Ffad5d17d9',1,'0x'];
//     //    let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,1000,"0x"]];
//     //    let Assets = [weth, Dai];
//     //    let kind = 0;
//     //    let limit = [0];
//     //    let deadline = 1641827078123;
// //
//     //    
//     //    let Eth_balance = await provider.eth.getBalance('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266');
//     //    console.log("ETH=>", Eth_balance);
//     //    let WETHFAct = await ethers.getContractAt("ERC20", weth);
//     //    let DaiFAct=await ethers.getContractAt("ERC20",Dai);
//     //    let USDCFACT = await ethers.getContractAt("ERC20", Usdc);
//     //    let USDTFACT = await ethers.getContractAt("ERC20", USDT);
//     //    let UNIFACT = await ethers.getContractAt("ERC20", UNI);
//     //    let Dai_balance = await USDCFACT.balanceOf('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266');
//     //    let Dai_approval = await DaiFAct.approve('0x276C216D241856199A83bf27b2286659e5b877D3', web3.utils.toWei("310000000098711"));
//     //    let USDT_approval = await USDTFACT.approve('0x276C216D241856199A83bf27b2286659e5b877D3', web3.utils.toWei("1024567999789"));
//     //    let USDC_approval = await USDCFACT.approve('0x3347B4d90ebe72BeFb30444C9966B2B990aE9FcB', web3.utils.toWei("1024567999789"));
//     //    let UNI_approval = await UNIFACT.approve('0x276C216D241856199A83bf27b2286659e5b877D3', web3.utils.toWei("102456"));
//     //    let weth_approval = await WETHFAct.approve('0x276C216D241856199A83bf27b2286659e5b877D3', web3.utils.toWei("310000000098711"));
//     //    console.log("Dai=>",Dai_balance);
//     //  
//     //    let result = await swap.dex(
//     //            dex_route,
//     //            amountIn,
//     //            options,  
//     //            deadline,
//     //            path,
//     //            single_swap,
//     //            Batch_swap,
//     //            Assets,
//     //            kind,
//     //            limit,
//     //            {value: web3.utils.toWei("1")}
//     //        );
//     //    console.log(result);
//     //    })
//     it("gives the balance after swap", async ()=>{
// ////
//         //let EthFact=await ethers.getContractAt("ERC20", weth);
//         let Eth_balance = await provider.eth.getBalance('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266');
//         console.log("ETH=>", Eth_balance);
//         let DaiFAct=await ethers.getContractAt("ERC20",Dai);
//         let Dai_balance = await DaiFAct.balanceOf('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266');
//         //let Dai_approval = await DaiFAct.approve('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266', web3.utils.toWei("31000000"));
//         console.log("Dai=>",Dai_balance);

//     });



         
// */