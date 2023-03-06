if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  }

  const ethereumButton = document.querySelector('.enableEthereumButton');
  const showAccount = document.querySelector('.showAccount');

  ethereumButton.addEventListener('click', () => {
    getAccount();
  });

  async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    showAccount.innerHTML = account;
  }

  const sendEthButton = document.querySelector('.sendEthButton');

  //Sending Ethereum to an address
  sendEthButton.addEventListener('click', () => {
    ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: showAccount.innerHTML,
            to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
            value: '0',
            data: '0x',
            gasPrice: '0x09184e72a000',
            gas: '0x2710',
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error(error));
  });  