pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Votes.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";

contract TestNFT is ERC721, ERC721Burnable, Ownable, EIP712, ERC721Votes {
    using Counters for Counters.Counter;

    IERC20 private testTokenAddress;
    address private withdrawer;
    uint256 private tokenPrice;
    uint256 public tokenId;
    Counters.Counter private _tokenIdCounter;

    constructor(
        uint256 tokenAmount_,
        IERC20 testTokenAddress_
    ) 
    ERC721("MyNFT", "MNFT")
    EIP712("MyToken", "1")
    {
        setTokenAddress(testTokenAddress_);
        setNftPrice(tokenAmount_);
        //InitialTokenURI
        setbaseURI("https://raw.githubusercontent.com/dogeum-network/nft-baseuri/main/metadatas/");
        //tokenID 0 is for test
        mint(msg.sender);
    }
    string private _baseTokenURI;

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function mint(address to) public onlyOwner {
        tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _tokenIdCounter.increment();
    }

    function mintWithToken() public {
        testTokenAddress.transferFrom(msg.sender, address(this), tokenPrice);
        tokenId = _tokenIdCounter.current();
        _safeMint(msg.sender, tokenId);
        _tokenIdCounter.increment();
    }

    function setNftPrice(uint256 tokenAmount) public {
        tokenPrice = tokenAmount;
    }

    function setTokenAddress(IERC20 tokenAddress) public {
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

    function withdrawERC20() public onlyOwner {
        uint256 remainBalance = testTokenAddress.balanceOf(address(this));
        testTokenAddress.transfer(msg.sender, remainBalance);
    }


    // The following functions are overrides required by Solidity.

    function _afterTokenTransfer(address from, address to, uint256 tokenId_, uint256 batchSize)
        internal
        override(ERC721, ERC721Votes)
    {
        super._afterTokenTransfer(from, to, tokenId_, batchSize);
    }

   function setbaseURI(string memory baseURI) public returns (string memory) {
        _baseTokenURI = baseURI;
        return _baseTokenURI;
    }
}

