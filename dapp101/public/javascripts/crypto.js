if (typeof window.ethereum !== "undefined") {
  console.log("MetaMask is installed!");
}

const ethereumButton = document.querySelector(".enableEthereumButton");
const showAccount = document.querySelector(".showAccount");
const ethValue = document.querySelector(".ethValue");
const contract = document.querySelector(".contract");
const data = document.querySelector(".data");


// ethereumButton.addEventListener("click", () => {
//   getAccount();
// });

// async function getAccount() {
//   const accounts = await ethereum.request({ method: "eth_requestAccounts" });
//   const account = accounts[0];
//   showAccount.innerHTML = account;
// }

// const sendTx = document.querySelector(".sendTx");

// //Sending Ethereum to an address
// sendTx.addEventListener("click", () => {
//   console.log("ethereumButton" , ethereumButton);
//   console.log("showAccount" , showAccount);
//   console.log("ethValue" , ethValue);
//   console.log("contract" , contract);
//   console.log("data" , data);
//   ethereum
//     .request({
//       method: "eth_sendTransaction",
//       params: [
//         {
//           from: showAccount.innerHTML,
//           to: contract.innerHTML,
//           value: ethValue = (ethValue.innerHTML > 0 ? ethValue:"0x") ,
//           data:  data = (data.innerHTML > 0 ? data:"0x") ,
//           gasPrice: "0x09184e72a000",
//           gas: "0x2710",
//         },
//       ],
//     })
//     .then((txHash) => console.log(txHash))
//     .catch((error) => console.error(error));
// });



