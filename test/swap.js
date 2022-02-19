///*const { expect } = require("chai");
//        /*uint[] memory DexRoute,   //[1,1,0,0]
//        uint[] memory amountIn,  //[2-0.1-2-0.0001]
//        uint[] memory amountOut, //[0.1-2-0.0001-4]
//        int[] memory options,  //[0,1]
//        uint deadline,          
//        address[] memory path, 
//        Ibal.SingleSwap memory singleswap,
//        Ibal.BatchSwapStep [] memory batchswap,
//        IAsset[] memory assets,
//        Ibal.SwapKind kind,
//        //Ibal.FundManagement memory funds,
//        //uint limit,
//        int256[] memory limits
//        */
//const web3 = require("web3");
//var provider = new web3('https://rinkeby.infura.io/v3/0a2c350c40b442b895262df39adcd52c');
//const weth = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
//const Usdc = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
//const grt  = "0xc944E90C64B2c07662A292be6244BDf05Cda44a7";
//const Dai  = "0x6b175474e89094c44da98b954eedeac495271d0f";
//const Bal  = "0xba100000625a3754423978a60c9317c58a424e3D"; 
//
////const inst = new Dai;
////let routeToken =[Dai,grt, Usdc];
//let routeToken = [weth, Dai];
//let dexRoute = [0]
////let amountIn   = [web3.utils.toWei("0.1"),web3.utils.toWei("0.09"),];
////let amountOut  = [web3.utils.toWei("0"),  web3.utils.toWei("0")];
////let options    = [0,0];
//////let path       = ['0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', '0xba100000625a3754423978a60c9317c58a424e3D'];
////let path       = ['0x6b175474e89094c44da98b954eedeac495271d0f', '0xc944E90C64B2c07662A292be6244BDf05Cda44a7', '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'];
//////let path       = ['0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2','0x6b175474e89094c44da98b954eedeac495271d0f'];
//////let path       = ['0xc944E90C64B2c07662A292be6244BDf05Cda44a7', '0xba100000625a3754423978a60c9317c58a424e3D'];
////let   dealine    = 1672450490;
////const balStruct = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2','0xba100000625a3754423978a60c9317c58a424e3D', 0, '0x']] 
////const funds      = ['0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', false, '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', false];
////const limit      = web3.utils.toWei("1");
////
////  
//before(async function () {
//swap = await ethers.getContractFactory("swap");
//let routeToken = [weth, Dai];
//let dexRoute = [0]
//let amountIn   = [web3.utils.toWei("0.1"),web3.utils.toWei("0.09"),];
//let amountOut  = [web3.utils.toWei("0"),  web3.utils.toWei("0")];
//let options    = [0,0];
//let path       = ['0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', '0xba100000625a3754423978a60c9317c58a424e3D'];
////let path       = ['0x6b175474e89094c44da98b954eedeac495271d0f', '0xc944E90C64B2c07662A292be6244BDf05Cda44a7', '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'];
//////let path       = ['0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2','0x6b175474e89094c44da98b954eedeac495271d0f'];
//////let path       = ['0xc944E90C64B2c07662A292be6244BDf05Cda44a7', '0xba100000625a3754423978a60c9317c58a424e3D'];
//let   dealine    = 1672450490;
//const balStruct = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2','0xba100000625a3754423978a60c9317c58a424e3D', 0, '0x']] 
////const funds      = ['0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', false, '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', false];
//const limit      = web3.utils.toWei("1");
//    //erc20 = await ethers.getContractFactory("swap");
//  //DaiFact  = await ethers.getContractAt("ERC20", Dai);
//  //BalFact = await ethers.getContractAt("ERC20", Bal);
//  //grtFact  = await ethers.getContractAt("ERC20", grt);
//  //WEthFact = await ethers.getContractAt("ERC20", weth);
//   // console.log(WethFact);
//    //console.log(WethFact);
//    //console.log(WethFact);
//    //console.log(WethFact.address);
//    //[owner, addr1, addr2, ...addrs] = await ethers.getSigners();
//   //WETH9 = await WethFact.deploy();
//  swap = await swap.deploy();
//   console.log(swap.address);
//    //console.log(swap)
//  });
//  //0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
//
//  
//  describe("Swap", function () {
//    it("Should swap Tokens Eth to Dai via uniswap Option=>1", async function () {
//      //console.log(amountIn[0])
//      //abc = await WethFact.balanceOf('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266');
//      //  abc  = await WethFact.approve('0x720472c8ce72c2A2D711333e064ABD3E6BbEAdd3', 1000000000000000);
//      // console.log("12456",abc);
//      //DaiApprove  = await DaiFact.approve('0xa7c59f010700930003b33ab25a7a0679c860f29c', web3.utils.toWei("1.2"));
//      //GrtApprove  = await grtFact.approve('0xa7c59f010700930003b33ab25a7a0679c860f29c', web3.utils.toWei("0.8"));
//       //console.log("124567",abc1);
//      //console.log(await WETH9.balanceof('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'));
//     // console.log(await WETH9.totalSupply());
//   //  DaiApprove  = await DaiFact.approve('0xd0141e899a65c95a556fe2b27e5982a6de7fdd7a', web3.utils.toWei("1"));
//    let result  = expect(await swap.dex ( 
//        routeToken,
//        dexRoute,
//        amountIn,
//        amountOut,
//        options,
//        dealine,
//        path,
//        balStruct,
//        funds,
//        limit,
//        {value: web3.utils.toWei("1")}
//        ));
//      //console.log(result);
//      //abc = await WethFact.balanceOf('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266');
//      // abc1  = await WethFact.approve('0xd0141e899a65c95a556fe2b27e5982a6de7fdd7a', web3.utils.toWei("1"));
//      // console.log("12456",abc);
//       
//       const balanceFrom = provider.utils.fromWei(
//        await provider.eth.getBalance('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'),
//        'ether'
//     );
//     //console.log("123456789",balanceFrom);
//    });
//
//   /* it("Should swap Tokens Dai to Weth", async function () {
//      
//      routeToken =[weth,Dai];
//      dexRoute   = [1];
//      amountIn   = [100];
//      amountOut  = [1000];
//      options    = [1];
//      path       = ['0x6b175474e89094c44da98b954eedeac495271d0f','0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'];
//     // Dai.approve('0x720472c8ce72c2A2D711333e064ABD3E6BbEAdd3',amountIn);
//    let result  =expect(await swap.dex ( 
//        routeToken,
//        dexRoute,
//        amountIn,
//        amountOut,
//        options,
//        dealine,
//        path,
//        balStruct,
//        funds,
//        limit,
//        {value:'100'}));
//        console.log(result);*/
//    //});
//   
//
//    
//});