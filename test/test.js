//const {expect} = require('chai');
//const web3 = require("web3");
//var provider = new web3('https://rinkeby.infura.io/v3/0a2c350c40b442b895262df39adcd52c');
//const weth = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
//const Usdc = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
//const grt  = "0xc944E90C64B2c07662A292be6244BDf05Cda44a7";
//const Dai  = "0x6b175474e89094c44da98b954eedeac495271d0f";
//const USDT = "0xdac17f958d2ee523a2206206994597c13d831ec7";
//const Bal  = "0xba100000625a3754423978a60c9317c58a424e3D";
//const BAT  = "0x0d8775f648430679a709e98d2b0cb6250d2887ef";
//const UNI  = "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984";
//const ZRX  = "0xe41d2489571d322189246dafa5ebde1f4699f498";
//const Tribe= "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B";
//const ETH  = "0x0000000000000000000000000000000000000000";
//const NUSDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"

//        address[] memory Tokens_In_Out,
//        uint256[] memory amountIn_deadline,
//        uint[] memory DexRoute,   
//        uint[] memory U_amountIn, //for uniswap 
//        int[] memory options,           
//        address[] memory path,
//        Ibal.SingleSwap calldata singleswap,
//        Ibal.BatchSwapStep [] memory batchswap,
//        IAsset[] memory assets,
//        Ibal.SwapKind kind,
//        uint256[] memory limits

//describe("Deployment & Swapping", function(){
//    it("123", async function(){
//        const cont_instance = await ethers.getContractFactory("swap");
//        swap          = await cont_instance.deploy();
//        console.log("123", swap.address);
//        
//    });
    //it("swap :with dex 0, path(Weth,Dai) ", async function(){
    //    let Tokens_In_Out = [weth,Dai];
    //    let amountIn_deadline = [web3.utils.toWei("1"), 111111111111111];
    //    let dex_route = [0];
    //    let amountIn = [web3.utils.toWei("1")];
    //    let options = [2];
    //    let path = [weth, Usdc];
    //    const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2','0xba100000625a3754423978a60c9317c58a424e3D',10,'0x'];
    //    let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,1000,"0x"]];
    //    let Assets = [weth, Dai];
    //    let kind = 0;
    //    let limit = [0];
    //    
    //    console.log("Contract Address==>", swap.address);
//
    //        let result = await swap.dex(
    //        Tokens_In_Out,
    //        amountIn_deadline,
    //        dex_route,
    //        amountIn,
    //        options,  
    //        path,
    //        single_swap,
    //        Batch_swap,
    //        Assets,
    //        kind,
    //        limit,
    //        {value: web3.utils.toWei("1")}
    ////    );
    ////});
////
    //it("swap:with dex 0,0: Path(weth, Dai, Usdc)", async function(){
    //    let Tokens_In_Out = [weth,Usdc];
    //    let amountIn_deadline = [web3.utils.toWei("1"), 111111111111111];
    //    let dex_route = [0];
    //    let amountIn = [web3.utils.toWei("1"), web3.utils.toWei("2900")];
    //    let options = [2,0];
    //    let path = [weth, Usdc];
    //    const single_swap = ['0x10a2f8bd81ee2898d7ed18fb8f114034a549fa59000200000000000000000090',0,'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2','0xba100000625a3754423978a60c9317c58a424e3D',10,'0x'];
    //    let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,1000,"0x"]];
    //    let Assets = [weth, Dai];
    //    let kind = 0;
    //    let limit = [0];
    //    let DaiFAct=await ethers.getContractAt("ERC20",Dai);
    //    DaiFAct.approve("0x3aAde2dCD2Df6a8cAc689EE797591b2913658659", web3.utils.toWei("10000000000"));
    //    console.log("Contract Address==>", swap.address);
//
    //        let result = await swap.dex(
    //        Tokens_In_Out,
    //        amountIn_deadline,
    //        dex_route,
    //        amountIn,
    //        options,  
    //        path,
    //        single_swap,
    //        Batch_swap,
    //        Assets,
    //        kind,
    //        limit,
    //        {value: web3.utils.toWei("1")}
    //    );
    //});
