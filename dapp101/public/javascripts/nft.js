function getTokenMetaData(tokenId) {
    try{
      if((tokenId < 1) || (tokenId > 100)) {
        alert("token ID should be 1~100!"); 
      }else {
        $.ajax({
          type: "get",
          url: "nft/nft_metadata",
          data: {
            tokenId: tokenId,
          },
          dataType: "json",
        }).done(function (json) {
          console.log("json success", json);
          $("#nft-image").attr("src", json.image);
          $("#token_name").text(json.name);
          $("#attributes_accordion").empty();
          for (let i = 0; i < json.attributes.length; i++) {
            $("#attributes_accordion").append(
              `<p id="attributes"> ${json.attributes[i].trait_type}  :  ${json.attributes[i].value} </p>`
            );
          }
        });
      }
    } catch (err){
      console.log("error", err);
    }
  }
  let tokenId = $("#token-id").val() || 1;
  let owner;
  $(document).ready(async function () {    
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      let abi = JSON.parse(JSON.stringify(MYERC721.abi));
      const erc721Token = new ethers.Contract(ERC721, abi, signer);
      const tokenId = await erc721Token.tokenId();
      let currentTokenId = tokenId.toString();
      getTokenMetaData(currentTokenId);
      try {
        owner = await erc721Token.ownerOf(tokenId);
        console.log("owner is :", owner);
        $("#nft-owner").text(owner);
      } catch (error) {
        $("#nft-owner").text("not minted");
      } 
      $("#next-mint").text(currentTokenId);
      console.log($("#next-mint").val());

      $("#token-id").val(currentTokenId);
      console.log($("#token-id").val());
      const nftPrice = await erc721Token.getNftPrice();
      const displayNftPrice = nftPrice.toString()/(10**18);
      $("#current-price").text(displayNftPrice);
      //checksum address 로 비교해야 한다.
      const accountChecksum = ethers.utils.getAddress(accounts[0]);

      $("#approve-token").click(async function (event) {
      event.preventDefault();
      const hex_value = parseInt(nftPrice).toString(16);
      let erc20abi = JSON.parse(JSON.stringify(MYERC20.abi));
      const erc20Token = new ethers.Contract(ERC20, erc20abi, signer);
      //최대값으로 approve 받기
      const infinite = ethers.utils.parseUnits(
      "115792089237316195423570985008687907853269984665640564039457584007913129639935",
      0);

      approveCalldata = erc20Token.interface.encodeFunctionData("approve",[ERC721,infinite])
      let data = ethereum
        .request({
          method: "eth_sendTransaction",
          params: [
            {
              from: accounts[0],
              to: ERC20,
              value: '0',
              data: approveCalldata,
            },
          ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error(error));
    });
    $("#buy-nft").click(async function (event) {
      const estimation = await erc721Token.estimateGas.mintWithToken();
      console.log("estimation : ", estimation);
      alert(`you are buying nft ID ${(tokenId*1)+1} check it before you mint`)
      mintCalldata = erc721Token.interface.encodeFunctionData("mintWithToken");
      let data = ethereum
        .request({
          method: "eth_sendTransaction",
          params: [
            {
              from: accounts[0],
              to: ERC721,
              value: '0',
              data: mintCalldata,
            },
          ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error(error));

        try {
        owner = await erc721Token.ownerOf(tokenId);
          $("#nft-owner").text(owner);
        } catch (error) {
          $("#nft-owner").text("not minted");
        }         
      });

      // contract owner 인지 체크 후 관리자 함수 표시
      const contractOwner = await erc721Token.ownerOf(tokenId);
      if (contractOwner == accountChecksum) {
        console.log(" is owner");
      } else {
        console.log("not owner");
        $("#set-price").addClass("collapse");
        $("#nft-price").addClass("collapse");
        $("#withdraw-erc20").addClass("collapse");
      }

    $("#search").click(async function (event) {
      event.preventDefault();
      tokenId_search = $("#token-id").val();
      try{
        owner = await erc721Token.ownerOf(tokenId_search);
        $("#nft-owner").text(owner);
      } catch(err) {
        console.log("err is :", err);
        $("#nft-owner").text("not minted");
      }
      getTokenMetaData(tokenId_search);
    });


    $("#eventbtn_minted").click(async function (event) {
      event.preventDefault();
      let data = await pushNFTmint(erc721Token, accounts, provider, abi);

      $("#jsGrid").jsGrid({
        width: "100%",
        height: "auto",
        sorting: true,
        paging: true,
        data: data,
        fields: [
          { name: "from", type: "text", width: 250 },
          { name: "to", type: "text", width: 250 },
          { name: "tokenId", type: "text", width: 50 },
          { name: "txhash", type: "text", width: 300 },
        ],
      });
    });

    $("#set-price").click(async function (event) {
      event.preventDefault();
      let price = $("#nft-price").val()
      console.log("price is >", price);
      console.log("price is >", price*10**18);
      setNftPriceCalldata = erc721Token.interface.encodeFunctionData("setNftPrice",[(price*10**18).toString()]);
      await ethereum
        .request({
          method: "eth_sendTransaction",
          params: [
            {
              from: accounts[0],
              to: ERC721,
              value: '0',
              data: setNftPriceCalldata,
            },
          ],
        })
        .catch((error) => console.error(error));
    })

    $("#withdraw-erc20").click(async function (event) {
      event.preventDefault();
      withdrawCalldata = erc721Token.interface.encodeFunctionData("withdrawERC20");
      await ethereum
        .request({
          method: "eth_sendTransaction",
          params: [
            {
              from: accounts[0],
              to: ERC721,
              value: '0',
              data: withdrawCalldata,
            },
          ],
        })
        .catch((error) => console.error(error));
    })
  });
