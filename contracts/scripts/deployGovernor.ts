import { ethers } from "hardhat";
const ERC20 = "0x39e813A5c0C98066C9c8Ebe1E6a2B23Bf2bE4357";
const ERC721 = "0x6AbD56B9Dff6E1ac6c2eF1347974b1f2592a600F";
const GOVERNOR = "0x8798d99DC878df94A41CB547008579787AC7541e";
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
