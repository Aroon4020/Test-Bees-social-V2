// SPDX-License-Identifier: MIT

pragma solidity ^0.6.6 || ^0.8.0;
import './interface/IbalancerV2.sol';
import './interface/IERC20.sol';
import './interface/IAsset.sol';
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";


//all assigment from one variable to other variable is done to avoid stack-too-deep error 

contract swap{
    //reason for using multiple variable is: that each variable should have one purpose to serve
    //reason for global variables is too avoid stack too deep error:    
    uint optionIndex = 0;
    address[]  updPath;
    uint pathindex = 0;
    uint amountOut=0;
    uint amountin = 0;
    uint amountIndex = 0;
    address sender;
    address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address private constant ETH = 0x0000000000000000000000000000000000000000;
    address private constant factory = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;
    address private constant UNISWAP_ROUTER_ADDRESS = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
    address private constant balancerVault = 0xBA12222222228d8Ba445958a75a0704d566BF2C8;
    event BeeSwap(
        address sender,
        address tokenIn,
        address tokenOut,
        uint256 tokenInAmount,
        uint256 tokenOutAmount,
        uint256 timeStamp
    );

    function dex(

        address [] memory tokenInOut,
        uint[] memory dexRoute,   
        uint[] memory uniswapAmountIn,  
        int[] memory options,           
        address[] memory path,
        Ibal.SingleSwap memory singleswap,
        uint limit,
        Ibal.BatchSwapStep [] memory swaps,
        IAsset[] memory assets,
        Ibal.SwapKind kind,
        int256[] memory limits,
        uint deadline
        
        )
        external payable{

            //filling up Balanacer's Funds Struct
            Ibal.FundManagement memory funds; 
            funds.sender=address(this);
            funds.fromInternalBalance = false;
            funds.recipient = payable(msg.sender);
            funds.toInternalBalance = false;
            
            sender = msg.sender;
            address tokenOut = tokenInOut[1];
            address tokenIn  = tokenInOut[0];
            uint256 UserBalanceBeforeSwap;

            //to calculate amount received after swap, we need token balance before swap
            if(tokenOut != WETH )
            { 
                UserBalanceBeforeSwap = IERC20(tokenOut).balanceOf(sender);
            }
            else{

                UserBalanceBeforeSwap =msg.sender.balance;
                
            }
            
            
            for(uint i=0; i<dexRoute.length; i++){
                //for Uniswap route
                if(dexRoute[i] == 0)
                {
                    
                    //getting amountin. amounout & path for swapping two tokens
                    amountin = uniswapAmountIn[amountIndex];
                    amountOut = uniswapAmountIn[amountIndex+1];
                    updPath = [path[pathindex], path[pathindex+1]];

                    if(options[optionIndex] == 0){

                        IERC20(updPath[0]).transferFrom(sender, address(this), amountin);
                        IERC20(updPath[0]).approve(UNISWAP_ROUTER_ADDRESS, amountin);
                        IUniswapV2Router02(UNISWAP_ROUTER_ADDRESS).swapExactTokensForTokens(amountin,amountOut,updPath,sender,deadline);
                        optionIndex++;
                    }

                    else if (options[optionIndex] == 1) { 
                         
                        IERC20(updPath[0]).transferFrom(sender, address(this), amountin);
                        IERC20(updPath[0]).approve(UNISWAP_ROUTER_ADDRESS, amountin);
                        IUniswapV2Router02(UNISWAP_ROUTER_ADDRESS).swapExactTokensForETH(amountin,amountOut,updPath,sender,deadline);
                        optionIndex++;
                    }

                    else if (options[optionIndex] == 2) {
                        require(msg.value > 0, 'Invalid Eth amount.');
                        require(amountin == msg.value, 'Invalid input amounts.');
                        IUniswapV2Router02(UNISWAP_ROUTER_ADDRESS).swapExactETHForTokens{ value: msg.value }(amountOut,updPath,sender,deadline);
                        optionIndex++;
                    }
                    else{
                        revert('invalid option');
                    } 
                   pathindex++; 
                   amountIndex++;
                }

            if(dexRoute[i] == 1)
            { 
                //swapping ETH with other token (i.e: ETH to Bal) 
                if(address(singleswap.assetIn) == ETH){
                    
                    Ibal(balancerVault).swap { value: msg.value }(singleswap, funds, limit, deadline);
                }
                //swapping token with token (i.e: USDC to LINK)
                else{
                    
                uint Single_Swap_amount =  singleswap.amount;
                IERC20(address(singleswap.assetIn)).transferFrom(sender, address(this), Single_Swap_amount);
                IERC20(address(singleswap.assetIn)).approve(balancerVault,  Single_Swap_amount);
                Ibal(balancerVault).swap(singleswap, funds, limit, deadline);
                
                }
            }  

            if(dexRoute[i] == 2)
            {
                if(address(assets[0]) == ETH){
                    Ibal(balancerVault).batchSwap { value: msg.value }(kind, swaps, assets, funds, limits, deadline);
                }

                else{
                    
                IERC20(address(assets[0])).transferFrom(sender, address(this),  swaps[0].amount);
                IERC20(address(assets[0])).approve(balancerVault,  swaps[0].amount);
                Ibal(balancerVault).batchSwap(kind, swaps, assets, funds, limits, deadline);
                
                }
            }
        }
        
        //to get AmountIn for Emitting Event 
        if(dexRoute[0] == 0){
            eventEmit(uniswapAmountIn[0], UserBalanceBeforeSwap, tokenIn, tokenOut, sender);
        }

        else if(dexRoute[0] == 1){
            eventEmit(singleswap.amount, UserBalanceBeforeSwap, tokenIn, tokenOut, sender);
        }

        else{
            eventEmit(swaps[0].amount, UserBalanceBeforeSwap, tokenIn, tokenOut, sender);
        }
        
        //ressetting all used global variables to zero
        optionIndex = 0;
        pathindex = 0;
        amountOut=0;
        amountin = 0;
        amountIndex = 0;
        
    }

    
    function eventEmit(uint amountIn, uint UserBalanceBeforeSwap, address TokenIn, address TokenOut, address msgSender) internal{
        
        uint amountRecevied;
        
        if(TokenOut != WETH ){
            
            amountRecevied = IERC20(TokenOut).balanceOf(msgSender)- UserBalanceBeforeSwap;
            emit BeeSwap(msgSender, TokenIn, TokenOut, amountIn, amountRecevied, block.timestamp);
        }

        else{
            amountRecevied = msg.sender.balance - UserBalanceBeforeSwap;
            emit BeeSwap(msgSender, TokenIn, TokenOut, amountIn, amountRecevied, block.timestamp);    
        }
            
    }
        
}
    
