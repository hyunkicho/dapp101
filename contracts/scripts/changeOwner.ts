import { ethers } from "hardhat";
async function transferOwnership() {
  const ERC20 = "0x39e813A5c0C98066C9c8Ebe1E6a2B23Bf2bE4357";
  const MULSIG = "0x965B24aB245d8f23C261c90cf4B75E6cE0319324";
  console.log('transferOwnership from ERC20 contract')
  const Erc20 = await ethers.getContractFactory("TestToken");
  const erc20 = await Erc20.attach(ERC20);
  await erc20.transferOwnership(MULSIG);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
transferOwnership().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
