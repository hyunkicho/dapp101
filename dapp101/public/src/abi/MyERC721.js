let MYERC721 = {
    "_format": "hh-sol-artifact-1",
    "contractName": "TestNFT",
    "sourceName": "contracts/TestNFT.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenAmount_",
            "type": "uint256"
          },
          {
            "internalType": "contract IERC20",
            "name": "testTokenAddress_",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "buyer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "NFTBuy",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "Paused",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "previousAdminRole",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "newAdminRole",
            "type": "bytes32"
          }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "RoleGranted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "RoleRevoked",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "Unpaused",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "MINTER_ROLE",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "PAUSER_ROLE",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "_tokenIdTracker",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getNftPrice",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          }
        ],
        "name": "getRoleAdmin",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "getRoleMember",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          }
        ],
        "name": "getRoleMemberCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getTokenAddress",
        "outputs": [
          {
            "internalType": "contract IERC20",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getWithdrawerAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "hasRole",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "mintWithToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "paused",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenAmount",
            "type": "uint256"
          }
        ],
        "name": "setNftPrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract IERC20",
            "name": "tokenAddress",
            "type": "address"
          }
        ],
        "name": "setTokenAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "withdrawERC20",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": "0x60806040523480156200001157600080fd5b5060405162002f1e38038062002f1e8339810160408190526200003491620003ed565b6040518060400160405280600781526020016615195cdd13919560ca1b815250604051806040016040528060048152602001631513919560e21b8152506040518060800160405280604c815260200162002ed2604c9139825183908390620000a490600290602085019062000347565b508051620000ba90600390602084019062000347565b5050600c805460ff19169055508051620000dc90600e90602084019062000347565b50620000ea60003362000190565b620001167f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63362000190565b620001427f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3362000190565b5050506200015f620001596200018c60201b60201c565b620001a0565b601080546001600160a01b0319166001600160a01b0383161790556200018482601255565b505062000468565b3390565b6200019c8282620001f2565b5050565b600f80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6200020982826200023560201b620010641760201c565b600082815260016020908152604090912062000230918390620010e8620002d5821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166200019c576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002913390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620002ec836001600160a01b038416620002f5565b90505b92915050565b60008181526001830160205260408120546200033e57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620002ef565b506000620002ef565b82805462000355906200042c565b90600052602060002090601f016020900481019282620003795760008555620003c4565b82601f106200039457805160ff1916838001178555620003c4565b82800160010185558215620003c4579182015b82811115620003c4578251825591602001919060010190620003a7565b50620003d2929150620003d6565b5090565b5b80821115620003d25760008155600101620003d7565b600080604083850312156200040157600080fd5b825160208401519092506001600160a01b03811681146200042157600080fd5b809150509250929050565b600181811c908216806200044157607f821691505b6020821081036200046257634e487b7160e01b600052602260045260246000fd5b50919050565b612a5a80620004786000396000f3fe608060405234801561001057600080fd5b506004361061025e5760003560e01c80636a62784211610146578063a217fddf116100c3578063ca15c87311610087578063ca15c873146104fd578063d539139314610510578063d547741f14610537578063e63ab1e91461054a578063e985e9c514610571578063f2fde38b146105ad57600080fd5b8063a217fddf146104b4578063a22cb465146104bc578063b88d4fde146104cf578063c4912774146104e2578063c87b56dd146104ea57600080fd5b80638da5cb5b1161010a5780638da5cb5b1461046b5780639010d07c1461047c57806391d148541461048f57806395d89b41146104a257806398bcede9146104aa57600080fd5b80636a6278421461042257806370a0823114610435578063715018a6146104485780637d9a7a4c146104505780638456cb591461046357600080fd5b80632ed6d5e8116101df57806342842e0e116101a357806342842e0e146103ba57806342966c68146103cd5780634f6ccce7146103e05780635ac8c733146103f35780635c975abb146104045780636352211e1461040f57600080fd5b80632ed6d5e8146103715780632f2ff15d146103795780632f745c591461038c57806336568abe1461039f5780633f4ba83a146103b257600080fd5b8063171be8d011610226578063171be8d0146102f157806318160ddd146102f957806323b872dd1461030b578063248a9ca31461031e57806326a4e8d21461034157600080fd5b806301ffc9a71461026357806306fdde031461028b578063081812fc146102a0578063095ea7b3146102cb57806310fe9ae8146102e0575b600080fd5b610276610271366004612439565b6105c0565b60405190151581526020015b60405180910390f35b6102936105d1565b60405161028291906124ae565b6102b36102ae3660046124c1565b610663565b6040516001600160a01b039091168152602001610282565b6102de6102d93660046124ef565b61068a565b005b6010546001600160a01b03166102b3565b6102de6107a4565b600a545b604051908152602001610282565b6102de61031936600461251b565b610882565b6102fd61032c3660046124c1565b60009081526020819052604090206001015490565b6102de61034f36600461255c565b601080546001600160a01b0319166001600160a01b0392909216919091179055565b6102de6108b4565b6102de610387366004612579565b6109a3565b6102fd61039a3660046124ef565b6109c8565b6102de6103ad366004612579565b610a5e565b6102de610ad8565b6102de6103c836600461251b565b610b80565b6102de6103db3660046124c1565b610b9b565b6102fd6103ee3660046124c1565b610bcc565b6011546001600160a01b03166102b3565b600c5460ff16610276565b6102b361041d3660046124c1565b610c5f565b6102de61043036600461255c565b610cbf565b6102fd61044336600461255c565b610d76565b6102de610dfc565b6102de61045e3660046124c1565b601255565b6102de610e0e565b600f546001600160a01b03166102b3565b6102b361048a3660046125a9565b610eb2565b61027661049d366004612579565b610ed1565b610293610efa565b600d546102fd9081565b6102fd600081565b6102de6104ca3660046125d9565b610f09565b6102de6104dd36600461261d565b610f14565b6012546102fd565b6102936104f83660046124c1565b610f4c565b6102fd61050b3660046124c1565b610fb2565b6102fd7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102de610545366004612579565b610fc9565b6102fd7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b61027661057f3660046126fd565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b6102de6105bb36600461255c565b610fee565b60006105cb826110fd565b92915050565b6060600280546105e09061272b565b80601f016020809104026020016040519081016040528092919081815260200182805461060c9061272b565b80156106595780601f1061062e57610100808354040283529160200191610659565b820191906000526020600020905b81548152906001019060200180831161063c57829003601f168201915b5050505050905090565b600061066e82611122565b506000908152600660205260409020546001600160a01b031690565b600061069582610c5f565b9050806001600160a01b0316836001600160a01b0316036107075760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806107235750610723813361057f565b6107955760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016106fe565b61079f8383611181565b505050565b6010546012546040516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b03909116906323b872dd906064016020604051808303816000875af11580156107ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108239190612765565b5061083633610831600d5490565b6111ef565b610844600d80546001019055565b337fa9c0d2bc1ad901d228c1253f581a88f21af0b4d76a4bcc5c8a344be51f9747d961086f600d5490565b60405190815260200160405180910390a2565b61088d335b82611388565b6108a95760405162461bcd60e51b81526004016106fe90612782565b61079f838383611407565b6108bc611578565b6010546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610905573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092991906127cf565b60105460405163a9059cbb60e01b8152336004820152602481018390529192506001600160a01b03169063a9059cbb906044016020604051808303816000875af115801561097b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099f9190612765565b5050565b6000828152602081905260409020600101546109be816115d2565b61079f83836115dc565b60006109d383610d76565b8210610a355760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016106fe565b506001600160a01b03919091166000908152600860209081526040808320938352929052205490565b6001600160a01b0381163314610ace5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016106fe565b61099f82826115fe565b610b027f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610ed1565b610b76576040805162461bcd60e51b81526020600482015260248101919091527f4552433732315072657365744d696e7465725061757365724175746f49643a2060448201527f6d75737420686176652070617573657220726f6c6520746f20756e706175736560648201526084016106fe565b610b7e611620565b565b61079f83838360405180602001604052806000815250610f14565b610ba433610887565b610bc05760405162461bcd60e51b81526004016106fe90612782565b610bc981611672565b50565b6000610bd7600a5490565b8210610c3a5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016106fe565b600a8281548110610c4d57610c4d6127e8565b90600052602060002001549050919050565b6000818152600460205260408120546001600160a01b0316806105cb5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016106fe565b610ce97f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610ed1565b610d5b5760405162461bcd60e51b815260206004820152603d60248201527f4552433732315072657365744d696e7465725061757365724175746f49643a2060448201527f6d7573742068617665206d696e74657220726f6c6520746f206d696e7400000060648201526084016106fe565b610d6881610831600d5490565b610bc9600d80546001019055565b60006001600160a01b038216610de05760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016106fe565b506001600160a01b031660009081526005602052604090205490565b610e04611578565b610b7e6000611715565b610e387f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610ed1565b610eaa5760405162461bcd60e51b815260206004820152603e60248201527f4552433732315072657365744d696e7465725061757365724175746f49643a2060448201527f6d75737420686176652070617573657220726f6c6520746f207061757365000060648201526084016106fe565b610b7e611767565b6000828152600160205260408120610eca90836117a4565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600380546105e09061272b565b61099f3383836117b0565b610f1e3383611388565b610f3a5760405162461bcd60e51b81526004016106fe90612782565b610f468484848461187e565b50505050565b6060610f5782611122565b6000610f616118b1565b90506000815111610f815760405180602001604052806000815250610eca565b80610f8b846118c0565b604051602001610f9c9291906127fe565b6040516020818303038152906040529392505050565b60008181526001602052604081206105cb90611953565b600082815260208190526040902060010154610fe4816115d2565b61079f83836115fe565b610ff6611578565b6001600160a01b03811661105b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106fe565b610bc981611715565b61106e8282610ed1565b61099f576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556110a43390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610eca836001600160a01b03841661195d565b60006001600160e01b0319821663780e9d6360e01b14806105cb57506105cb826119ac565b6000818152600460205260409020546001600160a01b0316610bc95760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016106fe565b600081815260066020526040902080546001600160a01b0319166001600160a01b03841690811790915581906111b682610c5f565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6001600160a01b0382166112455760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016106fe565b6000818152600460205260409020546001600160a01b0316156112aa5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016106fe565b6112b86000838360016119ec565b6000818152600460205260409020546001600160a01b03161561131d5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016106fe565b6001600160a01b038216600081815260056020908152604080832080546001019055848352600490915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60008061139483610c5f565b9050806001600160a01b0316846001600160a01b031614806113db57506001600160a01b0380821660009081526007602090815260408083209388168352929052205460ff165b806113ff5750836001600160a01b03166113f484610663565b6001600160a01b0316145b949350505050565b826001600160a01b031661141a82610c5f565b6001600160a01b0316146114405760405162461bcd60e51b81526004016106fe9061282d565b6001600160a01b0382166114a25760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016106fe565b6114af83838360016119ec565b826001600160a01b03166114c282610c5f565b6001600160a01b0316146114e85760405162461bcd60e51b81526004016106fe9061282d565b600081815260066020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260058552838620805460001901905590871680865283862080546001019055868652600490945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600f546001600160a01b03163314610b7e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106fe565b610bc981336119f8565b6115e68282611064565b600082815260016020526040902061079f90826110e8565b6116088282611a51565b600082815260016020526040902061079f9082611ab6565b611628611acb565b600c805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600061167d82610c5f565b905061168d8160008460016119ec565b61169682610c5f565b600083815260066020908152604080832080546001600160a01b03199081169091556001600160a01b0385168085526005845282852080546000190190558785526004909352818420805490911690555192935084927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600f80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b61176f611b14565b600c805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586116553390565b6000610eca8383611b5a565b816001600160a01b0316836001600160a01b0316036118115760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016106fe565b6001600160a01b03838116600081815260076020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611889848484611407565b61189584848484611b84565b610f465760405162461bcd60e51b81526004016106fe90612872565b6060600e80546105e09061272b565b606060006118cd83611c85565b600101905060008167ffffffffffffffff8111156118ed576118ed612607565b6040519080825280601f01601f191660200182016040528015611917576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461192157509392505050565b60006105cb825490565b60008181526001830160205260408120546119a4575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556105cb565b5060006105cb565b60006001600160e01b031982166380ac58cd60e01b14806119dd57506001600160e01b03198216635b5e139f60e01b145b806105cb57506105cb82611d5d565b610f4684848484611d82565b611a028282610ed1565b61099f57611a0f81611df5565b611a1a836020611e07565b604051602001611a2b9291906128c4565b60408051601f198184030181529082905262461bcd60e51b82526106fe916004016124ae565b611a5b8282610ed1565b1561099f576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610eca836001600160a01b038416611fa3565b600c5460ff16610b7e5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016106fe565b600c5460ff1615610b7e5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016106fe565b6000826000018281548110611b7157611b716127e8565b9060005260206000200154905092915050565b60006001600160a01b0384163b15611c7a57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611bc8903390899088908890600401612939565b6020604051808303816000875af1925050508015611c03575060408051601f3d908101601f19168201909252611c0091810190612976565b60015b611c60573d808015611c31576040519150601f19603f3d011682016040523d82523d6000602084013e611c36565b606091505b508051600003611c585760405162461bcd60e51b81526004016106fe90612872565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506113ff565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310611cc45772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611cf0576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310611d0e57662386f26fc10000830492506010015b6305f5e1008310611d26576305f5e100830492506008015b6127108310611d3a57612710830492506004015b60648310611d4c576064830492506002015b600a83106105cb5760010192915050565b60006001600160e01b03198216635a05180f60e01b14806105cb57506105cb82612096565b611d8e848484846120cb565b600c5460ff1615610f465760405162461bcd60e51b815260206004820152602b60248201527f4552433732315061757361626c653a20746f6b656e207472616e73666572207760448201526a1a1a5b19481c185d5cd95960aa1b60648201526084016106fe565b60606105cb6001600160a01b03831660145b60606000611e168360026129a9565b611e219060026129c8565b67ffffffffffffffff811115611e3957611e39612607565b6040519080825280601f01601f191660200182016040528015611e63576020820181803683370190505b509050600360fc1b81600081518110611e7e57611e7e6127e8565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611ead57611ead6127e8565b60200101906001600160f81b031916908160001a9053506000611ed18460026129a9565b611edc9060016129c8565b90505b6001811115611f54576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611f1057611f106127e8565b1a60f81b828281518110611f2657611f266127e8565b60200101906001600160f81b031916908160001a90535060049490941c93611f4d816129e0565b9050611edf565b508315610eca5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016106fe565b6000818152600183016020526040812054801561208c576000611fc76001836129f7565b8554909150600090611fdb906001906129f7565b9050818114612040576000866000018281548110611ffb57611ffb6127e8565b906000526020600020015490508087600001848154811061201e5761201e6127e8565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061205157612051612a0e565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506105cb565b60009150506105cb565b60006001600160e01b03198216637965db0b60e01b14806105cb57506301ffc9a760e01b6001600160e01b03198316146105cb565b6120d78484848461220b565b60018111156121465760405162461bcd60e51b815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e7365637574697665207472604482015274185b9cd9995c9cc81b9bdd081cdd5c1c1bdc9d1959605a1b60648201526084016106fe565b816001600160a01b0385166121a25761219d81600a80546000838152600b60205260408120829055600182018355919091527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80155565b6121c5565b836001600160a01b0316856001600160a01b0316146121c5576121c58582612293565b6001600160a01b0384166121e1576121dc81612330565b612204565b846001600160a01b0316846001600160a01b0316146122045761220484826123df565b5050505050565b6001811115610f46576001600160a01b03841615612251576001600160a01b0384166000908152600560205260408120805483929061224b9084906129f7565b90915550505b6001600160a01b03831615610f46576001600160a01b038316600090815260056020526040812080548392906122889084906129c8565b909155505050505050565b600060016122a084610d76565b6122aa91906129f7565b6000838152600960205260409020549091508082146122fd576001600160a01b03841660009081526008602090815260408083208584528252808320548484528184208190558352600990915290208190555b5060009182526009602090815260408084208490556001600160a01b039094168352600881528383209183525290812055565b600a54600090612342906001906129f7565b6000838152600b6020526040812054600a805493945090928490811061236a5761236a6127e8565b9060005260206000200154905080600a838154811061238b5761238b6127e8565b6000918252602080832090910192909255828152600b9091526040808220849055858252812055600a8054806123c3576123c3612a0e565b6001900381819060005260206000200160009055905550505050565b60006123ea83610d76565b6001600160a01b039093166000908152600860209081526040808320868452825280832085905593825260099052919091209190915550565b6001600160e01b031981168114610bc957600080fd5b60006020828403121561244b57600080fd5b8135610eca81612423565b60005b83811015612471578181015183820152602001612459565b83811115610f465750506000910152565b6000815180845261249a816020860160208601612456565b601f01601f19169290920160200192915050565b602081526000610eca6020830184612482565b6000602082840312156124d357600080fd5b5035919050565b6001600160a01b0381168114610bc957600080fd5b6000806040838503121561250257600080fd5b823561250d816124da565b946020939093013593505050565b60008060006060848603121561253057600080fd5b833561253b816124da565b9250602084013561254b816124da565b929592945050506040919091013590565b60006020828403121561256e57600080fd5b8135610eca816124da565b6000806040838503121561258c57600080fd5b82359150602083013561259e816124da565b809150509250929050565b600080604083850312156125bc57600080fd5b50508035926020909101359150565b8015158114610bc957600080fd5b600080604083850312156125ec57600080fd5b82356125f7816124da565b9150602083013561259e816125cb565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561263357600080fd5b843561263e816124da565b9350602085013561264e816124da565b925060408501359150606085013567ffffffffffffffff8082111561267257600080fd5b818701915087601f83011261268657600080fd5b81358181111561269857612698612607565b604051601f8201601f19908116603f011681019083821181831017156126c0576126c0612607565b816040528281528a60208487010111156126d957600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561271057600080fd5b823561271b816124da565b9150602083013561259e816124da565b600181811c9082168061273f57607f821691505b60208210810361275f57634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561277757600080fd5b8151610eca816125cb565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b6000602082840312156127e157600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b60008351612810818460208801612456565b835190830190612824818360208801612456565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516128fc816017850160208801612456565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161292d816028840160208801612456565b01602801949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061296c90830184612482565b9695505050505050565b60006020828403121561298857600080fd5b8151610eca81612423565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156129c3576129c3612993565b500290565b600082198211156129db576129db612993565b500190565b6000816129ef576129ef612993565b506000190190565b600082821015612a0957612a09612993565b500390565b634e487b7160e01b600052603160045260246000fdfea26469706673582212200d310bc942cbfed66c4768060e87aa38fe61aa5fafd7e58315a6890e7cf20f5964736f6c634300080d003368747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f646f6765756d2d6e6574776f726b2f6e66742d626173657572692f6d61696e2f6d65746164617461732f",
    "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061025e5760003560e01c80636a62784211610146578063a217fddf116100c3578063ca15c87311610087578063ca15c873146104fd578063d539139314610510578063d547741f14610537578063e63ab1e91461054a578063e985e9c514610571578063f2fde38b146105ad57600080fd5b8063a217fddf146104b4578063a22cb465146104bc578063b88d4fde146104cf578063c4912774146104e2578063c87b56dd146104ea57600080fd5b80638da5cb5b1161010a5780638da5cb5b1461046b5780639010d07c1461047c57806391d148541461048f57806395d89b41146104a257806398bcede9146104aa57600080fd5b80636a6278421461042257806370a0823114610435578063715018a6146104485780637d9a7a4c146104505780638456cb591461046357600080fd5b80632ed6d5e8116101df57806342842e0e116101a357806342842e0e146103ba57806342966c68146103cd5780634f6ccce7146103e05780635ac8c733146103f35780635c975abb146104045780636352211e1461040f57600080fd5b80632ed6d5e8146103715780632f2ff15d146103795780632f745c591461038c57806336568abe1461039f5780633f4ba83a146103b257600080fd5b8063171be8d011610226578063171be8d0146102f157806318160ddd146102f957806323b872dd1461030b578063248a9ca31461031e57806326a4e8d21461034157600080fd5b806301ffc9a71461026357806306fdde031461028b578063081812fc146102a0578063095ea7b3146102cb57806310fe9ae8146102e0575b600080fd5b610276610271366004612439565b6105c0565b60405190151581526020015b60405180910390f35b6102936105d1565b60405161028291906124ae565b6102b36102ae3660046124c1565b610663565b6040516001600160a01b039091168152602001610282565b6102de6102d93660046124ef565b61068a565b005b6010546001600160a01b03166102b3565b6102de6107a4565b600a545b604051908152602001610282565b6102de61031936600461251b565b610882565b6102fd61032c3660046124c1565b60009081526020819052604090206001015490565b6102de61034f36600461255c565b601080546001600160a01b0319166001600160a01b0392909216919091179055565b6102de6108b4565b6102de610387366004612579565b6109a3565b6102fd61039a3660046124ef565b6109c8565b6102de6103ad366004612579565b610a5e565b6102de610ad8565b6102de6103c836600461251b565b610b80565b6102de6103db3660046124c1565b610b9b565b6102fd6103ee3660046124c1565b610bcc565b6011546001600160a01b03166102b3565b600c5460ff16610276565b6102b361041d3660046124c1565b610c5f565b6102de61043036600461255c565b610cbf565b6102fd61044336600461255c565b610d76565b6102de610dfc565b6102de61045e3660046124c1565b601255565b6102de610e0e565b600f546001600160a01b03166102b3565b6102b361048a3660046125a9565b610eb2565b61027661049d366004612579565b610ed1565b610293610efa565b600d546102fd9081565b6102fd600081565b6102de6104ca3660046125d9565b610f09565b6102de6104dd36600461261d565b610f14565b6012546102fd565b6102936104f83660046124c1565b610f4c565b6102fd61050b3660046124c1565b610fb2565b6102fd7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102de610545366004612579565b610fc9565b6102fd7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b61027661057f3660046126fd565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b6102de6105bb36600461255c565b610fee565b60006105cb826110fd565b92915050565b6060600280546105e09061272b565b80601f016020809104026020016040519081016040528092919081815260200182805461060c9061272b565b80156106595780601f1061062e57610100808354040283529160200191610659565b820191906000526020600020905b81548152906001019060200180831161063c57829003601f168201915b5050505050905090565b600061066e82611122565b506000908152600660205260409020546001600160a01b031690565b600061069582610c5f565b9050806001600160a01b0316836001600160a01b0316036107075760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806107235750610723813361057f565b6107955760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016106fe565b61079f8383611181565b505050565b6010546012546040516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b03909116906323b872dd906064016020604051808303816000875af11580156107ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108239190612765565b5061083633610831600d5490565b6111ef565b610844600d80546001019055565b337fa9c0d2bc1ad901d228c1253f581a88f21af0b4d76a4bcc5c8a344be51f9747d961086f600d5490565b60405190815260200160405180910390a2565b61088d335b82611388565b6108a95760405162461bcd60e51b81526004016106fe90612782565b61079f838383611407565b6108bc611578565b6010546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610905573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092991906127cf565b60105460405163a9059cbb60e01b8152336004820152602481018390529192506001600160a01b03169063a9059cbb906044016020604051808303816000875af115801561097b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099f9190612765565b5050565b6000828152602081905260409020600101546109be816115d2565b61079f83836115dc565b60006109d383610d76565b8210610a355760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016106fe565b506001600160a01b03919091166000908152600860209081526040808320938352929052205490565b6001600160a01b0381163314610ace5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016106fe565b61099f82826115fe565b610b027f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610ed1565b610b76576040805162461bcd60e51b81526020600482015260248101919091527f4552433732315072657365744d696e7465725061757365724175746f49643a2060448201527f6d75737420686176652070617573657220726f6c6520746f20756e706175736560648201526084016106fe565b610b7e611620565b565b61079f83838360405180602001604052806000815250610f14565b610ba433610887565b610bc05760405162461bcd60e51b81526004016106fe90612782565b610bc981611672565b50565b6000610bd7600a5490565b8210610c3a5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016106fe565b600a8281548110610c4d57610c4d6127e8565b90600052602060002001549050919050565b6000818152600460205260408120546001600160a01b0316806105cb5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016106fe565b610ce97f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610ed1565b610d5b5760405162461bcd60e51b815260206004820152603d60248201527f4552433732315072657365744d696e7465725061757365724175746f49643a2060448201527f6d7573742068617665206d696e74657220726f6c6520746f206d696e7400000060648201526084016106fe565b610d6881610831600d5490565b610bc9600d80546001019055565b60006001600160a01b038216610de05760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016106fe565b506001600160a01b031660009081526005602052604090205490565b610e04611578565b610b7e6000611715565b610e387f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610ed1565b610eaa5760405162461bcd60e51b815260206004820152603e60248201527f4552433732315072657365744d696e7465725061757365724175746f49643a2060448201527f6d75737420686176652070617573657220726f6c6520746f207061757365000060648201526084016106fe565b610b7e611767565b6000828152600160205260408120610eca90836117a4565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600380546105e09061272b565b61099f3383836117b0565b610f1e3383611388565b610f3a5760405162461bcd60e51b81526004016106fe90612782565b610f468484848461187e565b50505050565b6060610f5782611122565b6000610f616118b1565b90506000815111610f815760405180602001604052806000815250610eca565b80610f8b846118c0565b604051602001610f9c9291906127fe565b6040516020818303038152906040529392505050565b60008181526001602052604081206105cb90611953565b600082815260208190526040902060010154610fe4816115d2565b61079f83836115fe565b610ff6611578565b6001600160a01b03811661105b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106fe565b610bc981611715565b61106e8282610ed1565b61099f576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556110a43390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610eca836001600160a01b03841661195d565b60006001600160e01b0319821663780e9d6360e01b14806105cb57506105cb826119ac565b6000818152600460205260409020546001600160a01b0316610bc95760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016106fe565b600081815260066020526040902080546001600160a01b0319166001600160a01b03841690811790915581906111b682610c5f565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6001600160a01b0382166112455760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016106fe565b6000818152600460205260409020546001600160a01b0316156112aa5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016106fe565b6112b86000838360016119ec565b6000818152600460205260409020546001600160a01b03161561131d5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016106fe565b6001600160a01b038216600081815260056020908152604080832080546001019055848352600490915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60008061139483610c5f565b9050806001600160a01b0316846001600160a01b031614806113db57506001600160a01b0380821660009081526007602090815260408083209388168352929052205460ff165b806113ff5750836001600160a01b03166113f484610663565b6001600160a01b0316145b949350505050565b826001600160a01b031661141a82610c5f565b6001600160a01b0316146114405760405162461bcd60e51b81526004016106fe9061282d565b6001600160a01b0382166114a25760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016106fe565b6114af83838360016119ec565b826001600160a01b03166114c282610c5f565b6001600160a01b0316146114e85760405162461bcd60e51b81526004016106fe9061282d565b600081815260066020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260058552838620805460001901905590871680865283862080546001019055868652600490945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600f546001600160a01b03163314610b7e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106fe565b610bc981336119f8565b6115e68282611064565b600082815260016020526040902061079f90826110e8565b6116088282611a51565b600082815260016020526040902061079f9082611ab6565b611628611acb565b600c805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600061167d82610c5f565b905061168d8160008460016119ec565b61169682610c5f565b600083815260066020908152604080832080546001600160a01b03199081169091556001600160a01b0385168085526005845282852080546000190190558785526004909352818420805490911690555192935084927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600f80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b61176f611b14565b600c805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586116553390565b6000610eca8383611b5a565b816001600160a01b0316836001600160a01b0316036118115760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016106fe565b6001600160a01b03838116600081815260076020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611889848484611407565b61189584848484611b84565b610f465760405162461bcd60e51b81526004016106fe90612872565b6060600e80546105e09061272b565b606060006118cd83611c85565b600101905060008167ffffffffffffffff8111156118ed576118ed612607565b6040519080825280601f01601f191660200182016040528015611917576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461192157509392505050565b60006105cb825490565b60008181526001830160205260408120546119a4575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556105cb565b5060006105cb565b60006001600160e01b031982166380ac58cd60e01b14806119dd57506001600160e01b03198216635b5e139f60e01b145b806105cb57506105cb82611d5d565b610f4684848484611d82565b611a028282610ed1565b61099f57611a0f81611df5565b611a1a836020611e07565b604051602001611a2b9291906128c4565b60408051601f198184030181529082905262461bcd60e51b82526106fe916004016124ae565b611a5b8282610ed1565b1561099f576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610eca836001600160a01b038416611fa3565b600c5460ff16610b7e5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016106fe565b600c5460ff1615610b7e5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016106fe565b6000826000018281548110611b7157611b716127e8565b9060005260206000200154905092915050565b60006001600160a01b0384163b15611c7a57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611bc8903390899088908890600401612939565b6020604051808303816000875af1925050508015611c03575060408051601f3d908101601f19168201909252611c0091810190612976565b60015b611c60573d808015611c31576040519150601f19603f3d011682016040523d82523d6000602084013e611c36565b606091505b508051600003611c585760405162461bcd60e51b81526004016106fe90612872565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506113ff565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310611cc45772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611cf0576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310611d0e57662386f26fc10000830492506010015b6305f5e1008310611d26576305f5e100830492506008015b6127108310611d3a57612710830492506004015b60648310611d4c576064830492506002015b600a83106105cb5760010192915050565b60006001600160e01b03198216635a05180f60e01b14806105cb57506105cb82612096565b611d8e848484846120cb565b600c5460ff1615610f465760405162461bcd60e51b815260206004820152602b60248201527f4552433732315061757361626c653a20746f6b656e207472616e73666572207760448201526a1a1a5b19481c185d5cd95960aa1b60648201526084016106fe565b60606105cb6001600160a01b03831660145b60606000611e168360026129a9565b611e219060026129c8565b67ffffffffffffffff811115611e3957611e39612607565b6040519080825280601f01601f191660200182016040528015611e63576020820181803683370190505b509050600360fc1b81600081518110611e7e57611e7e6127e8565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611ead57611ead6127e8565b60200101906001600160f81b031916908160001a9053506000611ed18460026129a9565b611edc9060016129c8565b90505b6001811115611f54576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611f1057611f106127e8565b1a60f81b828281518110611f2657611f266127e8565b60200101906001600160f81b031916908160001a90535060049490941c93611f4d816129e0565b9050611edf565b508315610eca5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016106fe565b6000818152600183016020526040812054801561208c576000611fc76001836129f7565b8554909150600090611fdb906001906129f7565b9050818114612040576000866000018281548110611ffb57611ffb6127e8565b906000526020600020015490508087600001848154811061201e5761201e6127e8565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061205157612051612a0e565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506105cb565b60009150506105cb565b60006001600160e01b03198216637965db0b60e01b14806105cb57506301ffc9a760e01b6001600160e01b03198316146105cb565b6120d78484848461220b565b60018111156121465760405162461bcd60e51b815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e7365637574697665207472604482015274185b9cd9995c9cc81b9bdd081cdd5c1c1bdc9d1959605a1b60648201526084016106fe565b816001600160a01b0385166121a25761219d81600a80546000838152600b60205260408120829055600182018355919091527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80155565b6121c5565b836001600160a01b0316856001600160a01b0316146121c5576121c58582612293565b6001600160a01b0384166121e1576121dc81612330565b612204565b846001600160a01b0316846001600160a01b0316146122045761220484826123df565b5050505050565b6001811115610f46576001600160a01b03841615612251576001600160a01b0384166000908152600560205260408120805483929061224b9084906129f7565b90915550505b6001600160a01b03831615610f46576001600160a01b038316600090815260056020526040812080548392906122889084906129c8565b909155505050505050565b600060016122a084610d76565b6122aa91906129f7565b6000838152600960205260409020549091508082146122fd576001600160a01b03841660009081526008602090815260408083208584528252808320548484528184208190558352600990915290208190555b5060009182526009602090815260408084208490556001600160a01b039094168352600881528383209183525290812055565b600a54600090612342906001906129f7565b6000838152600b6020526040812054600a805493945090928490811061236a5761236a6127e8565b9060005260206000200154905080600a838154811061238b5761238b6127e8565b6000918252602080832090910192909255828152600b9091526040808220849055858252812055600a8054806123c3576123c3612a0e565b6001900381819060005260206000200160009055905550505050565b60006123ea83610d76565b6001600160a01b039093166000908152600860209081526040808320868452825280832085905593825260099052919091209190915550565b6001600160e01b031981168114610bc957600080fd5b60006020828403121561244b57600080fd5b8135610eca81612423565b60005b83811015612471578181015183820152602001612459565b83811115610f465750506000910152565b6000815180845261249a816020860160208601612456565b601f01601f19169290920160200192915050565b602081526000610eca6020830184612482565b6000602082840312156124d357600080fd5b5035919050565b6001600160a01b0381168114610bc957600080fd5b6000806040838503121561250257600080fd5b823561250d816124da565b946020939093013593505050565b60008060006060848603121561253057600080fd5b833561253b816124da565b9250602084013561254b816124da565b929592945050506040919091013590565b60006020828403121561256e57600080fd5b8135610eca816124da565b6000806040838503121561258c57600080fd5b82359150602083013561259e816124da565b809150509250929050565b600080604083850312156125bc57600080fd5b50508035926020909101359150565b8015158114610bc957600080fd5b600080604083850312156125ec57600080fd5b82356125f7816124da565b9150602083013561259e816125cb565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561263357600080fd5b843561263e816124da565b9350602085013561264e816124da565b925060408501359150606085013567ffffffffffffffff8082111561267257600080fd5b818701915087601f83011261268657600080fd5b81358181111561269857612698612607565b604051601f8201601f19908116603f011681019083821181831017156126c0576126c0612607565b816040528281528a60208487010111156126d957600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561271057600080fd5b823561271b816124da565b9150602083013561259e816124da565b600181811c9082168061273f57607f821691505b60208210810361275f57634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561277757600080fd5b8151610eca816125cb565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b6000602082840312156127e157600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b60008351612810818460208801612456565b835190830190612824818360208801612456565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516128fc816017850160208801612456565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161292d816028840160208801612456565b01602801949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061296c90830184612482565b9695505050505050565b60006020828403121561298857600080fd5b8151610eca81612423565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156129c3576129c3612993565b500290565b600082198211156129db576129db612993565b500190565b6000816129ef576129ef612993565b506000190190565b600082821015612a0957612a09612993565b500390565b634e487b7160e01b600052603160045260246000fdfea26469706673582212200d310bc942cbfed66c4768060e87aa38fe61aa5fafd7e58315a6890e7cf20f5964736f6c634300080d0033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }
  