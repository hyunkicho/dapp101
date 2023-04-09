let MYGOVERNOR = {
  "_format": "hh-sol-artifact-1",
  "contractName": "TestGovernor",
  "sourceName": "contracts/TestGovernor.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract IVotes",
          "name": "_token",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "Empty",
      "type": "error"
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
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "ProposalCanceled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "proposer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "targets",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        },
        {
          "indexed": false,
          "internalType": "string[]",
          "name": "signatures",
          "type": "string[]"
        },
        {
          "indexed": false,
          "internalType": "bytes[]",
          "name": "calldatas",
          "type": "bytes[]"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "startBlock",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "endBlock",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "description",
          "type": "string"
        }
      ],
      "name": "ProposalCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "ProposalExecuted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "support",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "weight",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "reason",
          "type": "string"
        }
      ],
      "name": "VoteCast",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "support",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "weight",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "reason",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "params",
          "type": "bytes"
        }
      ],
      "name": "VoteCastWithParams",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "BALLOT_TYPEHASH",
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
      "name": "COUNTING_MODE",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "EXTENDED_BALLOT_TYPEHASH",
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
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "support",
          "type": "uint8"
        }
      ],
      "name": "castVote",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "support",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "castVoteBySig",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "support",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "reason",
          "type": "string"
        }
      ],
      "name": "castVoteWithReason",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "support",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "reason",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "params",
          "type": "bytes"
        }
      ],
      "name": "castVoteWithReasonAndParams",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "support",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "reason",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "params",
          "type": "bytes"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "castVoteWithReasonAndParamsBySig",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "targets",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes[]",
          "name": "calldatas",
          "type": "bytes[]"
        },
        {
          "internalType": "bytes32",
          "name": "descriptionHash",
          "type": "bytes32"
        }
      ],
      "name": "execute",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "getVotes",
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
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "params",
          "type": "bytes"
        }
      ],
      "name": "getVotesWithParams",
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
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasVoted",
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
          "internalType": "address[]",
          "name": "targets",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes[]",
          "name": "calldatas",
          "type": "bytes[]"
        },
        {
          "internalType": "bytes32",
          "name": "descriptionHash",
          "type": "bytes32"
        }
      ],
      "name": "hashProposal",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155BatchReceived",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC721Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
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
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "proposalDeadline",
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
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "proposalSnapshot",
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
      "name": "proposalThreshold",
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
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "proposalVotes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "againstVotes",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "forVotes",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "abstainVotes",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "targets",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes[]",
          "name": "calldatas",
          "type": "bytes[]"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        }
      ],
      "name": "propose",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "quorum",
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
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "quorumReached",
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
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "relay",
      "outputs": [],
      "stateMutability": "payable",
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
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "state",
      "outputs": [
        {
          "internalType": "enum IGovernor.ProposalState",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
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
      "name": "token",
      "outputs": [
        {
          "internalType": "contract IVotes",
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
      "name": "version",
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
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "voteSucceeded",
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
      "name": "votingDelay",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "votingPeriod",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ],
  "bytecode": "0x6101606040523480156200001257600080fd5b5060405162002dae38038062002dae833981016040819052620000359162000237565b60408051808201909152600a81526926bca3b7bb32b93737b960b11b6020820152819080620000786040805180820190915260018152603160f81b602082015290565b815160208084019190912082518383012060e08290526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81880181905281830187905260608201869052608082019490945230818401528151808203909301835260c00190528051940193909320919290916080523060c05261012052505082516200011e925060009150602084019062000191565b50506001600160a01b03166101405262000138336200013f565b50620002a5565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200019f9062000269565b90600052602060002090601f016020900481019282620001c357600085556200020e565b82601f10620001de57805160ff19168380011785556200020e565b828001600101855582156200020e579182015b828111156200020e578251825591602001919060010190620001f1565b506200021c92915062000220565b5090565b5b808211156200021c576000815560010162000221565b6000602082840312156200024a57600080fd5b81516001600160a01b03811681146200026257600080fd5b9392505050565b600181811c908216806200027e57607f821691505b6020821081036200029f57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e051610100516101205161014051612aa762000307600039600081816107530152611712015260006118a1015260006118f0015260006118cb015260006118240152600061184e015260006118780152612aa76000f3fe6080604052600436106102085760003560e01c80637b3c71d311610118578063c59057e4116100a0578063eb9019d41161006f578063eb9019d4146106b4578063f23a6e61146106d4578063f2fde38b14610700578063f8ce560a14610720578063fc0c546a1461074157600080fd5b8063c59057e4146105fa578063d4a8dd981461061a578063dd4e2ba51461063a578063deaaa7cc1461068057600080fd5b80639a802a6d116100e75780639a802a6d14610567578063b58131b014610587578063bc197c811461059b578063c01f9e37146105c7578063c28bc2fa146105e757600080fd5b80637b3c71d3146104d55780637d5e81e2146104f55780638d73b031146105155780638da5cb5b1461053557600080fd5b80633932abb11161019b578063544ffc9c1161016a578063544ffc9c1461040157806354fd4d501461045657806356781388146104805780635f398a14146104a0578063715018a6146104c057600080fd5b80633932abb1146103565780633bccf4fd1461036a5780633e4f49e61461038a57806343859632146103b757600080fd5b8063150b7a02116101d7578063150b7a02146102ab5780632656227d146102ef5780632d63f693146103025780632fe3e2611461032257600080fd5b806301ffc9a71461021657806302a251a31461024b578063034201811461026957806306fdde031461028957600080fd5b3661021157005b005b600080fd5b34801561022257600080fd5b50610236610231366004611d2c565b610775565b60405190151581526020015b60405180910390f35b34801561025757600080fd5b50601e5b604051908152602001610242565b34801561027557600080fd5b5061025b610284366004611e71565b6107e2565b34801561029557600080fd5b5061029e6108da565b6040516102429190611f73565b3480156102b757600080fd5b506102d66102c6366004611f9d565b630a85bd0160e11b949350505050565b6040516001600160e01b03199091168152602001610242565b61025b6102fd366004612173565b61096c565b34801561030e57600080fd5b5061025b61031d366004612202565b610a98565b34801561032e57600080fd5b5061025b7fb3b3f3b703cd84ce352197dcff232b1b5d3cfb2025ce47cf04742d0651f1af8881565b34801561036257600080fd5b50600961025b565b34801561037657600080fd5b5061025b61038536600461221b565b610acf565b34801561039657600080fd5b506103aa6103a5366004612202565b610b45565b604051610242919061227f565b3480156103c357600080fd5b506102366103d23660046122a7565b60008281526004602090815260408083206001600160a01b038516845260030190915290205460ff1692915050565b34801561040d57600080fd5b5061043b61041c366004612202565b6000908152600460205260409020805460018201546002909201549092565b60408051938452602084019290925290820152606001610242565b34801561046257600080fd5b506040805180820190915260018152603160f81b602082015261029e565b34801561048c57600080fd5b5061025b61049b3660046122d3565b610c54565b3480156104ac57600080fd5b5061025b6104bb3660046122f6565b610c7d565b3480156104cc57600080fd5b5061020f610cc7565b3480156104e157600080fd5b5061025b6104f0366004612379565b610cdb565b34801561050157600080fd5b5061025b6105103660046123d2565b610d2d565b34801561052157600080fd5b50610236610530366004612202565b610fe2565b34801561054157600080fd5b506005546001600160a01b03165b6040516001600160a01b039091168152602001610242565b34801561057357600080fd5b5061025b610582366004612486565b610ffe565b34801561059357600080fd5b50600061025b565b3480156105a757600080fd5b506102d66105b63660046124dc565b63bc197c8160e01b95945050505050565b3480156105d357600080fd5b5061025b6105e2366004612202565b611015565b61020f6105f536600461256b565b611044565b34801561060657600080fd5b5061025b610615366004612173565b61113b565b34801561062657600080fd5b50610236610635366004612202565b611175565b34801561064657600080fd5b506040805180820190915260208082527f737570706f72743d627261766f2671756f72756d3d666f722c6162737461696e9082015261029e565b34801561068c57600080fd5b5061025b7f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f81565b3480156106c057600080fd5b5061025b6106cf3660046125ac565b611180565b3480156106e057600080fd5b506102d66106ef3660046125d6565b63f23a6e6160e01b95945050505050565b34801561070c57600080fd5b5061020f61071b36600461263a565b6111a1565b34801561072c57600080fd5b5061025b61073b366004612202565b50600290565b34801561074d57600080fd5b5061054f7f000000000000000000000000000000000000000000000000000000000000000081565b60006001600160e01b0319821663bf26d89760e01b14806107a657506001600160e01b031982166379dd796f60e01b145b806107c157506001600160e01b03198216630271189760e51b145b806107dc57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60008061088661087e7fb3b3f3b703cd84ce352197dcff232b1b5d3cfb2025ce47cf04742d0651f1af888c8c8c8c60405161081e929190612655565b60405180910390208b80519060200120604051602001610863959493929190948552602085019390935260ff9190911660408401526060830152608082015260a00190565b6040516020818303038152906040528051906020012061121a565b868686611268565b90506108cc8a828b8b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508d9250611286915050565b9a9950505050505050505050565b6060600080546108e990612665565b80601f016020809104026020016040519081016040528092919081815260200182805461091590612665565b80156109625780601f1061093757610100808354040283529160200191610962565b820191906000526020600020905b81548152906001019060200180831161094557829003601f168201915b5050505050905090565b60008061097b8686868661113b565b9050600061098882610b45565b9050600481600781111561099e5761099e612269565b14806109bb575060058160078111156109b9576109b9612269565b145b610a165760405162461bcd60e51b815260206004820152602160248201527f476f7665726e6f723a2070726f706f73616c206e6f74207375636365737366756044820152601b60fa1b60648201526084015b60405180910390fd5b600082815260016020818152604092839020600201805460ff191690921790915590518381527f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f910160405180910390a1610a7482888888886113eb565b610a818288888888611478565b610a8e82888888886113eb565b5095945050505050565b60008181526001602090815260408083208151928301909152546001600160401b0316908190525b6001600160401b031692915050565b604080517f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f602082015290810186905260ff851660608201526000908190610b1d9061087e90608001610863565b9050610b3a8782886040518060200160405280600081525061156e565b979650505050505050565b6000818152600160205260408120600281015460ff1615610b695750600792915050565b6002810154610100900460ff1615610b845750600292915050565b6000610b8f84610a98565b905080600003610be15760405162461bcd60e51b815260206004820152601d60248201527f476f7665726e6f723a20756e6b6e6f776e2070726f706f73616c2069640000006044820152606401610a0d565b438110610bf2575060009392505050565b6000610bfd85611015565b9050438110610c1157506001949350505050565b610c1a8561159a565b8015610c39575060008581526004602052604090208054600190910154115b15610c4957506004949350505050565b506003949350505050565b600080339050610c758482856040518060200160405280600081525061156e565b949350505050565b600080339050610b3a87828888888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508a9250611286915050565b610ccf6115d1565b610cd9600061162b565b565b600080339050610d2386828787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061156e92505050565b9695505050505050565b600080610d3f336106cf6001436126b5565b1015610da75760405162461bcd60e51b815260206004820152603160248201527f476f7665726e6f723a2070726f706f73657220766f7465732062656c6f7720706044820152701c9bdc1bdcd85b081d1a1c995cda1bdb19607a1b6064820152608401610a0d565b6000610dbc868686868051906020012061113b565b90508451865114610ddf5760405162461bcd60e51b8152600401610a0d906126cc565b8351865114610e005760405162461bcd60e51b8152600401610a0d906126cc565b6000865111610e515760405162461bcd60e51b815260206004820152601860248201527f476f7665726e6f723a20656d7074792070726f706f73616c00000000000000006044820152606401610a0d565b600081815260016020908152604091829020825191820190925281546001600160401b03169081905215610ed15760405162461bcd60e51b815260206004820152602160248201527f476f7665726e6f723a2070726f706f73616c20616c72656164792065786973746044820152607360f81b6064820152608401610a0d565b6000610edd600961167d565b610ee64361167d565b610ef0919061270d565b90506000610efe601e61167d565b610f08908361270d565b835467ffffffffffffffff19166001600160401b038416178455905060018301805467ffffffffffffffff19166001600160401b0383161790557f7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e084338b8b8d516001600160401b03811115610f8057610f80611db4565b604051908082528060200260200182016040528015610fb357816020015b6060815260200190600190039081610f9e5790505b508c88888e604051610fcd999897969594939291906127fe565b60405180910390a15091979650505050505050565b60008181526004602052604081208054600190910154116107dc565b600061100b8484846116e9565b90505b9392505050565b60008181526001602081815260408084208151928301909152909101546001600160401b031690819052610ac0565b3330146110935760405162461bcd60e51b815260206004820152601860248201527f476f7665726e6f723a206f6e6c79476f7665726e616e636500000000000000006044820152606401610a0d565b6110aa565b806110a3600261177f565b0361109857505b600080856001600160a01b03168585856040516110c8929190612655565b60006040518083038185875af1925050503d8060008114611105576040519150601f19603f3d011682016040523d82523d6000602084013e61110a565b606091505b50915091506111328282604051806060016040528060288152602001612a23602891396117fe565b50505050505050565b60008484848460405160200161115494939291906128ed565b60408051601f19818403018152919052805160209091012095945050505050565b60006107dc8261159a565b600061100e838361119c60408051602081019091526000815290565b6116e9565b6111a96115d1565b6001600160a01b03811661120e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610a0d565b6112178161162b565b50565b60006107dc611227611817565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006112798787878761193e565b91509150610a8e81611a02565b60008581526001602081905260408220906112a088610b45565b60078111156112b1576112b1612269565b1461130a5760405162461bcd60e51b815260206004820152602360248201527f476f7665726e6f723a20766f7465206e6f742063757272656e746c792061637460448201526269766560e81b6064820152608401610a0d565b604080516020810190915281546001600160401b031690819052600090611333908890866116e9565b90506113428888888488611b4c565b835160000361139757866001600160a01b03167fb8e138887d0aa13bab447e82de9d5c1777041ecd21ca36ba824ff1e6c07ddda48988848960405161138a9493929190612938565b60405180910390a2610b3a565b866001600160a01b03167fe2babfbac5889a709b63bb7f598b324e08bc5a4fb9ec647fb3cbc9ec07eb871289888489896040516113d8959493929190612960565b60405180910390a2979650505050505050565b611471565b845181101561146f57306001600160a01b0316858281518110611415576114156129a6565b60200260200101516001600160a01b03160361145f5761145f838281518110611440576114406129a6565b6020026020010151805190602001206002611cc690919063ffffffff16565b611468816129bc565b90506113f0565b505b5050505050565b6000604051806060016040528060278152602001612a4b60279139905060005b8551811015611132576000808783815181106114b6576114b66129a6565b60200260200101516001600160a01b03168784815181106114d9576114d96129a6565b60200260200101518785815181106114f3576114f36129a6565b602002602001015160405161150891906129d5565b60006040518083038185875af1925050503d8060008114611545576040519150601f19603f3d011682016040523d82523d6000602084013e61154a565b606091505b509150915061155a8282866117fe565b50505080611567906129bc565b9050611498565b60006115918585858561158c60408051602081019091526000815290565b611286565b95945050505050565b6000818152600460205260408120600281015460018201546115bc91906129f1565b6115c861073b85610a98565b11159392505050565b6005546001600160a01b03163314610cd95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610a0d565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006001600160401b038211156116e55760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203660448201526534206269747360d01b6064820152608401610a0d565b5090565b604051630748d63560e31b81526001600160a01b038481166004830152602482018490526000917f000000000000000000000000000000000000000000000000000000000000000090911690633a46b1a890604401602060405180830381865afa15801561175b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100b9190612a09565b600061179a8254600f81810b600160801b909204900b131590565b156117b857604051631ed9509560e11b815260040160405180910390fd5b508054600f0b6000818152600180840160205260408220805492905583546fffffffffffffffffffffffffffffffff191692016001600160801b03169190911790915590565b6060831561180d57508161100e565b61100e8383611d02565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561187057507f000000000000000000000000000000000000000000000000000000000000000046145b1561189a57507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561197557506000905060036119f9565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156119c9573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166119f2576000600192509250506119f9565b9150600090505b94509492505050565b6000816004811115611a1657611a16612269565b03611a1e5750565b6001816004811115611a3257611a32612269565b03611a7f5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610a0d565b6002816004811115611a9357611a93612269565b03611ae05760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610a0d565b6003816004811115611af457611af4612269565b036112175760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610a0d565b60008581526004602090815260408083206001600160a01b0388168452600381019092529091205460ff1615611bd45760405162461bcd60e51b815260206004820152602760248201527f476f7665726e6f72566f74696e6753696d706c653a20766f746520616c726561604482015266191e4818d85cdd60ca1b6064820152608401610a0d565b6001600160a01b03851660009081526003820160205260409020805460ff1916600117905560ff8416611c205782816000016000828254611c1591906129f1565b9091555061146f9050565b60001960ff851601611c405782816001016000828254611c1591906129f1565b60011960ff851601611c605782816002016000828254611c1591906129f1565b60405162461bcd60e51b815260206004820152603560248201527f476f7665726e6f72566f74696e6753696d706c653a20696e76616c69642076616044820152746c756520666f7220656e756d20566f74655479706560581b6064820152608401610a0d565b8154600160801b90819004600f0b6000818152600180860160205260409091209390935583546001600160801b03908116939091011602179055565b815115611d125781518083602001fd5b8060405162461bcd60e51b8152600401610a0d9190611f73565b600060208284031215611d3e57600080fd5b81356001600160e01b03198116811461100e57600080fd5b803560ff81168114611d6757600080fd5b919050565b60008083601f840112611d7e57600080fd5b5081356001600160401b03811115611d9557600080fd5b602083019150836020828501011115611dad57600080fd5b9250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715611df257611df2611db4565b604052919050565b60006001600160401b03831115611e1357611e13611db4565b611e26601f8401601f1916602001611dca565b9050828152838383011115611e3a57600080fd5b828260208301376000602084830101529392505050565b600082601f830112611e6257600080fd5b61100e83833560208501611dfa565b60008060008060008060008060e0898b031215611e8d57600080fd5b88359750611e9d60208a01611d56565b965060408901356001600160401b0380821115611eb957600080fd5b611ec58c838d01611d6c565b909850965060608b0135915080821115611ede57600080fd5b50611eeb8b828c01611e51565b945050611efa60808a01611d56565b925060a0890135915060c089013590509295985092959890939650565b60005b83811015611f32578181015183820152602001611f1a565b83811115611f41576000848401525b50505050565b60008151808452611f5f816020860160208601611f17565b601f01601f19169290920160200192915050565b60208152600061100e6020830184611f47565b80356001600160a01b0381168114611d6757600080fd5b60008060008060808587031215611fb357600080fd5b611fbc85611f86565b9350611fca60208601611f86565b92506040850135915060608501356001600160401b03811115611fec57600080fd5b611ff887828801611e51565b91505092959194509250565b60006001600160401b0382111561201d5761201d611db4565b5060051b60200190565b600082601f83011261203857600080fd5b8135602061204d61204883612004565b611dca565b82815260059290921b8401810191818101908684111561206c57600080fd5b8286015b8481101561208e5761208181611f86565b8352918301918301612070565b509695505050505050565b600082601f8301126120aa57600080fd5b813560206120ba61204883612004565b82815260059290921b840181019181810190868411156120d957600080fd5b8286015b8481101561208e57803583529183019183016120dd565b600082601f83011261210557600080fd5b8135602061211561204883612004565b82815260059290921b8401810191818101908684111561213457600080fd5b8286015b8481101561208e5780356001600160401b038111156121575760008081fd5b6121658986838b0101611e51565b845250918301918301612138565b6000806000806080858703121561218957600080fd5b84356001600160401b03808211156121a057600080fd5b6121ac88838901612027565b955060208701359150808211156121c257600080fd5b6121ce88838901612099565b945060408701359150808211156121e457600080fd5b506121f1878288016120f4565b949793965093946060013593505050565b60006020828403121561221457600080fd5b5035919050565b600080600080600060a0868803121561223357600080fd5b8535945061224360208701611d56565b935061225160408701611d56565b94979396509394606081013594506080013592915050565b634e487b7160e01b600052602160045260246000fd5b60208101600883106122a157634e487b7160e01b600052602160045260246000fd5b91905290565b600080604083850312156122ba57600080fd5b823591506122ca60208401611f86565b90509250929050565b600080604083850312156122e657600080fd5b823591506122ca60208401611d56565b60008060008060006080868803121561230e57600080fd5b8535945061231e60208701611d56565b935060408601356001600160401b038082111561233a57600080fd5b61234689838a01611d6c565b9095509350606088013591508082111561235f57600080fd5b5061236c88828901611e51565b9150509295509295909350565b6000806000806060858703121561238f57600080fd5b8435935061239f60208601611d56565b925060408501356001600160401b038111156123ba57600080fd5b6123c687828801611d6c565b95989497509550505050565b600080600080608085870312156123e857600080fd5b84356001600160401b03808211156123ff57600080fd5b61240b88838901612027565b9550602087013591508082111561242157600080fd5b61242d88838901612099565b9450604087013591508082111561244357600080fd5b61244f888389016120f4565b9350606087013591508082111561246557600080fd5b508501601f8101871361247757600080fd5b611ff887823560208401611dfa565b60008060006060848603121561249b57600080fd5b6124a484611f86565b92506020840135915060408401356001600160401b038111156124c657600080fd5b6124d286828701611e51565b9150509250925092565b600080600080600060a086880312156124f457600080fd5b6124fd86611f86565b945061250b60208701611f86565b935060408601356001600160401b038082111561252757600080fd5b61253389838a01612099565b9450606088013591508082111561254957600080fd5b61255589838a01612099565b9350608088013591508082111561235f57600080fd5b6000806000806060858703121561258157600080fd5b61258a85611f86565b93506020850135925060408501356001600160401b038111156123ba57600080fd5b600080604083850312156125bf57600080fd5b6125c883611f86565b946020939093013593505050565b600080600080600060a086880312156125ee57600080fd5b6125f786611f86565b945061260560208701611f86565b9350604086013592506060860135915060808601356001600160401b0381111561262e57600080fd5b61236c88828901611e51565b60006020828403121561264c57600080fd5b61100e82611f86565b8183823760009101908152919050565b600181811c9082168061267957607f821691505b60208210810361269957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156126c7576126c761269f565b500390565b60208082526021908201527f476f7665726e6f723a20696e76616c69642070726f706f73616c206c656e67746040820152600d60fb1b606082015260800190565b60006001600160401b0380831681851680830382111561272f5761272f61269f565b01949350505050565b600081518084526020808501945080840160005b838110156127715781516001600160a01b03168752958201959082019060010161274c565b509495945050505050565b600081518084526020808501945080840160005b8381101561277157815187529582019590820190600101612790565b6000815180845260208085019450848260051b860182860160005b858110156127f15783830389526127df838351611f47565b988501989250908401906001016127c7565b5090979650505050505050565b60006101208b8352602060018060a01b038c16818501528160408501526128278285018c612738565b9150838203606085015261283b828b61277c565b915083820360808501528189518084528284019150828160051b850101838c0160005b8381101561288c57601f1987840301855261287a838351611f47565b9486019492509085019060010161285e565b505086810360a08801526128a0818c6127ac565b9450505050506128bb60c08401876001600160401b03169052565b6001600160401b03851660e08401528281036101008401526128dd8185611f47565b9c9b505050505050505050505050565b6080815260006129006080830187612738565b8281036020840152612912818761277c565b9050828103604084015261292681866127ac565b91505082606083015295945050505050565b84815260ff84166020820152826040820152608060608201526000610d236080830184611f47565b85815260ff8516602082015283604082015260a06060820152600061298860a0830185611f47565b828103608084015261299a8185611f47565b98975050505050505050565b634e487b7160e01b600052603260045260246000fd5b6000600182016129ce576129ce61269f565b5060010190565b600082516129e7818460208701611f17565b9190910192915050565b60008219821115612a0457612a0461269f565b500190565b600060208284031215612a1b57600080fd5b505191905056fe476f7665726e6f723a2072656c617920726576657274656420776974686f7574206d657373616765476f7665726e6f723a2063616c6c20726576657274656420776974686f7574206d657373616765a26469706673582212204038f89b67c43871e0a0898e44b788093c5f87e41608f71fdb56aac2794c97ab64736f6c634300080d0033",
  "deployedBytecode": "0x6080604052600436106102085760003560e01c80637b3c71d311610118578063c59057e4116100a0578063eb9019d41161006f578063eb9019d4146106b4578063f23a6e61146106d4578063f2fde38b14610700578063f8ce560a14610720578063fc0c546a1461074157600080fd5b8063c59057e4146105fa578063d4a8dd981461061a578063dd4e2ba51461063a578063deaaa7cc1461068057600080fd5b80639a802a6d116100e75780639a802a6d14610567578063b58131b014610587578063bc197c811461059b578063c01f9e37146105c7578063c28bc2fa146105e757600080fd5b80637b3c71d3146104d55780637d5e81e2146104f55780638d73b031146105155780638da5cb5b1461053557600080fd5b80633932abb11161019b578063544ffc9c1161016a578063544ffc9c1461040157806354fd4d501461045657806356781388146104805780635f398a14146104a0578063715018a6146104c057600080fd5b80633932abb1146103565780633bccf4fd1461036a5780633e4f49e61461038a57806343859632146103b757600080fd5b8063150b7a02116101d7578063150b7a02146102ab5780632656227d146102ef5780632d63f693146103025780632fe3e2611461032257600080fd5b806301ffc9a71461021657806302a251a31461024b578063034201811461026957806306fdde031461028957600080fd5b3661021157005b005b600080fd5b34801561022257600080fd5b50610236610231366004611d2c565b610775565b60405190151581526020015b60405180910390f35b34801561025757600080fd5b50601e5b604051908152602001610242565b34801561027557600080fd5b5061025b610284366004611e71565b6107e2565b34801561029557600080fd5b5061029e6108da565b6040516102429190611f73565b3480156102b757600080fd5b506102d66102c6366004611f9d565b630a85bd0160e11b949350505050565b6040516001600160e01b03199091168152602001610242565b61025b6102fd366004612173565b61096c565b34801561030e57600080fd5b5061025b61031d366004612202565b610a98565b34801561032e57600080fd5b5061025b7fb3b3f3b703cd84ce352197dcff232b1b5d3cfb2025ce47cf04742d0651f1af8881565b34801561036257600080fd5b50600961025b565b34801561037657600080fd5b5061025b61038536600461221b565b610acf565b34801561039657600080fd5b506103aa6103a5366004612202565b610b45565b604051610242919061227f565b3480156103c357600080fd5b506102366103d23660046122a7565b60008281526004602090815260408083206001600160a01b038516845260030190915290205460ff1692915050565b34801561040d57600080fd5b5061043b61041c366004612202565b6000908152600460205260409020805460018201546002909201549092565b60408051938452602084019290925290820152606001610242565b34801561046257600080fd5b506040805180820190915260018152603160f81b602082015261029e565b34801561048c57600080fd5b5061025b61049b3660046122d3565b610c54565b3480156104ac57600080fd5b5061025b6104bb3660046122f6565b610c7d565b3480156104cc57600080fd5b5061020f610cc7565b3480156104e157600080fd5b5061025b6104f0366004612379565b610cdb565b34801561050157600080fd5b5061025b6105103660046123d2565b610d2d565b34801561052157600080fd5b50610236610530366004612202565b610fe2565b34801561054157600080fd5b506005546001600160a01b03165b6040516001600160a01b039091168152602001610242565b34801561057357600080fd5b5061025b610582366004612486565b610ffe565b34801561059357600080fd5b50600061025b565b3480156105a757600080fd5b506102d66105b63660046124dc565b63bc197c8160e01b95945050505050565b3480156105d357600080fd5b5061025b6105e2366004612202565b611015565b61020f6105f536600461256b565b611044565b34801561060657600080fd5b5061025b610615366004612173565b61113b565b34801561062657600080fd5b50610236610635366004612202565b611175565b34801561064657600080fd5b506040805180820190915260208082527f737570706f72743d627261766f2671756f72756d3d666f722c6162737461696e9082015261029e565b34801561068c57600080fd5b5061025b7f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f81565b3480156106c057600080fd5b5061025b6106cf3660046125ac565b611180565b3480156106e057600080fd5b506102d66106ef3660046125d6565b63f23a6e6160e01b95945050505050565b34801561070c57600080fd5b5061020f61071b36600461263a565b6111a1565b34801561072c57600080fd5b5061025b61073b366004612202565b50600290565b34801561074d57600080fd5b5061054f7f000000000000000000000000000000000000000000000000000000000000000081565b60006001600160e01b0319821663bf26d89760e01b14806107a657506001600160e01b031982166379dd796f60e01b145b806107c157506001600160e01b03198216630271189760e51b145b806107dc57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60008061088661087e7fb3b3f3b703cd84ce352197dcff232b1b5d3cfb2025ce47cf04742d0651f1af888c8c8c8c60405161081e929190612655565b60405180910390208b80519060200120604051602001610863959493929190948552602085019390935260ff9190911660408401526060830152608082015260a00190565b6040516020818303038152906040528051906020012061121a565b868686611268565b90506108cc8a828b8b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508d9250611286915050565b9a9950505050505050505050565b6060600080546108e990612665565b80601f016020809104026020016040519081016040528092919081815260200182805461091590612665565b80156109625780601f1061093757610100808354040283529160200191610962565b820191906000526020600020905b81548152906001019060200180831161094557829003601f168201915b5050505050905090565b60008061097b8686868661113b565b9050600061098882610b45565b9050600481600781111561099e5761099e612269565b14806109bb575060058160078111156109b9576109b9612269565b145b610a165760405162461bcd60e51b815260206004820152602160248201527f476f7665726e6f723a2070726f706f73616c206e6f74207375636365737366756044820152601b60fa1b60648201526084015b60405180910390fd5b600082815260016020818152604092839020600201805460ff191690921790915590518381527f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f910160405180910390a1610a7482888888886113eb565b610a818288888888611478565b610a8e82888888886113eb565b5095945050505050565b60008181526001602090815260408083208151928301909152546001600160401b0316908190525b6001600160401b031692915050565b604080517f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f602082015290810186905260ff851660608201526000908190610b1d9061087e90608001610863565b9050610b3a8782886040518060200160405280600081525061156e565b979650505050505050565b6000818152600160205260408120600281015460ff1615610b695750600792915050565b6002810154610100900460ff1615610b845750600292915050565b6000610b8f84610a98565b905080600003610be15760405162461bcd60e51b815260206004820152601d60248201527f476f7665726e6f723a20756e6b6e6f776e2070726f706f73616c2069640000006044820152606401610a0d565b438110610bf2575060009392505050565b6000610bfd85611015565b9050438110610c1157506001949350505050565b610c1a8561159a565b8015610c39575060008581526004602052604090208054600190910154115b15610c4957506004949350505050565b506003949350505050565b600080339050610c758482856040518060200160405280600081525061156e565b949350505050565b600080339050610b3a87828888888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508a9250611286915050565b610ccf6115d1565b610cd9600061162b565b565b600080339050610d2386828787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061156e92505050565b9695505050505050565b600080610d3f336106cf6001436126b5565b1015610da75760405162461bcd60e51b815260206004820152603160248201527f476f7665726e6f723a2070726f706f73657220766f7465732062656c6f7720706044820152701c9bdc1bdcd85b081d1a1c995cda1bdb19607a1b6064820152608401610a0d565b6000610dbc868686868051906020012061113b565b90508451865114610ddf5760405162461bcd60e51b8152600401610a0d906126cc565b8351865114610e005760405162461bcd60e51b8152600401610a0d906126cc565b6000865111610e515760405162461bcd60e51b815260206004820152601860248201527f476f7665726e6f723a20656d7074792070726f706f73616c00000000000000006044820152606401610a0d565b600081815260016020908152604091829020825191820190925281546001600160401b03169081905215610ed15760405162461bcd60e51b815260206004820152602160248201527f476f7665726e6f723a2070726f706f73616c20616c72656164792065786973746044820152607360f81b6064820152608401610a0d565b6000610edd600961167d565b610ee64361167d565b610ef0919061270d565b90506000610efe601e61167d565b610f08908361270d565b835467ffffffffffffffff19166001600160401b038416178455905060018301805467ffffffffffffffff19166001600160401b0383161790557f7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e084338b8b8d516001600160401b03811115610f8057610f80611db4565b604051908082528060200260200182016040528015610fb357816020015b6060815260200190600190039081610f9e5790505b508c88888e604051610fcd999897969594939291906127fe565b60405180910390a15091979650505050505050565b60008181526004602052604081208054600190910154116107dc565b600061100b8484846116e9565b90505b9392505050565b60008181526001602081815260408084208151928301909152909101546001600160401b031690819052610ac0565b3330146110935760405162461bcd60e51b815260206004820152601860248201527f476f7665726e6f723a206f6e6c79476f7665726e616e636500000000000000006044820152606401610a0d565b6110aa565b806110a3600261177f565b0361109857505b600080856001600160a01b03168585856040516110c8929190612655565b60006040518083038185875af1925050503d8060008114611105576040519150601f19603f3d011682016040523d82523d6000602084013e61110a565b606091505b50915091506111328282604051806060016040528060288152602001612a23602891396117fe565b50505050505050565b60008484848460405160200161115494939291906128ed565b60408051601f19818403018152919052805160209091012095945050505050565b60006107dc8261159a565b600061100e838361119c60408051602081019091526000815290565b6116e9565b6111a96115d1565b6001600160a01b03811661120e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610a0d565b6112178161162b565b50565b60006107dc611227611817565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006112798787878761193e565b91509150610a8e81611a02565b60008581526001602081905260408220906112a088610b45565b60078111156112b1576112b1612269565b1461130a5760405162461bcd60e51b815260206004820152602360248201527f476f7665726e6f723a20766f7465206e6f742063757272656e746c792061637460448201526269766560e81b6064820152608401610a0d565b604080516020810190915281546001600160401b031690819052600090611333908890866116e9565b90506113428888888488611b4c565b835160000361139757866001600160a01b03167fb8e138887d0aa13bab447e82de9d5c1777041ecd21ca36ba824ff1e6c07ddda48988848960405161138a9493929190612938565b60405180910390a2610b3a565b866001600160a01b03167fe2babfbac5889a709b63bb7f598b324e08bc5a4fb9ec647fb3cbc9ec07eb871289888489896040516113d8959493929190612960565b60405180910390a2979650505050505050565b611471565b845181101561146f57306001600160a01b0316858281518110611415576114156129a6565b60200260200101516001600160a01b03160361145f5761145f838281518110611440576114406129a6565b6020026020010151805190602001206002611cc690919063ffffffff16565b611468816129bc565b90506113f0565b505b5050505050565b6000604051806060016040528060278152602001612a4b60279139905060005b8551811015611132576000808783815181106114b6576114b66129a6565b60200260200101516001600160a01b03168784815181106114d9576114d96129a6565b60200260200101518785815181106114f3576114f36129a6565b602002602001015160405161150891906129d5565b60006040518083038185875af1925050503d8060008114611545576040519150601f19603f3d011682016040523d82523d6000602084013e61154a565b606091505b509150915061155a8282866117fe565b50505080611567906129bc565b9050611498565b60006115918585858561158c60408051602081019091526000815290565b611286565b95945050505050565b6000818152600460205260408120600281015460018201546115bc91906129f1565b6115c861073b85610a98565b11159392505050565b6005546001600160a01b03163314610cd95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610a0d565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006001600160401b038211156116e55760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203660448201526534206269747360d01b6064820152608401610a0d565b5090565b604051630748d63560e31b81526001600160a01b038481166004830152602482018490526000917f000000000000000000000000000000000000000000000000000000000000000090911690633a46b1a890604401602060405180830381865afa15801561175b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100b9190612a09565b600061179a8254600f81810b600160801b909204900b131590565b156117b857604051631ed9509560e11b815260040160405180910390fd5b508054600f0b6000818152600180840160205260408220805492905583546fffffffffffffffffffffffffffffffff191692016001600160801b03169190911790915590565b6060831561180d57508161100e565b61100e8383611d02565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561187057507f000000000000000000000000000000000000000000000000000000000000000046145b1561189a57507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561197557506000905060036119f9565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156119c9573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166119f2576000600192509250506119f9565b9150600090505b94509492505050565b6000816004811115611a1657611a16612269565b03611a1e5750565b6001816004811115611a3257611a32612269565b03611a7f5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610a0d565b6002816004811115611a9357611a93612269565b03611ae05760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610a0d565b6003816004811115611af457611af4612269565b036112175760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610a0d565b60008581526004602090815260408083206001600160a01b0388168452600381019092529091205460ff1615611bd45760405162461bcd60e51b815260206004820152602760248201527f476f7665726e6f72566f74696e6753696d706c653a20766f746520616c726561604482015266191e4818d85cdd60ca1b6064820152608401610a0d565b6001600160a01b03851660009081526003820160205260409020805460ff1916600117905560ff8416611c205782816000016000828254611c1591906129f1565b9091555061146f9050565b60001960ff851601611c405782816001016000828254611c1591906129f1565b60011960ff851601611c605782816002016000828254611c1591906129f1565b60405162461bcd60e51b815260206004820152603560248201527f476f7665726e6f72566f74696e6753696d706c653a20696e76616c69642076616044820152746c756520666f7220656e756d20566f74655479706560581b6064820152608401610a0d565b8154600160801b90819004600f0b6000818152600180860160205260409091209390935583546001600160801b03908116939091011602179055565b815115611d125781518083602001fd5b8060405162461bcd60e51b8152600401610a0d9190611f73565b600060208284031215611d3e57600080fd5b81356001600160e01b03198116811461100e57600080fd5b803560ff81168114611d6757600080fd5b919050565b60008083601f840112611d7e57600080fd5b5081356001600160401b03811115611d9557600080fd5b602083019150836020828501011115611dad57600080fd5b9250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715611df257611df2611db4565b604052919050565b60006001600160401b03831115611e1357611e13611db4565b611e26601f8401601f1916602001611dca565b9050828152838383011115611e3a57600080fd5b828260208301376000602084830101529392505050565b600082601f830112611e6257600080fd5b61100e83833560208501611dfa565b60008060008060008060008060e0898b031215611e8d57600080fd5b88359750611e9d60208a01611d56565b965060408901356001600160401b0380821115611eb957600080fd5b611ec58c838d01611d6c565b909850965060608b0135915080821115611ede57600080fd5b50611eeb8b828c01611e51565b945050611efa60808a01611d56565b925060a0890135915060c089013590509295985092959890939650565b60005b83811015611f32578181015183820152602001611f1a565b83811115611f41576000848401525b50505050565b60008151808452611f5f816020860160208601611f17565b601f01601f19169290920160200192915050565b60208152600061100e6020830184611f47565b80356001600160a01b0381168114611d6757600080fd5b60008060008060808587031215611fb357600080fd5b611fbc85611f86565b9350611fca60208601611f86565b92506040850135915060608501356001600160401b03811115611fec57600080fd5b611ff887828801611e51565b91505092959194509250565b60006001600160401b0382111561201d5761201d611db4565b5060051b60200190565b600082601f83011261203857600080fd5b8135602061204d61204883612004565b611dca565b82815260059290921b8401810191818101908684111561206c57600080fd5b8286015b8481101561208e5761208181611f86565b8352918301918301612070565b509695505050505050565b600082601f8301126120aa57600080fd5b813560206120ba61204883612004565b82815260059290921b840181019181810190868411156120d957600080fd5b8286015b8481101561208e57803583529183019183016120dd565b600082601f83011261210557600080fd5b8135602061211561204883612004565b82815260059290921b8401810191818101908684111561213457600080fd5b8286015b8481101561208e5780356001600160401b038111156121575760008081fd5b6121658986838b0101611e51565b845250918301918301612138565b6000806000806080858703121561218957600080fd5b84356001600160401b03808211156121a057600080fd5b6121ac88838901612027565b955060208701359150808211156121c257600080fd5b6121ce88838901612099565b945060408701359150808211156121e457600080fd5b506121f1878288016120f4565b949793965093946060013593505050565b60006020828403121561221457600080fd5b5035919050565b600080600080600060a0868803121561223357600080fd5b8535945061224360208701611d56565b935061225160408701611d56565b94979396509394606081013594506080013592915050565b634e487b7160e01b600052602160045260246000fd5b60208101600883106122a157634e487b7160e01b600052602160045260246000fd5b91905290565b600080604083850312156122ba57600080fd5b823591506122ca60208401611f86565b90509250929050565b600080604083850312156122e657600080fd5b823591506122ca60208401611d56565b60008060008060006080868803121561230e57600080fd5b8535945061231e60208701611d56565b935060408601356001600160401b038082111561233a57600080fd5b61234689838a01611d6c565b9095509350606088013591508082111561235f57600080fd5b5061236c88828901611e51565b9150509295509295909350565b6000806000806060858703121561238f57600080fd5b8435935061239f60208601611d56565b925060408501356001600160401b038111156123ba57600080fd5b6123c687828801611d6c565b95989497509550505050565b600080600080608085870312156123e857600080fd5b84356001600160401b03808211156123ff57600080fd5b61240b88838901612027565b9550602087013591508082111561242157600080fd5b61242d88838901612099565b9450604087013591508082111561244357600080fd5b61244f888389016120f4565b9350606087013591508082111561246557600080fd5b508501601f8101871361247757600080fd5b611ff887823560208401611dfa565b60008060006060848603121561249b57600080fd5b6124a484611f86565b92506020840135915060408401356001600160401b038111156124c657600080fd5b6124d286828701611e51565b9150509250925092565b600080600080600060a086880312156124f457600080fd5b6124fd86611f86565b945061250b60208701611f86565b935060408601356001600160401b038082111561252757600080fd5b61253389838a01612099565b9450606088013591508082111561254957600080fd5b61255589838a01612099565b9350608088013591508082111561235f57600080fd5b6000806000806060858703121561258157600080fd5b61258a85611f86565b93506020850135925060408501356001600160401b038111156123ba57600080fd5b600080604083850312156125bf57600080fd5b6125c883611f86565b946020939093013593505050565b600080600080600060a086880312156125ee57600080fd5b6125f786611f86565b945061260560208701611f86565b9350604086013592506060860135915060808601356001600160401b0381111561262e57600080fd5b61236c88828901611e51565b60006020828403121561264c57600080fd5b61100e82611f86565b8183823760009101908152919050565b600181811c9082168061267957607f821691505b60208210810361269957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156126c7576126c761269f565b500390565b60208082526021908201527f476f7665726e6f723a20696e76616c69642070726f706f73616c206c656e67746040820152600d60fb1b606082015260800190565b60006001600160401b0380831681851680830382111561272f5761272f61269f565b01949350505050565b600081518084526020808501945080840160005b838110156127715781516001600160a01b03168752958201959082019060010161274c565b509495945050505050565b600081518084526020808501945080840160005b8381101561277157815187529582019590820190600101612790565b6000815180845260208085019450848260051b860182860160005b858110156127f15783830389526127df838351611f47565b988501989250908401906001016127c7565b5090979650505050505050565b60006101208b8352602060018060a01b038c16818501528160408501526128278285018c612738565b9150838203606085015261283b828b61277c565b915083820360808501528189518084528284019150828160051b850101838c0160005b8381101561288c57601f1987840301855261287a838351611f47565b9486019492509085019060010161285e565b505086810360a08801526128a0818c6127ac565b9450505050506128bb60c08401876001600160401b03169052565b6001600160401b03851660e08401528281036101008401526128dd8185611f47565b9c9b505050505050505050505050565b6080815260006129006080830187612738565b8281036020840152612912818761277c565b9050828103604084015261292681866127ac565b91505082606083015295945050505050565b84815260ff84166020820152826040820152608060608201526000610d236080830184611f47565b85815260ff8516602082015283604082015260a06060820152600061298860a0830185611f47565b828103608084015261299a8185611f47565b98975050505050505050565b634e487b7160e01b600052603260045260246000fd5b6000600182016129ce576129ce61269f565b5060010190565b600082516129e7818460208701611f17565b9190910192915050565b60008219821115612a0457612a0461269f565b500190565b600060208284031215612a1b57600080fd5b505191905056fe476f7665726e6f723a2072656c617920726576657274656420776974686f7574206d657373616765476f7665726e6f723a2063616c6c20726576657274656420776974686f7574206d657373616765a26469706673582212204038f89b67c43871e0a0898e44b788093c5f87e41608f71fdb56aac2794c97ab64736f6c634300080d0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
