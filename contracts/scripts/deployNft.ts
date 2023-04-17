import { ethers } from "hardhat";

async function main() {
  console.log('deploying TestNFT contract')
  const ERC721 = await ethers.getContractFactory("TestNFT");
  const tokenPrice = 10**18;
  const ERC20 = process.env.ERC20!;
  const erc721 = await ERC721.deploy(tokenPrice.toString(), ERC20);
  await erc721.deployed();

  console.log(`erc721 contract is deployed to ${erc721.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