//
    //it("swap:with dex 0: path(Dai, weth) ", async function(){
    //    let Tokens_In_Out = [Dai,weth];
    //    let amountIn_deadline = [web3.utils.toWei("1"), 111111111111111];
    //    let dex_route = [0];
    //    let amountIn = [web3.utils.toWei("290")];
    //    let options = [1];
    //    let path = [Dai, weth];
    //    const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2','0xba100000625a3754423978a60c9317c58a424e3D',10,'0x'];
    //    let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,1000,"0x"]];
    //    let Assets = [weth, Dai];
    //    let kind = 0;
    //    let limit = [0];
    //    let DaiFAct= await ethers.getContractAt("ERC20",Dai);
    //    let UniFact= await ethers.getContractAt("ERC20",UNI);
    //    DaiFAct.approve("0x3aAde2dCD2Df6a8cAc689EE797591b2913658659", web3.utils.toWei("10000000000"));
    //    UniFact.approve("0x3aAde2dCD2Df6a8cAc689EE797591b2913658659", web3.utils.toWei("10000000000"));
    //    console.log("Contract Address==>", swap.address);
//
    //        let result = await swap.dex(
    //        Tokens_In_Out,
    //        amountIn_deadline,
    //        dex_route,
    //        amountIn,
    //        options,  
    //        path,
    //        single_swap,
    //        Batch_swap,
    //        Assets,
    //        kind,
    //        limit,
    //        {value: web3.utils.toWei("1")}
    //    );
    //});
//
//
    //it("swap:with dex 0,0,0", async function(){
    //    let Tokens_In_Out = [weth,Usdc];
    //    let amountIn_deadline = [web3.utils.toWei("1"), 111111111111111];
    //    let dex_route = [0,0,0];
    //    let amountIn = [web3.utils.toWei("10"), web3.utils.toWei(" 0.0045844"), web3.utils.toWei("448.179")];
    //    let options = [1,2,0];
    //    let path = [Dai,weth,'0x9469d013805bffb7d3debe5e7839237e535ec483', Usdc];
    //    const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2','0xba100000625a3754423978a60c9317c58a424e3D',10,'0x'];
    //    let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,1000,"0x"]];
    //    let Assets = [weth, Dai];
    //    let kind = 0;
    //    let limit = [0];
    //    let DaiFAct= await ethers.getContractAt("ERC20",Dai);
    //    let UniFact= await ethers.getContractAt("ERC20",UNI);
    //    let UsdcFAct= await ethers.getContractAt("ERC20",Usdc);
    //    let ring = await ethers.getContractAt("ERC20", '0x9469d013805bffb7d3debe5e7839237e535ec483');
    //    ring.approve(' 0x1f10F3Ba7ACB61b2F50B9d6DdCf91a6f787C0E82',web3.utils.toWei("10000000000"))
    //    DaiFAct.approve("0x3aAde2dCD2Df6a8cAc689EE797591b2913658659", web3.utils.toWei("10000000000"));
    //    UniFact.approve("0x3aAde2dCD2Df6a8cAc689EE797591b2913658659", web3.utils.toWei("10000000000"));
    //    console.log("Contract Address==>", swap.address);
//
    //        let result = await swap.dex(
    //        Tokens_In_Out,
    //        amountIn_deadline,
    //        dex_route,
    //        amountIn,
    //        options,  
    //        path,
    //        single_swap,
    //        Batch_swap,
    //        Assets,
    //        kind,
    //        limit,
    //        {value: web3.utils.toWei("1")}
    //    );
    //});
//
//
    //it("swap:with dex 0: path(Dai, weth, UNI) ", async function(){
    //    let Tokens_In_Out = [Dai,UNI];
    //    let amountIn_deadline = [web3.utils.toWei("1"), 111111111111111];
    //    let dex_route = [0,0];
    //    let amountIn = [web3.utils.toWei("2900"), web3.utils.toWei("1")];
    //    let options = [1,2];
    //    let path = [Dai, weth, UNI];
    //    const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2','0xba100000625a3754423978a60c9317c58a424e3D',10,'0x'];
    //    let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,1000,"0x"]];
    //    let Assets = [weth, Dai];
    //    let kind = 0;
    //    let limit = [0];
    //    let DaiFAct= await ethers.getContractAt("ERC20",Dai);
    //    let UniFact= await ethers.getContractAt("ERC20",UNI);
    //    DaiFAct.approve("0x3aAde2dCD2Df6a8cAc689EE797591b2913658659", web3.utils.toWei("10000000000"));
    //    UniFact.approve("0x3aAde2dCD2Df6a8cAc689EE797591b2913658659", web3.utils.toWei("10000000000"));
    //    console.log("Contract Address==>", swap.address);
