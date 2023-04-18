$(document).ready(async function () {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    let abi = JSON.parse(JSON.stringify(MYERC20.abi));
    const erc20Token = new ethers.Contract(ERC20, abi, signer);
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    //checksum address 로 비교해야 한다.
    const accountChecksum = ethers.utils.getAddress(accounts[0]);
    const owner = await erc20Token.owner();
    console.log("owner is : ", owner);
    if (owner == accountChecksum) {
      console.log(" is owner");
    } else {
      console.log("not owner");
      $("#withdraw").addClass("collapse");
      $("#eventbtn_withdraw").addClass("collapse");
    }

    $("#eventbtn").click(async function (event) {
      event.preventDefault();
      let data = await pushERC20Transfer(
        erc20Token,
        accounts[0],
        provider,
        abi
      );
      console.log("data is >>", data);

      $("#jsGrid").jsGrid({
        width: "100%",
        height: "auto",
        sorting: true,
        paging: true,
        data: data,
        fields: [
          { name: "amount", type: "text", width: 50 },
          { name: "buyer", type: "text", width: 250 },
          { name: "txhash", type: "text", width: 300 },
        ],
      });
    });

    $("#eventbtn_withdraw").click(async function (event) {
      event.preventDefault();
      let data = await pushETHwithdraw(erc20Token, accounts, provider, abi);
      console.log("data is >>", data);

      $("#jsGrid").jsGrid({
        width: "100%",
        height: "auto",
        sorting: true,
        paging: true,
        data: data,
        fields: [
          { name: "amount", type: "text", width: 50 },
          { name: "withdrawer", type: "text", width: 250 },
          { name: "txhash", type: "text", width: 300 },
        ],
      });
    });

    $("#withdraw").click(async function (event) {
      event.preventDefault();
      withdrawCalldata =
        erc20Token.interface.encodeFunctionData("withdrawAll");
      console.log("withdrawCalldata >>", withdrawCalldata);
      let data = ethereum
        .request({
          method: "eth_sendTransaction",
          params: [
            {
              from: accounts[0],
              to: ERC20,
              value: "0",
              data: withdrawCalldata,
            },
          ],
        })
        //TODO 트랜잭션이 완료되었다고 띄우면서 트랜잭션 해시 보여주기
        .then((txHash) => alert(txHash))
        .catch((error) => console.error(error));
    });
    $("#addressFromWallet").val(accounts[0]);

    $("#checkowner").click(async function (event) {
      event.preventDefault();
      let EthAmount = $("#inputEthAmount").val();
      let TokenAmount = $("#inputTokenAmount").val();
      let abi = JSON.parse(JSON.stringify(MYERC20.abi));
      const ether_amount = noExponents((EthAmount * 10 ** 18).toString());
      const exchangeAmount = await erc20Token.getExchangeRate(ether_amount);
      $("#inputTokenAmount").val(
        exchangeAmount.div(noExponents((10 ** 18).toString())).toString()
      );
    });

    $("#sendTXbtn").click(async function (event) {
      event.preventDefault();
      let EthAmount = $("#inputEthAmount").val();
      let TokenAmount = $("#inputTokenAmount").val();
      const ether_amount = noExponents((EthAmount * 10 ** 18).toString());
      const hex_value = parseInt(EthAmount * 10 ** 18).toString(16);
      const exchangeAmount = await erc20Token.getExchangeRate(ether_amount);
      $("#inputTokenAmount").val(
        exchangeAmount.div(noExponents((10 ** 18).toString())).toString()
      );
      const estimation = await erc20Token.estimateGas.buyToken({
        value: ether_amount,
      });
      transferCalldata =
        erc20Token.interface.encodeFunctionData("buyToken");
      console.log("transferCalldata >>", transferCalldata);
      let data = ethereum
        .request({
          method: "eth_sendTransaction",
          params: [
            {
              from: accounts[0],
              to: ERC20,
              value: hex_value,
              data: transferCalldata,
            },
          ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error(error));
    });
});