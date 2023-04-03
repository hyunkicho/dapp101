// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TestToken is ERC20PresetMinterPauser, Ownable {
    event TokenBuy(address indexed buyer, uint256 amount);
    event WithdrawETH(address indexed withdrawer ,uint256 amount);
    constructor() ERC20PresetMinterPauser("TestToken", "TT") {
    }
    function buyToken() payable public {
        require(msg.value > 0, "MyERC20: vaulue has to be bigger than zero");
        uint256 mintAmount= getExchangeRate(msg.value);
        _mint(msg.sender, mintAmount);
        emit TokenBuy(msg.sender, mintAmount);
    }

    function getExchangeRate(uint256 ethAmount) public view returns (uint256) {
        //원래 decimal이 18이기 때문에 뒤에 0을 3개 더해주면 된다.
        uint256 tokenAmount = ethAmount*1000;
        return tokenAmount;
    }

    function withdrawAll() public onlyOwner {
        address payable to = payable(msg.sender);
        uint256 withdrawBalance = address(this).balance;
        to.transfer(withdrawBalance);
        emit WithdrawETH(msg.sender, withdrawBalance);
    }}
