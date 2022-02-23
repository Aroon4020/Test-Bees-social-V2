// // SPDX-License-Identifier: MIT

// pragma solidity ^0.6.6 || ^0.8.0;
// import './interface/IbalancerV2.sol';
// import "hardhat/console.sol";
// import './interface/IERC20.sol';
// import './interface/IAsset.sol';
// import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
// import './uniswap.sol';

// //all assigment from one variable to other variable is done to avoid stack-too-deep error 

// contract aggregator{
//     //reason for using multiple variable is: that each variable should have one purpose to serve
//     //reason for global variables is too avoid stack too deep error:    
//     uint optionIndex = 0;
//     address[]  updPath;
//     uint pathindex = 0;
//     uint amountOut=0;
//     uint amountin = 0;
//     uint amountIndex = 0;
//     uint outputIndex = 0;
//     address sender;
//     uint ethBalBefore;

//     //uint [] memory dexRoute1;
//     address tokenOut;
//     address tokenIn;
//     uint balOutput;

//     address private constant KWETH = 0xd0A1E359811322d97991E03f863a0C30C2cF029C;
//     address private constant BWETH = 0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1;
//     address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
//     address private constant ETH = 0x0000000000000000000000000000000000000000;
//     address private constant factory = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;
//     address private constant UNISWAP_ROUTER_ADDRESS = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
//     address private constant balancerVault = 0xBA12222222228d8Ba445958a75a0704d566BF2C8;
//     event BeeSwap(
//         address sender,
//         address tokenIn,
//         address tokenOut,
//         uint256 tokenInAmount,
//         uint256 tokenOutAmount,
//         uint256 timeStamp
//     );


//     fallback() external payable {
//   // get facet from function selector

// }
//     function dex(

//         address [] memory tokenInOut,
//         uint[] memory dexRoute,   
//         uint[] memory amountInOut,  
//         int[] memory options,           
//         address[] memory path,
//         Ibal.SingleSwap memory singleswap,
//         uint limit,
//         Ibal.BatchSwapStep [] memory swaps,
//         IAsset[] memory assets,
//         Ibal.SwapKind kind,
//         int256[] memory limits,
//         uint deadline
        
//         )
//         external payable{

//             //filling up Balanacer's Funds Struct
//             Ibal.FundManagement memory funds; 
//             funds.sender=address(this);
//             funds.fromInternalBalance = false;
//             funds.recipient = payable(address(this));
//             funds.toInternalBalance = false;
            
//             sender = msg.sender;
//             uint [] memory dexRoute1 = dexRoute;
//            //console.log("Dex.length",dexRoute.length);
//             tokenOut = tokenInOut[1];
//             tokenIn  = tokenInOut[0];
//             ethBalBefore = sender.balance;
//             amountin = amountInOut[amountIndex];
//             uint256 [] memory output;
            
//             amountin = amountInOut[amountIndex];
//             amountOut = amountInOut[amountIndex+1];
//             console.log("USers ETH Balance Before swap",ethBalBefore);
//             console.log("User balance***************************before swap", IERC20(address(tokenOut)).balanceOf(sender));
//             console.log("contract balance***************************before swap", IERC20(address(tokenOut)).balanceOf(address(this)));
//             for(uint i=0; i<dexRoute1.length; i++){
                
//                 //for Uniswap route
//                 if(dexRoute1[i] == 0)
//                 {
                    
//                     //getting amountin. amounout & path for swapping two tokens
                    
//                     updPath = [path[pathindex], path[pathindex+1]];
                    
//                     if(options[optionIndex] == 0 && dexRoute1[0] == optionIndex){ // 0,0

//                         IERC20(updPath[0]).transferFrom(sender, address(this), amountin);
//                         IERC20(updPath[0]).approve(UNISWAP_ROUTER_ADDRESS, amountin);
//                         output=IUniswapV2Router02(UNISWAP_ROUTER_ADDRESS).swapExactTokensForTokens(amountin,amountOut,updPath,address(this),deadline);
//                         optionIndex++;
//                         console.log("output******t2t",output[1]);
//                     }
//                     else if(options[optionIndex] == 0){
//                         IERC20(updPath[0]).approve(UNISWAP_ROUTER_ADDRESS, amountin);
//                         IUniswapV2Router02(UNISWAP_ROUTER_ADDRESS).swapExactTokensForTokens(output[1],amountOut,updPath,address(this),deadline);
//                         optionIndex++;
//                     }

