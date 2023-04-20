import { ethers } from "hardhat";
const contractAddress = process.env.ERC1155!;
const account = process.env.PUBLIC_KEY!;

async function governorAddress(contractAddress: string, account: string) {
  console.log('governorAddress from TestERC1155 contract')
  const Erc1155 = await ethers.getContractFactory("TestERC1155");
  const erc1155 = await Erc1155.attach(contractAddress);
  const governorAddress = await erc1155.getGovernor();
  console.log(governorAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
getBalance(contractAddress, account).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
