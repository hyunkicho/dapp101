import { ethers } from "hardhat";
async function transferOwnership() {
  const ERC20 = process.env.ERC20!;
  const MULSIG = process.env.MULSIG!;
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