//
    //        let result = await swap.dex(
    //        Tokens_In_Out,
    //        amountIn_deadline,
    //        dex_route,
    //        amountIn,
    //        options,  
    //        path,
    //        single_swap,
    //        Batch_swap,
    //        Assets,
    //        kind,
    //        limit,
    //        {value: web3.utils.toWei("1")}
    //    );
    //});


    //it("swap:with dex 0: path(Dai, UNI, weth) ", async function(){
    //    let Tokens_In_Out = [Dai,weth];
    //    let amountIn_deadline = [web3.utils.toWei("1"), 111111111111111];
    //    let dex_route = [0,0];
    //    let amountIn = [web3.utils.toWei("1000"), web3.utils.toWei("1")];
    //    let options = [0,1];
    //    let path = [Dai, UNI, weth];
    //    const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2','0xba100000625a3754423978a60c9317c58a424e3D',10,'0x'];
    //    let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,1000,"0x"]];
    //    let Assets = [weth, Dai];
    //    let kind = 0;
    //    let limit = [0];
    //    let DaiFAct= await ethers.getContractAt("ERC20",Dai);
    //    let UniFact= await ethers.getContractAt("ERC20",Usdc);
    //    DaiFAct.approve("0x3aAde2dCD2Df6a8cAc689EE797591b2913658659", web3.utils.toWei("10000000000"));
    //    UniFact.approve("0x3aAde2dCD2Df6a8cAc689EE797591b2913658659", web3.utils.toWei("10000000000"));
    //    console.log("Contract Address==>", swap.address);
//
    //        let result = await swap.dex(
    //        Tokens_In_Out,
    //        amountIn_deadline,
    //        dex_route,
    //        amountIn,
    //        options,  
    //        path,
    //        single_swap,
    //        Batch_swap,
    //        Assets,
    //        kind,
    //        limit,
    //        {value: web3.utils.toWei("0")}
    //    );
    //});

    // it("swap:with d", async function(){
    //     let Tokens_In_Out = [Dai,Bal];
    //     let amountIn_deadline = [111111111111, 111111111111111];
    //     let dex_route = [0,1];
    //     let amountIn = [web3.utils.toWei("1")];
    //     let options = [2];
    //     let path = [weth, Usdc];
    //     const single_swap = ['0x10a2f8bd81ee2898d7ed18fb8f114034a549fa59000200000000000000000090',0,'0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48','0x8a2228705ec979961F0e16df311dEbcf097A2766',1,'0x'];
    //     let Batch_swap = [['0x10a2f8bd81ee2898d7ed18fb8f114034a549fa59000200000000000000000090',0,1,web3.utils.toWei("1"),"0x"]];
    //     let Assets = ['0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', '0x8a2228705ec979961F0e16df311dEbcf097A2766'];
    //     let kind = 0;
    //     let limit = [web3.utils.toWei("100000000000000000")];
    //     let DaiFAct= await ethers.getContractAt("ERC20",Usdc);
    //     let UniFact= await ethers.getContractAt("ERC20",UNI);
    //     DaiFAct.approve("0x1f10F3Ba7ACB61b2F50B9d6DdCf91a6f787C0E82", web3.utils.toWei("10000000000"));
    //     UniFact.approve("0x1f10F3Ba7ACB61b2F50B9d6DdCf91a6f787C0E82", web3.utils.toWei("10000000000"));
    //     console.log("Contract Address==>", swap.address);

    //         let result = await swap.dex(
    //         Tokens_In_Out,
    //         amountIn_deadline,
    //         dex_route,
    //         amountIn,
    //         options,  
    //         path,
    //         single_swap,
    //         Batch_swap,
    //         Assets,
    //         kind,
    //         limit,
    //         {value: web3.utils.toWei("1")}
    //     );
    //     console.log("helloooooooooo",result);
    // });
    //console.log(result);
//
//it("swap:with dex 2", async function(){
//        let Tokens_In_Out = [Dai,Dai];
//        let amountIn_deadline = [11111111111111, 1];
//        let dex_route = [0,2];
//        let amountIn = [web3.utils.toWei("1")];
//        let options = [2];
//        let path = [weth, Usdc];
//        const single_swap = ['0x10a2f8bd81ee2898d7ed18fb8f114034a549fa59000200000000000000000090',0,'0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48','0x8a2228705ec979961F0e16df311dEbcf097A2766',1,'0x'];
//        let Batch_swap = [['0x10a2f8bd81ee2898d7ed18fb8f114034a549fa59000200000000000000000090',0,1,1,"0x"]];
//        let Assets = ['0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48','0x8a2228705ec979961F0e16df311dEbcf097A2766'];
//        let kind = 0;
//        let limit = [web3.utils.toWei("1000000000000000000000000"), web3.utils.toWei("1")];
//        let DaiFAct= await ethers.getContractAt("ERC20",Dai);
//        let UniFact= await ethers.getContractAt("ERC20",Usdc);
//        UniFact.approve("0x1f10F3Ba7ACB61b2F50B9d6DdCf91a6f787C0E82", web3.utils.toWei("10000000000000000000000000000000000"));
//     //   

