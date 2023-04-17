$(document).ready(async function () {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  let abi = JSON.parse(JSON.stringify(MYERC20.abi));
  const erc20Token = new ethers.Contract(ERC20, abi, signer);
  let abi_multisig = JSON.parse(JSON.stringify(MYMULTISIG.abi));
  const multisigWallet = new ethers.Contract(MULSIG, abi_multisig, signer);
  const accounts = await ethereum.request({
    method: "eth_requestAccounts",
  });

  //checksum address 로 비교해야 한다.
  const accountChecksum = ethers.utils.getAddress(accounts[0]);
  const owners = await multisigWallet.getOwners();
  console.log("owner is : ", owners);
  console.log("accountChecksum is : ", accountChecksum);
  console.log("accounts[0] is : ", accounts[0]);

  if (owners.find(owner => (owner == accountChecksum))) {
    console.log(" is owner");
  } else {
    console.log("not owner");
    $("#multisig").hide(); //hide all
  }
  const required = await multisigWallet.required();
  const transactionCount = await multisigWallet.transactionCount();

  $("#addressFromWallet").val(accountChecksum);
  $("#quorum").text(required);
  $("#tx_count").text(transactionCount);
  for(owner of owners) {
    $('#owner-list').append(`<span class="text-primary" id="${owner}"></span></br>`)
    $(`#${owner}`).text(owner);
  }

  $("#check-txid").click(async function (event) {
    const tx_count = await multisigWallet.transactionCount();
    console.log("tx_count >>", tx_count)
    //전체 목록 보여지게 진행
    const txids = await multisigWallet.getTransactionIds(0, tx_count, true, false);
    console.log(txids);
    $("#txids").text(txids);
    for (i of txids) {
      let txid_ = i.toString();
      console.log("txid >>", txid_);
      const isConfirmed = await multisigWallet.isConfirmed(txid_);
      console.log("isConfirmed >>", isConfirmed);
      const getConfirmations = await multisigWallet.getConfirmations(txid_);
      console.log("getConfirmations >>", getConfirmations);
      const getConfirmationCount = await multisigWallet.getConfirmationCount(txid_);
      console.log("getConfirmationCount >>", getConfirmationCount);
      $("#txid_list").append(`<br><text-primary id="proposalId_${txid_}" onlyRead> </label>`);
      $(`#proposalId_${txid_}`).text(`txid is : ${txid_}`);
      $("#txid_list").append(`<br><text-primary id="isConfirmed_${txid_}" onlyRead> </label>`);
      $(`#isConfirmed_${txid_}`).text(`confirmed : ${isConfirmed}`);
      $("#txid_list").append(`<br><text-primary id="getConfirmations_${txid_}" onlyRead> </label>`);
      $(`#getConfirmations_${txid_}`).text(`confrimation info : ${getConfirmations}`);
      $("#txid_list").append(`<br><text-primary id="getConfirmationCount_${txid_}" onlyRead> </label>`);
      $(`#getConfirmationCount_${txid_}`).text(`confirmation count : ${getConfirmationCount}`);
    }
  });

  $("#ownerAdd-tx").click(async function (event) {
    event.preventDefault();
    console.log("ownerAdd-tx")
    const ownerToAdd = $("#address-to-add").val()
    console.log("onwerToADD is >>", ownerToAdd);
    const ownerToAddChecksum = ethers.utils.getAddress(ownerToAdd);
    ownerToAddCallData = multisigWallet.interface.encodeFunctionData("addOwner",[ownerToAddChecksum]);
    const sumbmitCallData = multisigWallet.interface.encodeFunctionData("submitTransaction", [
      MULSIG,
      0,
      ownerToAddCallData
    ]);
    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: MULSIG,
            value: "0",
            data: sumbmitCallData,
          },
        ],
      })
      //TODO 트랜잭션이 완료되었다고 띄우면서 트랜잭션 해시 보여주기
      .then((txHash) => alert(txHash))
      .catch((error) => console.error(error));
  });

  $("#submit-tx-erc20").click(async function (event) {
    event.preventDefault();
    console.log("submit-tx")
    withdrawCallData = erc20Token.interface.encodeFunctionData("withdrawAll");
    const submitTransactionCallData = multisigWallet.interface.encodeFunctionData("submitTransaction", [
      ERC20,
      0,
      withdrawCallData
    ]);
    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: MULSIG,
            value: "0",
            data: submitTransactionCallData,
          },
        ],
      })
      //TODO 트랜잭션이 완료되었다고 띄우면서 트랜잭션 해시 보여주기
      .then((txHash) => alert(txHash))
      .catch((error) => console.error(error));
  });

  $("#confirm-tx").click(async function (event) {
    event.preventDefault();
    const transactionId = $("#txid-Input").val();
    const coinfirmTransactionCallData = multisigWallet.interface.encodeFunctionData("confirmTransaction", [
      transactionId
    ]);
    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: MULSIG,
            value: "0",
            data: coinfirmTransactionCallData,
          },
        ],
      })
      //TODO 트랜잭션이 완료되었다고 띄우면서 트랜잭션 해시 보여주기
      .then((txHash) => alert(txHash))
      .catch((error) => console.error(error));
  });

  // $("#execute-tx").click(async function (event) {
  //   event.preventDefault();
  //   const transactionId = $("#txid-Input").val();
  //   const executeTransactionCallData = multisigWallet.interface.encodeFunctionData("executeTransaction", [
  //     transactionId
  //   ]);
  //   ethereum
  //     .request({
  //       method: "eth_sendTransaction",
  //       params: [
  //         {
  //           from: accounts[0],
  //           to: MULSIG,
  //           value: "0",
  //           data: executeTransactionCallData,
  //         },
  //       ],
  //     })
  //     //TODO 트랜잭션이 완료되었다고 띄우면서 트랜잭션 해시 보여주기
  //     .then((txHash) => alert(txHash))
  //     .catch((error) => console.error(error));
  // });
});