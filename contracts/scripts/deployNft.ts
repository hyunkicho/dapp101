import { ethers } from "hardhat";

async function main() {
  console.log('deploying TestToken contract')
  const ERC721 = await ethers.getContractFactory("TestNFT");
  const tokenPrice = 10**18;
  const ERC20 = "0x39e813A5c0C98066C9c8Ebe1E6a2B23Bf2bE4357";
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