//        //UniFact.approve("0x3aAde2dCD2Df6a8cAc689EE797591b2913658659", web3.utils.toWei("10000000000"));
//        console.log("Contract Address==>", swap.address);

//            let result = await swap.dex(
//            Tokens_In_Out,
//            amountIn_deadline,
//            dex_route,
//            amountIn,
//            options,  
//            path,
//            single_swap,
//            Batch_swap,
//            Assets,
//            kind,
//            limit,
//            {value: web3.utils.toWei("1")}
//        );
//    });

//      it("swap:with dex 1(Eth to Bal)", async function(){
//         let Tokens_In_Out = [ETH,Bal];
//         let amountIn_deadline = [11111111111111, 111111111111111];
//         let dex_route = [1];
//         let amountIn = [web3.utils.toWei("1")];
//         let options = [2];
//         let path = [weth, Usdc];
//         const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0x0000000000000000000000000000000000000000','0xba100000625a3754423978a60c9317c58a424e3D',web3.utils.toWei('1'),'0x'];
//         let Batch_swap = [['0x10a2f8bd81ee2898d7ed18fb8f114034a549fa59000200000000000000000090',0,1,1,"0x"]];
//         let Assets = ['0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48','0x8a2228705ec979961F0e16df311dEbcf097A2766'];
//         let kind = 0;
//         let limit = [web3.utils.toWei("1000000000000000000000000"), web3.utils.toWei("1")];
//         let DaiFAct= await ethers.getContractAt("ERC20",Dai);
//         let UniFact= await ethers.getContractAt("ERC20",Usdc);
//         UniFact.approve("0x1f10F3Ba7ACB61b2F50B9d6DdCf91a6f787C0E82", web3.utils.toWei("10000000000000000000000000000000000"));
        
//     //     //UniFact.approve("0x3aAde2dCD2Df6a8cAc689EE797591b2913658659", web3.utils.toWei("10000000000"));
//     //     console.log("Contract Address==>", swap.address);

//             let result = await swap.dex(
//             Tokens_In_Out,
//             amountIn_deadline,
//             dex_route,
//             amountIn,
//             options,  
//             path,
//             single_swap,
//             Batch_swap,
//             Assets,
//             kind,
//             limit,
//             {value: web3.utils.toWei("1")}
//         );
//     });

//     it("swap:with dex 1(Eth to Bal)", async function(){
//         let Tokens_In_Out = [ETH,Bal];
//         let amountIn_deadline = [11111111111111, 111111111111111];
//         let dex_route = [2];
//         let amountIn = [web3.utils.toWei("1")];
//         let options = [2];
//         let path = [weth, Usdc];
//         const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0x0000000000000000000000000000000000000000','0xba100000625a3754423978a60c9317c58a424e3D',web3.utils.toWei('1'),'0x'];
//         let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,web3.utils.toWei("1"),'0x']];
//         let Assets = ['0x0000000000000000000000000000000000000000','0xba100000625a3754423978a60c9317c58a424e3D'];
//         let kind = 0;
//         let limit = [web3.utils.toWei("1"), web3.utils.toWei("1")];
//         let DaiFAct= await ethers.getContractAt("ERC20",Dai);
//         // let UniFact= await ethers.getContractAt("ERC20",Usdc);
//         // UniFact.approve("0x1f10F3Ba7ACB61b2F50B9d6DdCf91a6f787C0E82", web3.utils.toWei("10000000000000000000000000000000000"));
        

//         //UniFact.approve("0x3aAde2dCD2Df6a8cAc689EE797591b2913658659", web3.utils.toWei("10000000000"));
//         console.log("Contract Address==>", swap.address);

//             let result = await swap.dex(
//             Tokens_In_Out,
//             amountIn_deadline,
//             dex_route,
//             amountIn,
//             options,  
//             path,
//             single_swap,
//             Batch_swap,
//             Assets,
//             kind,
//             limit,
//             {value: web3.utils.toWei("1")}
//         );
//     });

//         // it("Gives Balance after swap", async function(){
//         //     let DaiFAct=await ethers.getContractAt("ERC20",Bal);
//         //     //DaiFAct.approve("0x3347B4d90ebe72BeFb30444C9966B2B990aE9FcB", web3.utils.toWei("10000000000"));
//         //     let Dai_balance = await DaiFAct.balanceOf('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266');
//         //     console.log("USDC=>", Dai_balance);
//         // });
// });
