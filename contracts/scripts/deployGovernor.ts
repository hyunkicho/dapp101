import { ethers } from "hardhat";
const ERC721 = process.env.ERC721!;
//bsc testnet
async function main() {
  console.log('deploying Governor contract')
  const Governor = await ethers.getContractFactory("TestGovernor");
  const governor = await Governor.deploy(ERC721);
  await governor.deployed();

  console.log(`governor contract is deployed to ${governor.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
