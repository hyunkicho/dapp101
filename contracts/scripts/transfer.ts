import { ethers } from "hardhat";
const contractAddress = process.env.ERC20!;
async function transfer​​(to: string, amount: number) {
  console.log('transfer from ERC20 contract')
  const Erc20 = await ethers.getContractFactory("TestToken");
  const erc20 = await Erc20.attach(contractAddress);
  const mint = await erc20.transfer(to, ethers.utils.parseUnits(amount.toString(),18));
  console.log('mint :', mint);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
const amount = 10
transfer​​(process.env.PUBLIC_KEY!, amount).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
