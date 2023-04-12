$(document).ready(async function () {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  let abi_governor = JSON.parse(JSON.stringify(MYGOVERNOR.abi));
  const governor = new ethers.Contract(GOVERNOR, abi_governor, signer);
  let abi_erc721 = JSON.parse(JSON.stringify(MYERC721.abi));
  const erc721Token = new ethers.Contract(ERC721, abi_erc721, signer);
  const accounts = await ethereum.request({
    method: "eth_requestAccounts",
  });
  $("#cast-btn").hide();
  $("#cast-btn-agn").hide();
  $("#proposal-Input").hide();
  $("#execute").hide();

  const currentBlockNumber = await provider.getBlockNumber();
  $("#currentBlockNumber").text(currentBlockNumber);
  const blockNum = await provider.getBlockNumber();

  const quorum = await governor.quorum(blockNum.toString());
  $("#quorum").text(quorum.toString());

  const votingDelay = await governor.votingDelay();
  $("#votingDelay").text(votingDelay);

  const votingPeriod = await governor.votingPeriod();
  $("#votingPeriod").text(votingPeriod);

  $("#delegate-address").val(accounts[0]);

  //checksum address 로 비교해야 한다.
  const accountChecksum = ethers.utils.getAddress(accounts[0]);
  const owner = await governor.owner();
  console.log("owner is : ", owner);
  if (owner == accountChecksum) {
    console.log(" is owner");
  } else {
    console.log("not owner");
    $("#withdraw").addClass("collapse");
    $("#eventbtn_withdraw").addClass("collapse");
  }

  $("#check-vote").click(async function (event) {
    const weight = await erc721Token.getVotes(accounts[0]);
    console.log(weight);
    $("#weigth").text(weight);
  });

  $("#proposalbtn").click(async function (event) {
    event.preventDefault();
    // changeTokenURICalldata = erc721Token.interface.encodeFunctionData("transfer", ["newuri"]);
    const proposalExplain = $("#proposal-input").val();
    governorCalldata = governor.interface.encodeFunctionData("propose", [
      [GOVERNOR],
      [0],
      ["0x"],
      proposalExplain,
    ]);
    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: GOVERNOR,
            value: "0",
            data: governorCalldata,
          },
        ],
      })
      //TODO 트랜잭션이 완료되었다고 띄우면서 트랜잭션 해시 보여주기
      .then((txHash) => alert(txHash))
      .catch((error) => console.error(error));
  });

  $("#delegate").click(async function (event) {
    event.preventDefault();
    const delegate_address = $("#delegate-address").val();
    console.log("delegate-address >>", delegate_address);
    // changeTokenURICalldata = erc721Token.interface.encodeFunctionData("transfer", ["newuri"]);
    delegatingCall = erc721Token.interface.encodeFunctionData("delegate", [
      delegate_address,
    ]);
    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: ERC721,
            value: "0",
            data: delegatingCall,
          },
        ],
      })
      //TODO 트랜잭션이 완료되었다고 띄우면서 트랜잭션 해시 보여주기
      .then((txHash) => alert(txHash))
      .catch((error) => console.error(error));
  });

  $("#cast-btn").click(async function (event) {
    event.preventDefault();
    const proposalInput = $("#proposal-Input").val();
    const proposalInputParsed = ethers.utils.parseUnits(proposalInput, 0);
    const castVoteCalldata = governor.interface.encodeFunctionData("castVote", [
      proposalInputParsed,
      [1], // 1 if FOR
    ]);
    let data = ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: GOVERNOR,
            value: "0",
            data: castVoteCalldata,
          },
        ],
      })
      //TODO 트랜잭션이 완료되었다고 띄우면서 트랜잭션 해시 보여주기
      .then((txHash) => alert(txHash))
      .catch((error) => console.error(error));
  });

  $("#cast-btn-agn").click(async function (event) {
    event.preventDefault();
    const proposalInput = $("#proposal-Input").val();
    const proposalInputParsed = ethers.utils.parseUnits(proposalInput, 0);
    const castVoteCalldata = governor.interface.encodeFunctionData("castVote", [
      proposalInputParsed,
      [0], // 0 if AGAINST
    ]);
    let data = ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: GOVERNOR,
            value: "0",
            data: castVoteCalldata,
          },
        ],
      })
      //TODO 트랜잭션이 완료되었다고 띄우면서 트랜잭션 해시 보여주기
      .then((txHash) => alert(txHash))
      .catch((error) => console.error(error));
  });

  $("#addressFromWallet").val(accounts[0]);
  $("#eventbtn_proposalId").click(async function (event) {
    event.preventDefault();
    $("#cast_list").empty();
    let data = await getProposalInfo(
      governor,
      accounts[0],
      provider,
      abi_governor
    );
    console.log("data is >>", data);
    const newBlockNumber = await provider.getBlockNumber();

    let flag = 0;
    data.filter((d) => {
      if (d.endBlock > newBlockNumber) {
        $("#cast_list").append(
          `<br><text-primary id="proposalId_${flag}" onlyRead> </label></br>`
        );
        $(`#proposalId_${flag}`).text(`프로포절 ID ${d.proposalId}`);
        $("#cast_list").append(
          `<br><text-primary id="description_${flag}">  </label></br>`
        );
        $(`#description_${flag}`).text(`안건 내용 : ${d.description}`);
        $("#cast_list").append(
          `<br><text-primary id="startBlock_${flag}">  </label></br>`
        );
        $(`#startBlock_${flag}`).text(`투표 시작 블록: ${d.startBlock}`);
        $("#cast_list").append(
          `<br><text-primary id="endBlock_${flag}">  </label></br>`
        );
        $(`#endBlock_${flag}`).text(`투표 종료 블록 : ${d.endBlock}`);
        flag++;
      }
      $("#cast-btn").show();
      $("#cast-btn-agn").show();
      $("#proposal-Input").show();
    });
  });

  $("#eventbtn_proposalId_all").click(async function (event) {
    event.preventDefault();
    $("#cast_list").empty();
    let data = await getProposalInfo(
      governor,
      accounts[0],
      provider,
      abi_governor
    );
    let flag = 0;
    for (d of data) {
      $("#cast_list").append(
        `<br><text-primary id="proposalId_${flag}" onlyRead> </label></br>`
      );
      $(`#proposalId_${flag}`).text(`프로포절 ID ${d.proposalId}`);
      $("#cast_list").append(
        `<br><text-primary id="description_${flag}">  </label></br>`
      );
      $(`#description_${flag}`).text(`안건 내용 : ${d.description}`);
      $("#cast_list").append(
        `<br><text-primary id="startBlock_${flag}">  </label></br>`
      );
      $(`#startBlock_${flag}`).text(`투표 시작 블록: ${d.startBlock}`);
      $("#cast_list").append(
        `<br><text-primary id="endBlock_${flag}">  </label></br>`
      );
      $(`#endBlock_${flag}`).text(`투표 종료 블록 : ${d.endBlock}`);
      flag++;
    }
  });

  $("#proposal-status").hide();

  $("#proposal-search").click(async function (event) {
    event.preventDefault();
    const proposalId = $("#proposal-id").val();
    const statNum = await governor.state(proposalId);
    if (statNum == 4) {
      $("#execute").show();
    } else {
      $("#execute").hide();
    }

    let ProposalState = [
      "투표 중", //Pending
      "활성화", //Active
      "취소 됨", //Canceled
      "반대로 결정", //Defeated
      "실행 되도록 결정", //Succeeded
      "실행 예정", //Queued
      "만료 됨", //Expired
      "실행 됨", //Executed
    ];

    $("#proposal-status").val(ProposalState[statNum]);
    $("#proposal-status").show();

    let data = await getProposalInfo(
      governor,
      accounts[0],
      provider,
      abi_governor
    );
    let find_data = data.find((d) => d.proposalId == proposalId);
    console.log("find_data is >>", find_data);
    $("#cast_list").empty();
    $("#cast_list").append(
      `<br><text-primary id="proposalId" onlyRead> </label></br>`
    );
    $(`#proposalId`).text(`프로포절 ID ${find_data.proposalId}`);
    $("#cast_list").append(`<br><text-primary id="startBlock">  </label></br>`);
    $(`#startBlock`).text(`투표 시작 블록: ${find_data.startBlock}`);
    $("#cast_list").append(`<br><text-primary id="endBlock">  </label></br>`);
    $(`#endBlock`).text(`투표 종료 블록 : ${find_data.endBlock}`);
    $("#cast_list").append(
      `<br><text-primary id="description">  </label></br>`
    );
    $(`#description`).text(`${find_data.description}`);
    $("#cast_list").append(`<br><text-primary id="targets">  </label></br>`);
    $(`#targets`).text(`${find_data.targets}`);
    $("#cast_list").append(`<br><text-primary id="calldatas">  </label></br>`);
    $(`#calldatas`).text(`${find_data.calldatas}`);
  });

  $("#execute").click(async function (event) {
    event.preventDefault();
    const description_raw = $("#description").text();
    const targets = $("#targets").text();
    const calldatas = $("#calldatas").text();
    const descriptionHash = ethers.utils.id(description_raw);

    console.log("description_raw : ", description_raw);
    console.log("targets : ", targets);
    console.log("calldatas : ", calldatas);
    console.log("descriptionHash : ", descriptionHash);

    const executeCalldata = governor.interface.encodeFunctionData("execute", [
      [targets], //targets
      [0], //values
      [calldatas], //calldatas
      descriptionHash, // description
    ]);
    let data = ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: GOVERNOR,
            value: "0",
            data: executeCalldata,
          },
        ],
      })
      //TODO 트랜잭션이 완료되었다고 띄우면서 트랜잭션 해시 보여주기
      .then((txHash) => alert(txHash))
      .catch((error) => console.error(error));
  });
});
