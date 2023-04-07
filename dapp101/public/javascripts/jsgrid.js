async function pushERC20Transfer(erc20Token, myAddress, provider, abi) {
    clientsERC20 = []
    console.log("pushERC20Transfer")
    const resObj = {}
    const topic = [erc20Token.filters.TokenBuy().topics].toString();
    const filter = {
      address: ERC20,
      fromBlock: 28546565,
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
      fromBlock: 28546565,
      topics: [topic]
    };
    const getlogs = await provider.getLogs(filter);
    let iface = new ethers.utils.Interface(abi);
    for (let logs of getlogs) {
      const receipt = await provider.getTransactionReceipt(logs.transactionHash);
      receipt.logs.forEach((log) => {
        const parsedLog = iface.parseLog(log)
        if( parsedLog.topic == topic) {
            resObj.amount = parsedLog.args.from.toString();
            resObj.buyer = parsedLog.args.to;
            resObj.txhash = logs.transactionHash;
            clientsETH.push({"amount": (resObj.amount/(10**18)).toString(), "buyer": resObj.buyer, "txhash" : resObj.txhash});
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
      fromBlock: 28727518,
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