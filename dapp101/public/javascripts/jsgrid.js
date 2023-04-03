// let clientsERC20 = [];

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
            clientsERC20.push({"amount": (resObj.amount/(10**18)).toString(), "buyer": resObj.buyer.toString(), "txhash" : resObj.txhash});
        } else {
          console.log(`this topic is not Transfer`)
        }
      });
    }
    return clientsERC20;
}

async function pushETHwithdraw(erc20Token, myAddress, provider, abi) {
    clientsERC20 = []
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
            resObj.amount = parsedLog.args.amount.toString();
            resObj.buyer = parsedLog.args.buyer;
            resObj.txhash = logs.transactionHash;
            clientsERC20.push({"amount": (resObj.amount/(10**18)).toString(), "buyer": resObj.buyer.toString(), "txhash" : resObj.txhash});
        } else {
          console.log(`this topic is not Transfer`)
        }
      });
    }
    return clientsERC20;
}