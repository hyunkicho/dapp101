// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
import "./ERC721PresetMinterPauserAutoId.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TestNFT is ERC721PresetMinterPauserAutoId, Ownable {
    using Counters for Counters.Counter;

    IERC20 private testTokenAddress;
    address private withdrawer;
    uint256 private tokenPrice;

    constructor(uint256 tokenPrice_, IERC20 testTokenAddress_) ERC721PresetMinterPauserAutoId("TestNFT", "TNFT", "https://raw.githubusercontent.com/dogeum-network/nft-baseuri/main/metadatas/") {
        setTokenAddress(testTokenAddress_);
        setNftPrice(tokenPrice_);
    }

    function setNftPrice(uint256 tokenAmount) public {
        tokenPrice = tokenAmount;
    }

    function setTokenAddress(IERC20 tokenAddress) public {
        testTokenAddress = tokenAddress;
    }

    function setWithdrawerAddress(IERC20 tokenAddress) public {
        testTokenAddress = tokenAddress;
    }

    function getNftPrice() public view returns (uint256) {
        return tokenPrice;
    }

    function getTokenAddress() public view returns (IERC20) {
        return testTokenAddress;
    }

    function getWithdrawerAddress() public view returns (address) {
        return withdrawer;
    }

    function mintWithToken() public {
        testTokenAddress.transferFrom(msg.sender, withdrawer, tokenPrice);
        _mint(msg.sender, _tokenIdTracker.current());
        _tokenIdTracker.increment();    
    }
}
