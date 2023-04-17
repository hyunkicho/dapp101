import { ethers } from "hardhat";

async function main() {
  const owners = [
    process.env.PUBLIC_KEY,
    process.env.TEST_PUBLIC_KEY,
  ]
  console.log('deploying multisig contract')
  const Multisig = await ethers.getContractFactory("MultiSigWallet");
  const multisig = await Multisig.deploy(owners,2);
  await multisig.deployed();
  console.log(`multisig contract is deployed to ${multisig.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
