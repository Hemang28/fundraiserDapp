// const hre = require("hardhat");

// async function main() {
//   const toyToken = await hre.ethers.getContractFactory("ToyToken");
//   const ToyToken = await ToyToken.deploy("1000000000000000000000000000");

//   await ToyToken.deployed();

//   console.log("Token deployed to:", ToyToken.address);
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.


const hre = require('hardhat');

async function main() {

    const CreatorFactory = await hre.ethers.getContractFactory("CreatorFactory")
    const creatorFactory = await CreatorFactory.deploy();

    await creatorFactory.deployed();

    console.log("Factory deployed to:", creatorFactory.address);
}   

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });