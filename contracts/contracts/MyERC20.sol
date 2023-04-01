// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";

contract TestToken is ERC20PresetMinterPauser {
    event tokenBuy(address indexed buyer, uint256 amount);
    constructor() ERC20PresetMinterPauser("TestToken", "TT") {
    }
    function buyToken() payable public {
        require(msg.value > 0, "MyERC20: vaulue has to be bigger than zero");
        uint256 mintAmount= getExchangeRate(msg.value);
        _mint(msg.sender, mintAmount);
        emit tokenBuy(msg.sender, mintAmount);
    }

    function getExchangeRate(uint256 ethAmount) public view returns (uint256) {
        //원래 decimal이 18이기 때문에 뒤에 0을 3개 더해주면 된다.
        uint256 tokenAmount = ethAmount*1000;
        return tokenAmount;
    }
}
