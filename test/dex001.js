const {expect} = require('chai');
const web3 = require("web3");
//var provider = new web3('https://rinkeby.infura.io/v3/0a2c350c40b442b895262df39adcd52c');

const ETH  = "0x0000000000000000000000000000000000000000";
const Bal  = "0xba100000625a3754423978a60c9317c58a424e3D"; //0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014
const USDC = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const Ring = "0x9469d013805bffb7d3debe5e7839237e535ec483";
const Dai  = "0x6b175474e89094c44da98b954eedeac495271d0f";
const BalN = "0x52C9886d5D87B0f06EbACBEff750B5Ffad5d17d9"; //0x7edde0cb05ed19e03a9a47cd5e53fc57fde1c80c0002000000000000000000c8
const Bal1 = "0x8a2228705ec979961F0e16df311dEbcf097A2766"; //0x10a2f8bd81ee2898d7ed18fb8f114034a549fa59000200000000000000000090 
const USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
describe("Deployment & Swapping", function(){
    it("123", async function(){
        const cont_instance = await ethers.getContractFactory("aggregator");
        swap          = await cont_instance.deploy();
        console.log("123", swap.address);
        
    });

    it("swap :with dex 0, path(Weth,Dai) ", async function(){
        let Tokens_In_Out = [WETH,Dai];
        let deadline =  111111111111111;
        let dex_route = [0];
        let amountIn = [web3.utils.toWei("19"), 43529527590];
        let options = [2];
        let path = [WETH,Dai];
        let limit1 = web3.utils.toWei("0");
        const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,ETH,Bal,43529527590,'0x'];
        let Batch_swap = [['0x7edde0cb05ed19e03a9a47cd5e53fc57fde1c80c0002000000000000000000c8',0,1,43529527590,"0x"]];
        let Assets = [USDC, BalN];
        let kind = 0;
        let limit = [43529527590,0];
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
            {value: web3.utils.toWei("19")}
        );
        //console.log(result);
    });

    it(" dex 0,2 path(Dai,bal) ", async function(){
        let Tokens_In_Out = [Dai,Bal];
        let deadline =  111111111111111;
        let dex_route = [0,0,1];
        let amountIn = [web3.utils.toWei("1000"),0];
        let options = [0,1];
        let path = [Dai,USDC,WETH,Bal];
        let limit1 = web3.utils.toWei("0");
        const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,ETH,Bal,372161744283342097n,'0x'];
        let Batch_swap = [['0x7edde0cb05ed19e03a9a47cd5e53fc57fde1c80c0002000000000000000000c8',0,1,4369780,"0x"]];
        let Assets = [Dai,USDC,WETH,Bal];
        let kind = 0;
        let limit = [4369780,0];
        let USDCFact = await ethers.getContractAt("ERC20", Dai);
        USDCFact.approve("0x01c1DeF3b91672704716159C9041Aeca392DdFfb", web3.utils.toWei("10000000"));
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
            //{value: 372161744283342097n}
        );
        //console.log(result);
    });

    it("swap :with dex 0 Dai, WETh, ", async function(){
        let Tokens_In_Out = [Dai,WETH];
        let deadline =  111111111111111;
        let dex_route = [0,1,0];
        let amountIn = [web3.utils.toWei("15"), 0];
        let options = [0,1];
        let path = [Dai,USDC,Bal,WETH];
        let limit1 = web3.utils.toWei("0");
        const single_swap = ['0x9c08c7a7a89cfd671c79eacdc6f07c1996277ed5000200000000000000000025',0,USDC,Bal,43529527590,'0x'];
        let Batch_swap = [['0x7edde0cb05ed19e03a9a47cd5e53fc57fde1c80c0002000000000000000000c8',0,1,43529527590,"0x"]];
        let Assets = [USDC, BalN];
        let kind = 0;
        let limit = [43529527590,0];
        let USDCFact = await ethers.getContractAt("ERC20", Dai);
        USDCFact.approve("0x01c1DeF3b91672704716159C9041Aeca392DdFfb", web3.utils.toWei("10000000"));
        console.log("Contract", swap.address);

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
            //{value: 1}
        );
        //console.log(result);
    });

    it("swap :with dex 0, ", async function(){
        let Tokens_In_Out = [Dai,Bal];
        let deadline =  111111111111111;
        let dex_route = [1,0,0];
        let amountIn = [web3.utils.toWei("15"), 0];
        let options = [1,2];
        let path = [USDC,WETH,Bal];
        let limit1 = web3.utils.toWei("0");
        const single_swap = ['0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063',0,Dai,USDC,web3.utils.toWei("15"),'0x'];
        let Batch_swap = [['0x7edde0cb05ed19e03a9a47cd5e53fc57fde1c80c0002000000000000000000c8',0,1,43529527590,"0x"]];
        let Assets = [USDC, BalN];
        let kind = 0;
        let limit = [43529527590,0];
        let USDCFact = await ethers.getContractAt("ERC20", Dai);
        USDCFact.approve("0x01c1DeF3b91672704716159C9041Aeca392DdFfb", web3.utils.toWei("10000000"));
        console.log("Contract", swap.address);

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
            //{value: 1}
        );
        //console.log(result);
    });



});