//                     else if (options[optionIndex] == 1 && dexRoute1[0] == optionIndex) { 
//                         console.log("TK1*****ETH**************");    
//                         IERC20(updPath[0]).transferFrom(sender, address(this), amountin);
//                         IERC20(updPath[0]).approve(UNISWAP_ROUTER_ADDRESS, amountin);
//                         output=IUniswapV2Router02(UNISWAP_ROUTER_ADDRESS).swapExactTokensForETH(amountin,amountOut,updPath,address(this),deadline);
//                         optionIndex++;
//                         console.log("output******t2E",output[1]);
//                     }
//                     else if(options[optionIndex] == 1){
//                         //console.log("TK1*****ETH",output[1]);
//                         console.log("updPath[0]",updPath[0]);
//                         console.log("updPath[1]",updPath[1]);
//                         IERC20(updPath[0]).approve(UNISWAP_ROUTER_ADDRESS, amountin);
//                         output=IUniswapV2Router02(UNISWAP_ROUTER_ADDRESS).swapExactTokensForETH(output[1],amountOut,updPath,address(this),deadline);
//                         optionIndex++;
//                         console.log("output******T2E",output[1]);
//                     }

//                     else if (options[optionIndex] == 2) {
//                         require(msg.value > 0, 'Invalid Eth amount.');
//                         require(amountin == msg.value, 'Invalid input amounts.');
//                         output=IUniswapV2Router02(UNISWAP_ROUTER_ADDRESS).swapExactETHForTokens{ value: msg.value }(amountOut,updPath,address(this),deadline);
//                         optionIndex++;
//                         console.log("output******E2T",output[1]);
                        
//                     }

//                     else{
//                         revert('invalid option');
//                     }

//                     if(dexRoute1.length == 3 && dexRoute1[1]==1){
//                         console.log("Coming");
//                         pathindex++; 
//                         //amountIndex++;  
//                     } 
//                    pathindex++; 
//                    amountIndex++;
//                    //console.log(amoun[0]);
//                 }

//             if(dexRoute1[i] == 1)
//             { 
//                 //swapping ETH with other token (i.e: ETH to Bal) 
//                 console.log(address(singleswap.assetIn));
//                 if(address(singleswap.assetIn) == ETH){
//                     console.log("mvm",address(singleswap.assetIn));
//                     //singleswap.amount = output[1];
//                     //value:msg.value = output[1];
//                    console.log("output[1]",output[1]);
//                     balOutput= Ibal(balancerVault).swap{value:  output[1]}(singleswap, funds, limit, deadline);
//                     console.log("Actual Retured",balOutput);
//                     output[1] = balOutput;
//                 }

//                 if(address(singleswap.assetIn) == ETH && dexRoute[0]==1){
//                     console.log("mvm",address(singleswap.assetIn));
//                     //singleswap.amount = output[1];
//                     //value:msg.value = output[1];
//                    console.log("output[1]",output[1]);
//                     balOutput= Ibal(balancerVault).swap{value: msg.value}(singleswap, funds, limit, deadline);
//                     console.log("Actual Retured",balOutput);
//                     output[1] = balOutput;
//                 }
//                 //swapping token with token (i.e: USDC to LINK)
//                 if(dexRoute1[0]==1){
//                     console.log("Tok to tok 1",address(singleswap.assetIn));
                    
//                 uint Single_Swap_amount =  singleswap.amount;
//                 IERC20(address(singleswap.assetIn)).transferFrom(sender, address(this), Single_Swap_amount);
//                 IERC20(address(singleswap.assetIn)).approve(balancerVault,  Single_Swap_amount);
//                 balOutput=Ibal(balancerVault).swap(singleswap, funds, limit, deadline);
//                 console.log("BLa",balOutput);
                
//                 //output[0]=1;//to avoid out of bound solidity error
//                 //console.log("*******************",output[0]);
//                 //output[1] = balOutput;

//                 console.log("BLa",balOutput);
//                 }
//                 else if(address(singleswap.assetIn) != ETH){
//                 console.log(address(singleswap.assetIn));
                
//                 singleswap.amount = output[1];
//                 console.log("singleswap.amount",singleswap.amount);
//                 uint Single_Swap_amount =  singleswap.amount;
//                 IERC20(address(singleswap.assetIn)).approve(balancerVault,  Single_Swap_amount);
//                 balOutput=Ibal(balancerVault).swap(singleswap, funds, limit, deadline);
//                 console.log("BLa****************",balOutput);
                
//                 }
//             }  

//             if(dexRoute1[i] == 2)
//             {
//                 if(address(assets[0]) == ETH){
                    
//                     Ibal(balancerVault).batchSwap { value: msg.value }(kind, swaps, assets, funds, limits, deadline);
//                 }

//                 else if(dexRoute1[0]==2){
                    
//                 IERC20(address(assets[0])).transferFrom(sender, address(this),  swaps[0].amount);
//                 IERC20(address(assets[0])).approve(balancerVault,  swaps[0].amount);
//                 Ibal(balancerVault).batchSwap(kind, swaps, assets, funds, limits, deadline);
                
