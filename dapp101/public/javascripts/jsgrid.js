// const startBlock = 34510000; //배포된 시점의 블록으로 만약 endpoint가 무료일 경우 최신 블록만 조회되도록 제한되기도 한다.
const startBlock = 28546565; //배포된 시점의 블록으로 만약 endpoint가 무료일 경우 최신 블록만 조회되도록 제한되기도 한다.
async function pushERC20Transfer(erc20Token, myAddress, provider, abi) {
  clientsERC20 = []
  console.log("pushERC20Transfer")
  const resObj = {}
  const topic = [erc20Token.filters.TokenBuy().topics].toString();
  const filter = {
    address: ERC20,
    fromBlock: startBlock,
    topics: [topic]
  };
  
  const getlogs = await provider.getLogs(filter);
  let iface = new ethers.utils.Interface(abi);
  for (let logs of getlogs) {
    const receipt = await provider.getTransactionReceipt(logs.transactionHash);
    receipt.logs.forEach((log) => {
      const parsedLog = iface.parseLog(log)
      if( parsedLog.topic == topic) {
          resObj.amount = parsedLog.args.amount.toString();
          resObj.buyer = parsedLog.args.buyer;
          resObj.txhash = logs.transactionHash;
          clientsERC20.push({"amount": (resObj.amount/(10**18)).toString(), "buyer": resObj.buyer, "txhash" : resObj.txhash});
      } else {
        console.log(`this topic is not Transfer`)
      }
    });
  }
  return clientsERC20;
}

async function pushETHwithdraw(erc20Token, myAddress, provider, abi) {
    clientsETH = []
    console.log("pushETHwithdraw")
    const resObj = {}
    const topic = [erc20Token.filters.WithdrawETH().topics].toString();
    const filter = {
      address: ERC20,
      fromBlock: startBlock,
      topics: [topic]
    };
    const getlogs = await provider.getLogs(filter);
    let iface = new ethers.utils.Interface(abi);
    for (let logs of getlogs) {
      const receipt = await provider.getTransactionReceipt(logs.transactionHash);
      receipt.logs.forEach((log) => {
        const parsedLog = iface.parseLog(log)
        if( parsedLog.topic == topic) {
            resObj.withdrawer = parsedLog.args.withdrawer;
            resObj.amount = parsedLog.args.amount;
            resObj.txhash = logs.transactionHash;
            clientsETH.push({"amount": (resObj.amount/(10**18)).toString(), "withdrawer": resObj.withdrawer, "txhash" : resObj.txhash});
        } else {
          console.log(`this topic is not Transfer`)
        }
      });
    }
    return clientsETH;
}

async function pushNFTmint(erc721Token, myAddress, provider, abi) {
    clientsNFT = []
    console.log("pushNFTmint")
    const resObj = {}
    const topic = [erc721Token.filters.Transfer().topics].toString();
    // const topic = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("NFTBuy(address,uint256"));
    const filter = {
      address: ERC721,
      fromBlock: startBlock,
      topics: [topic]
    };
    const getlogs = await provider.getLogs(filter);
    for (let logs of getlogs) {
      const receipt = await provider.getTransactionReceipt(logs.transactionHash);
      receipt.logs.forEach((log) => {
        if( log.topics[0] == topic && log.address == ERC721) {
            resObj.from = "0x" + log.topics[1].slice(26);
            resObj.to = "0x" + log.topics[2].slice(26);
            resObj.tokenId = parseInt(log.topics[3], 16);
            resObj.txhash = logs.transactionHash;
            clientsNFT.push({"from": resObj.from, "to": resObj.to, "tokenId": resObj.tokenId,"txhash" : resObj.txhash});
        } else {
            console.log(`this topic is not Transfer`,topic)
        }
    });
    }
    return clientsNFT;
}

async function pushProposalId(governor, myAddress, provider, abi) {
    clientsGoveronor = []
    console.log("pushProposalId")
    const resObj = {}
    const topic = [governor.filters.ProposalCreated().topics].toString();
    const filter = {
      address: GOVERNOR,
      fromBlock: startBlock,
      topics: [topic]
    };
    const getlogs = await provider.getLogs(filter);
    let iface = new ethers.utils.Interface(abi);
    for (let logs of getlogs) {
      const receipt = await provider.getTransactionReceipt(logs.transactionHash);
      receipt.logs.forEach((log) => {
        const parsedLog = iface.parseLog(log)
        if( parsedLog.topic == topic) {
            resObj.proposalId = parsedLog.args.proposalId.toString();
            resObj.txhash = logs.transactionHash;
            clientsGoveronor.push({"proposalId": resObj.proposalId, "txhash" : resObj.txhash});
        } else {
          console.log(`this topic is not proposalId`)
        }
      });
    }
    return clientsGoveronor;
}

async function getProposalInfo(governor, myAddress, provider, abi) {
    proposalInfo = []
    console.log("getProposalInfo")
    const topic = [governor.filters.ProposalCreated().topics].toString();
    const filter = {
        address: GOVERNOR,
        fromBlock: startBlock,
        topics: [topic]
    };
    const getlogs = await provider.getLogs(filter);
    let iface = new ethers.utils.Interface(abi);
    for (let logs of getlogs) {
      const resObj = {}
      const receipt = await provider.getTransactionReceipt(logs.transactionHash);
      receipt.logs.forEach((log) => {
        const parsedLog = iface.parseLog(log)
        if( parsedLog.topic == topic) {
            resObj.proposalId = parsedLog.args.proposalId.toString();
            resObj.startBlock = parsedLog.args.startBlock.toString();
            resObj.endBlock = parsedLog.args.endBlock.toString();
            resObj.description = parsedLog.args.description;
            resObj.targets = parsedLog.args.targets;
            resObj.calldatas = parsedLog.args.calldatas;
            resObj.txhash = logs.transactionHash;
            proposalInfo.push(resObj);
        }
      });
    }
    return proposalInfo;
}
