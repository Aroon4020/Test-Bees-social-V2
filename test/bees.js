const {expect} = require('chai');
const web3 = require("web3");

const ETH  = "0x0000000000000000000000000000000000000000";
const Bal  = "0xba100000625a3754423978a60c9317c58a424e3D";
const USDC = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const Ring = "0x9469d013805bffb7d3debe5e7839237e535ec483";
const Dai  = "0x6b175474e89094c44da98b954eedeac495271d0f";
const Wpe  = "0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b";
const M2   = "0x965d79f1a1016b574a62986e13ca8ab04dfdd15c";

describe("Deployment & Swapping", function(){
    it("123", async function(){
        const cont_instance = await ethers.getContractFactory("swap1");
        swap          = await cont_instance.deploy();
        console.log("123", swap.address);
        
    });

    it("swap :with dex 0, path(Weth,M2) ", async function(){
        //let Tokens_In_Out = [WETH,M2];
        let deadline =  111111111111111;
        //let dex_route = 0];
        let amountIn = web3.utils.toWei("0.01");
        let amountOut =  web3.utils.toWei("0.002");
        let options = 2;
        let path = ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",Wpe];
        //let limit1 = web3.utils.toWei("210");
        //const single_swap = ['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,'0x0000000000000000000000000000000000000000','0xba100000625a3754423978a60c9317c58a424e3D',web3.utils.toWei("10"),'0x'];
       // let Batch_swap = [['0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',0,1,1000,"0x"]];
        //let Assets = [WETH, Dai];
        //let kind = 0;
        //let limit = [1111111];
        let USDCFact = await ethers.getContractAt("ERC20", WETH);
        USDCFact.approve("0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849", web3.utils.toWei("10000000"));
        console.log("Contract Address==>", swap.address);

            let result = await swap.UniswapV2Router(
            amountIn,
            amountOut,
            deadline,
            path,
            options,
            {value: web3.utils.toWei("0.01")}
        );
        //console.log(result);
    });

});    
