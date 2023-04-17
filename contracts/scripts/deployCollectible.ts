import { ethers } from "hardhat";
const GOVERNOR = process.env.GOVERNOR!;

async function main() {
  console.log('deploying ERC1155 contract')
  const ERC1155 = await ethers.getContractFactory("TestERC1155");
  const erc1155 = await ERC1155.deploy(GOVERNOR);
  await erc1155.deployed();

  console.log(`erc1155 contract is deployed to ${erc1155.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
