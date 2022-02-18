 // SPDX-License-Identifier: MIT

 pragma solidity ^0.8.0 || ^0.6.6;
// pragma experimental ABIEncoderV2;
// import "./IAsset.sol";
// interface Ibal{
//    enum SwapKind { GIVEN_IN, GIVEN_OUT }

//    struct SingleSwap{
//         bytes32 poolId;
//         SwapKind kind;
//         IAsset assetIn;
//         IAsset assetOut;
//         uint256 amount;
//         bytes userData;
//     }

//     struct FundManagement{
//         address sender;
//         bool fromInternalBalance;
//         address payable recipient;
//         bool toInternalBalance;
//     }

    
//     function swap(
//         SingleSwap memory singleSwap,
//         FundManagement memory funds,
//         uint256 limit,
//         uint256 deadline
//     )
//         external
//         payable
//         returns (uint256 amountCalculated);

//     struct BatchSwapStep{
//         bytes32 poolId;
//         uint256 assetInIndex;
//         uint256 assetOutIndex;
//         uint256 amount;
//         bytes userData;
//     }
//     struct Extra{
//         //address TokenIn;
//         //address TokenOut;
//         uint256 AmountIn;
//         //uint deadline;
//         //Ibal.SwapKind kind; 
//     }
//     function setRelayerApproval(
//         address send,
//         address cont,
//         bool approved
//     )
//     external returns(bool approv);    

//     function batchSwap(
//         SwapKind kind,
//         BatchSwapStep[] calldata swaps,
//         IAsset[] calldata assets,
//         FundManagement calldata funds,
//         uint256[] calldata limits,
//         uint256 deadline
//     )
//         external
//         payable
//         returns (int256[] memory assetDeltas);
    

// }

//pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;
import "./IAsset.sol";
interface Ibal{
   enum SwapKind { GIVEN_IN, GIVEN_OUT }

   struct SingleSwap{
        bytes32 poolId;
        SwapKind kind;
        IAsset assetIn;
        IAsset assetOut;
        uint256 amount;
        bytes userData;
    }

    struct FundManagement{
        address sender;
        bool fromInternalBalance;
        address payable recipient;
        bool toInternalBalance;
    }

    
    function swap(
        SingleSwap memory singleSwap,
        FundManagement memory funds,
        uint256 limit,
        uint256 deadline
    )
        external
        payable
        returns (uint256 amountCalculated);

    struct BatchSwapStep{
        bytes32 poolId;
        uint256 assetInIndex;
        uint256 assetOutIndex;
        uint256 amount;
        bytes userData;
    }    

    function batchSwap(
        SwapKind kind,
        BatchSwapStep[] memory swaps,
        IAsset[] memory assets,
        FundManagement memory funds,
        int256[] memory limits,
        uint256 deadline
    )
        external
        payable
        returns (int256[] memory assetDeltas);
    

}