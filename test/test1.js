const {expect} = require('chai');
const web3 = require("web3");
//var provider = new web3('https://rinkeby.infura.io/v3/0a2c350c40b442b895262df39adcd52c');

const ETH  = "0x0000000000000000000000000000000000000000";
const Bal  = "0xba100000625a3754423978a60c9317c58a424e3D";
const USDC = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const Ring = "0x9469d013805bffb7d3debe5e7839237e535ec483";
const Dai  = "0x6b175474e89094c44da98b954eedeac495271d0f";

describe("Deployment & Swapping", function(){
    it("123", async function(){
        const cont_instance = await ethers.getContractFactory("swap");
        swap          = await cont_instance.deploy();
        console.log("123", swap.address);
        
    });

    it("swap :with dex 0, path(Weth,Dai) ", async function(){
        let Tokens_In_Out = [WETH,Dai];
        let deadline =  111111111111111;
        let dex_route = [1];
        let amountIn = [web3.utils.toWei("1.5"), web3.utils.toWei("3000"),];
        let options = [2];
        let path = [WETH,Dai];
        let limit1 = web3.utils.toWei("210");
        const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0x0000000000000000000000000000000000000000','0xba100000625a3754423978a60c9317c58a424e3D',web3.utils.toWei("1.5"),'0x'];
        let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,1000,"0x"]];
        let Assets = [WETH, Dai];
        let kind = 0;
        let limit = [1111111];
        //let USDCFact = await ethers.getContractAt("ERC20", Dai);
        //USDCFact.approve("0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849", web3.utils.toWei("10000000"));
        console.log("Contract Address==>", swap.address);

            let result = await swap.dex(
            Tokens_In_Out,
            dex_route,
            amountIn,
            options,  
            path,
            single_swap,
            limit1,
            Batch_swap,
            Assets,
            kind,
            limit,
            deadline,
            {value: web3.utils.toWei("1.5")}
        );
        console.log(result);
    });

    it("swap :with dex 0, path(Weth,Dai) ", async function(){
        let Tokens_In_Out = [Dai,Bal];
        let deadline =  111111111111111;
        let dex_route = [0,1];
        let amountIn = [web3.utils.toWei("3000"), web3.utils.toWei("1")];
        let options = [1];
        let path = [Dai,WETH];
        let limit1 = web3.utils.toWei("210");
        const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0x0000000000000000000000000000000000000000','0xba100000625a3754423978a60c9317c58a424e3D',web3.utils.toWei("1"),'0x'];
        let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,web3.utils.toWei("1"),"0x"]];
        let Assets = [WETH, Dai];
        let kind = 0;
        let limit = [web3.utils.toWei("1")];
        let USDCFact = await ethers.getContractAt("ERC20", Dai);
        USDCFact.approve("0x32EEce76C2C2e8758584A83Ee2F522D4788feA0f", web3.utils.toWei("10000000"));
        console.log("Contract Address==>", swap.address);

            let result = await swap.dex(
            Tokens_In_Out,
            dex_route,
            amountIn,
            options,  
            path,
            single_swap,
            limit1,
            Batch_swap,
            Assets,
            kind,
            limit,
            deadline,
            {value: web3.utils.toWei("1")}
        );
        //console.log(result);
    });

    

    it("swap :with dex 0, path(Weth,Dai) ", async function(){
        let Tokens_In_Out = [WETH,"0x9469d013805bffb7d3debe5e7839237e535ec483"];
        let deadline =  111111111111111;
        let dex_route = [0,0];
        let amountIn = [web3.utils.toWei("1"), web3.utils.toWei("2700"), web3.utils.toWei("1000")];
        let options = [2,0];
        let path = [WETH, Dai, "0x9469d013805bffb7d3debe5e7839237e535ec483",Dai];
        let limit1 = web3.utils.toWei("210");
        const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0x0000000000000000000000000000000000000000','0xba100000625a3754423978a60c9317c58a424e3D',web3.utils.toWei("1"),'0x'];
        let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,1000,"0x"]];
        let Assets = [WETH, Dai];
        let kind = 0;
        let limit = [1111111];
        //let USDCFact = await ethers.getContractAt("ERC20", Dai);
        //USDCFact.approve("0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849", web3.utils.toWei("10000000"));
        console.log("Contract Address==>", swap.address);

            let result = await swap.dex(
            Tokens_In_Out,
            dex_route,
            amountIn,
            options,  
            path,
            single_swap,
            limit1,
            Batch_swap,
            Assets,
            kind,
            limit,
            deadline,
            {value: web3.utils.toWei("1")}
        );
        //console.log(result);
    });

    it("swap :with dex 0, path(USDC>WETH>RING>DAI) ", async function(){
        let Tokens_In_Out = ['0xba100000625a3754423978a60c9317c58a424e3D',WETH];
        let deadline = 111111111111111;
        let dex_route = [1];
        let amountIn = [web3.utils.toWei("10"), web3.utils.toWei("0.0045844"), web3.utils.toWei("48.179"), web3.utils.toWei("10")];
        let options = [1,2,0];
        let path = [Dai,WETH,'0x9469d013805bffb7d3debe5e7839237e535ec483', USDC];
        let limit1 = 0;
        const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0xba100000625a3754423978a60c9317c58a424e3D','0x0000000000000000000000000000000000000000',web3.utils.toWei("1"),'0x'];
        let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,web3.utils.toWei("1"),"0x"]];
        let Assets = ["0xba100000625a3754423978a60c9317c58a424e3D","0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"];
        let kind = 0;
        let limit = [web3.utils.toWei("10000"),web3.utils.toWei("10000")];
        let USDCFact = await ethers.getContractAt("ERC20",'0xba100000625a3754423978a60c9317c58a424e3D');
        USDCFact.approve("0x32EEce76C2C2e8758584A83Ee2F522D4788feA0f", web3.utils.toWei("10000000"));
        //let RingFAct  = await ethers.getContractAt("ERC20",Dai);
       //let USDCFact = await ethers.getContractAt("ERC20", "0x9469d013805bffb7d3debe5e7839237e535ec483");
        //let WETHFact = await ethers.getContractAt("ERC20", WETH);
        //RingFAct.approve("0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849", web3.utils.toWei("10000000"));
        //USDCFact.approve("0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849", web3.utils.toWei("10000000"));
        //WETHFact.approve("0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849", web3.utils.toWei("10000000"));

        
        console.log("Contract Address==>", swap.address);
        //console.log(web3.utils.toWei("0.0045"));

            let result = await swap.dex(
            Tokens_In_Out,
            dex_route,
            amountIn,
            options,  
            path,
            single_swap,
            limit1,
            Batch_swap,
            Assets,
            kind,
            limit,
            deadline,
           // {value: web3.utils.toWei("1")}
        );
        //console.log(result);
    });


    // it("swap :with dex 0, path(USDC>WETH>RING>DAI) ", async function(){
    //     let Tokens_In_Out = [WETH,Ring];
    //     let deadline = 111111111111111;
    //     let dex_route = [0,0];
    //     let amountIn = [web3.utils.toWei("1"),100000000,web3.utils.toWei("10")];
    //     let options = [2,0];
    //     let path = [WETH,Dai,Ring];
    //     let limit1 = 0;
    //     const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0x0000000000000000000000000000000000000000','0xba100000625a3754423978a60c9317c58a424e3D',10,'0x'];
    //     let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,1000,"0x"]];
    //     let Assets = [USDC, "0x52C9886d5D87B0f06EbACBEff750B5Ffad5d17d9"];
    //     let kind = 0;
    //     let limit = [0];

    //     let RingFAct  = await ethers.getContractAt("ERC20",Dai);
    //     let USDCFact = await ethers.getContractAt("ERC20", USDC);
    //     let WETHFact = await ethers.getContractAt("ERC20", WETH);
    //     RingFAct.approve("0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849", web3.utils.toWei("10000000"));
    //     USDCFact.approve("0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849", web3.utils.toWei("10000000"));
    //     WETHFact.approve("0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849", web3.utils.toWei("10000000"));

        
    //     console.log("Contract Address==>", swap.address);
    //     console.log(web3.utils.toWei("0.0045"));

    //         let result = await swap.dex(
    //         Tokens_In_Out,
    //         deadline,
    //         dex_route,
    //         amountIn,
    //         options,  
    //         path,
    //         single_swap,
    //         limit1,
    //         Batch_swap,
    //         Assets,
    //         kind,
    //         limit,
    //         {value: web3.utils.toWei("1")}
    //     );
    // });


    // it("swap :with dex 0, path(USDC>WETH>RING>DAI) ", async function(){
    //     let Tokens_In_Out = [USDC,"0x8a2228705ec979961F0e16df311dEbcf097A2766"];
    //     let deadline =  111111111111111;
    //     let dex_route = [2];
    //     let amountIn = [web3.utils.toWei("1"),100000000,web3.utils.toWei("10")];
    //     let options = [2,0];
    //     let path = [WETH,Dai,Ring];
    //     let limit1 = web3.utils.toWei("100");
    //     const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0x0000000000000000000000000000000000000000','0xba100000625a3754423978a60c9317c58a424e3D',web3.utils.toWei("1"),'0x'];
    //     let Batch_swap = [['0x10a2f8bd81ee2898d7ed18fb8f114034a549fa59000200000000000000000090',0,1,10000000,"0x"]];
    //     let Assets = [USDC, "0x8a2228705ec979961F0e16df311dEbcf097A2766"];
    //     let kind = 0;
    //     let limit = [web3.utils.toWei("0.1"),0];

    //     let RingFAct  = await ethers.getContractAt("ERC20",Dai);
    //     let USDCFact = await ethers.getContractAt("ERC20", USDC);
    //     let WETHFact = await ethers.getContractAt("ERC20", WETH);
    //     RingFAct.approve("0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849", web3.utils.toWei("10000000"));
    //     USDCFact.approve("0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849", web3.utils.toWei("10000000"));
    //     WETHFact.approve("0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849", web3.utils.toWei("10000000"));

        
    //     console.log("Contract Address==>", swap.address);
    //     console.log(web3.utils.toWei("1"));

    //         let result = await swap.dex(
    //         Tokens_In_Out,
    //         deadline,
    //         dex_route,
    //         amountIn,
    //         options,  
    //         path,
    //         single_swap,
    //         limit1,
    //         Batch_swap,
    //         Assets,
    //         kind,
    //         limit,
    //         {value: web3.utils.toWei("1")}
    //     );
    // });

});    