import { ethers } from "hardhat";
const contractAddress = process.env.ERC1155!;
const account = process.env.PUBLIC_KEY!;

async function uri(contractAddress: string, account: string) {
  console.log('get uri from TestERC1155 contract')
  const Erc1155 = await ethers.getContractFactory("TestERC1155");
  const erc1155 = await Erc1155.attach(contractAddress);
  const uri = await erc1155.uri(0);
  console.log("uri is >.", uri);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
uri(contractAddress, account).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