//                 }
//                 else{
//                 swaps[0].amount = output[0];
//                 IERC20(address(assets[0])).approve(balancerVault,  swaps[0].amount);
//                 Ibal(balancerVault).batchSwap(kind, swaps, assets, funds, limits, deadline);
//                 }
//             }
//         }
        
//         //to get AmountIn for Emitting Event 
//         if(dexRoute1[0] == 0){
//             uint lastDex = dexRoute1[dexRoute1.length-1];
//             eventEmit(amountInOut[0], tokenIn, tokenOut, sender,lastDex);
//         }

//         else if(dexRoute1[0] == 1){
//             uint lastDex = dexRoute1[dexRoute1.length-1];
//             eventEmit(singleswap.amount, tokenIn, tokenOut, sender,lastDex);
//         }

//         else{
//             uint lastDex = dexRoute1[dexRoute1.length-1];
//             eventEmit(swaps[0].amount, tokenIn, tokenOut, sender,lastDex);
//         }
        
//         //ressetting all used global variables to zero
//         optionIndex = 0;
//         pathindex = 0;
//         amountOut=0;
//         amountin = 0;
//         amountIndex = 0;
        
//     }

    
//     function eventEmit(uint amountIn, address TokenIn, address TokenOut, address msgSender, uint lastdex) internal{
//         //if(dexRoute1[dexLength])
//         //uint a = dexRoute.length;
//         if(lastdex == 0 && TokenOut==WETH)
//         {   
//             console.log("USers ETH**********TokenOut ETH",msgSender.balance);
//             console.log("Address(this).balance",address(this).balance);
//             uint amountReceived = msgSender.balance - ethBalBefore;
//             //uint recevied = (address(this).balance);
//             //msgSender.transfer(payable(recevied));
//             payable(msgSender).transfer(address(this).balance);
//             console.log("USers ETH**********TokenOut ETH",msgSender.balance);
//             //console.log("amountReceived",amountReceived);
//             emit BeeSwap(msgSender, TokenIn, TokenOut, amountIn, amountReceived, block.timestamp); 
//         }
//         else{
//             //console.log(address(TokenOut));

//         console.log("contract balance***************************after swap", IERC20(address(TokenOut)).balanceOf(address(this)));
        
//         uint amountRecevied = IERC20(TokenOut).balanceOf(address(this));
//         console.log("Amount Recevied",amountRecevied);
//         IERC20(TokenOut).transfer(msgSender,amountRecevied);
//         console.log("USers ETH********** after swap",msgSender.balance);
//         console.log("USER BALANCE***************************after swap", IERC20(address(TokenOut)).balanceOf(msgSender));
//         emit BeeSwap(msgSender, TokenIn, TokenOut, amountIn, amountRecevied, block.timestamp);    
//         }
            
//     }
//     //console.log()
//     //if all route coming of
//     function UniswapV2Router(
//         uint256 amountIn0,
//         uint256 amountOut1,
//         uint256 time,
//         address[] calldata path,
//         uint8 option
//     ) external payable {
//         require(path.length >= 2, "RouterInteraction:: Invalid Path length");
//         require(
//             path[0] != address(0) || path[path.length - 1] != address(0),
//             "RouterInteraction:: Invalid token address"
//         );

//         address msgsender = msg.sender;
//         uint[] memory amounts;

//         if (option == 0) {
//             IERC20(path[0]).transferFrom(msgsender, address(this), amountIn0);
//             IERC20(path[0]).approve(UNISWAP_ROUTER_ADDRESS, amountIn0);
//             amounts = IUniswapV2Router02(UNISWAP_ROUTER_ADDRESS).swapExactTokensForTokens(
//                 amountIn0,
//                 amountOut1,
//                 path,
//                 msgsender,
//                 time
//             );
//         } else if (option == 1) {
//             IERC20(path[0]).transferFrom(msgsender, address(this), amountIn0);
//             IERC20(path[0]).approve(UNISWAP_ROUTER_ADDRESS, amountIn0);
//             amounts = IUniswapV2Router02(UNISWAP_ROUTER_ADDRESS).swapExactTokensForETH(
//                 amountIn0,
//                 amountOut1,
//                 path,
//                 msgsender,
//                 time
//             );
//         } else if (option == 2) {
//             require(msg.value > 0, 'Invalid Eth amount.');
//             require(amountIn0 == msg.value, 'Invalid input amounts.');
//             amounts = IUniswapV2Router02(UNISWAP_ROUTER_ADDRESS).swapExactETHForTokens{ value: msg.value }(
//                 amountOut1,
//                 path,
//                 sender,
//                 time
//             );
//         } else {
//             revert('Invalid option.');
//         }


//         amountOut = amounts[amounts.length-1];
//         emit BeeSwap(sender, path[0], path[path.length - 1], amountIn0, amountOut1, block.timestamp);
//     } 
        
// }
    
