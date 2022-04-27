/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RibusToken, RibusTokenInterface } from "../RibusToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "wallets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "percentages",
        type: "uint256[]",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "supply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526311e1a3006006553480156200001957600080fd5b5060405162002d7c38038062002d7c83398181016040528101906200003f9190620003ec565b6040518060400160405280600b81526020017f526962757320546f6b656e0000000000000000000000000000000000000000008152506040518060400160405280600381526020017f52494200000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000c392919062000325565b508060049080519060200190620000dc92919062000325565b505050620000ff620000f36200011760201b60201c565b6200011f60201b60201c565b6200011081620001e560201b60201c565b50620005e6565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620001f56200011760201b60201c565b73ffffffffffffffffffffffffffffffffffffffff166200021b620002fb60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff161462000274576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200026b9062000488565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620002e7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002de9062000466565b60405180910390fd5b620002f8816200011f60201b60201c565b50565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b8280546200033390620004ef565b90600052602060002090601f016020900481019282620003575760008555620003a3565b82601f106200037257805160ff1916838001178555620003a3565b82800160010185558215620003a3579182015b82811115620003a257825182559160200191906001019062000385565b5b509050620003b29190620003b6565b5090565b5b80821115620003d1576000816000905550600101620003b7565b5090565b600081519050620003e681620005cc565b92915050565b600060208284031215620003ff57600080fd5b60006200040f84828501620003d5565b91505092915050565b600062000427602683620004aa565b9150620004348262000554565b604082019050919050565b60006200044e602083620004aa565b91506200045b82620005a3565b602082019050919050565b60006020820190508181036000830152620004818162000418565b9050919050565b60006020820190508181036000830152620004a3816200043f565b9050919050565b600082825260208201905092915050565b6000620004c882620004cf565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060028204905060018216806200050857607f821691505b602082108114156200051f576200051e62000525565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b620005d781620004bb565b8114620005e357600080fd5b50565b61278680620005f66000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806370a08231116100a257806395d89b411161007157806395d89b41146102cf578063a457c2d7146102ed578063a9059cbb1461031d578063dd62ed3e1461034d578063f2fde38b1461037d57610116565b806370a082311461025b578063715018a61461028b57806379cc6790146102955780638da5cb5b146102b157610116565b806323b872dd116100e957806323b872dd146101a5578063313ce567146101d5578063371aa158146101f3578063395093511461020f57806342966c681461023f57610116565b8063047fc9aa1461011b57806306fdde0314610139578063095ea7b31461015757806318160ddd14610187575b600080fd5b610123610399565b6040516101309190611f0b565b60405180910390f35b61014161039f565b60405161014e9190611ce9565b60405180910390f35b610171600480360381019061016c919061193d565b610431565b60405161017e9190611cce565b60405180910390f35b61018f610454565b60405161019c9190611f0b565b60405180910390f35b6101bf60048036038101906101ba91906118ee565b61045e565b6040516101cc9190611cce565b60405180910390f35b6101dd61048d565b6040516101ea9190611f26565b60405180910390f35b61020d60048036038101906102089190611979565b610496565b005b6102296004803603810190610224919061193d565b6106c7565b6040516102369190611cce565b60405180910390f35b610259600480360381019061025491906119e5565b610771565b005b61027560048036038101906102709190611889565b610785565b6040516102829190611f0b565b60405180910390f35b6102936107cd565b005b6102af60048036038101906102aa919061193d565b610855565b005b6102b9610875565b6040516102c69190611cb3565b60405180910390f35b6102d761089f565b6040516102e49190611ce9565b60405180910390f35b6103076004803603810190610302919061193d565b610931565b6040516103149190611cce565b60405180910390f35b6103376004803603810190610332919061193d565b610a1b565b6040516103449190611cce565b60405180910390f35b610367600480360381019061036291906118b2565b610a3e565b6040516103749190611f0b565b60405180910390f35b61039760048036038101906103929190611889565b610ac5565b005b60065481565b6060600380546103ae90612177565b80601f01602080910402602001604051908101604052809291908181526020018280546103da90612177565b80156104275780601f106103fc57610100808354040283529160200191610427565b820191906000526020600020905b81548152906001019060200180831161040a57829003601f168201915b5050505050905090565b60008061043c610bbd565b9050610449818585610bc5565b600191505092915050565b6000600254905090565b600080610469610bbd565b9050610476858285610d90565b610481858585610e1c565b60019150509392505050565b60006012905090565b600560159054906101000a900460ff166104c057600560149054906101000a900460ff16156104c9565b6104c861109d565b5b610508576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ff90611deb565b60405180910390fd5b6000600560159054906101000a900460ff16159050801561055a576001600560156101000a81548160ff0219169083151502179055506001600560146101000a81548160ff0219169083151502179055505b610562610bbd565b73ffffffffffffffffffffffffffffffffffffffff16610580610875565b73ffffffffffffffffffffffffffffffffffffffff16146105d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105cd90611e0b565b60405180910390fd5b6000805b83518110156106445783818151811061061c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518261062f9190611fda565b9150808061063c906121da565b9150506105da565b50825184511480156106565750606481145b610695576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068c90611e2b565b60405180910390fd5b61069f84846110ae565b5080156106c2576000600560156101000a81548160ff0219169083151502179055505b505050565b6000806106d2610bbd565b9050610766818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546107619190611fda565b610bc5565b600191505092915050565b61078261077c610bbd565b826112dd565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6107d5610bbd565b73ffffffffffffffffffffffffffffffffffffffff166107f3610875565b73ffffffffffffffffffffffffffffffffffffffff1614610849576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084090611e0b565b60405180910390fd5b61085360006114b4565b565b61086782610861610bbd565b83610d90565b61087182826112dd565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546108ae90612177565b80601f01602080910402602001604051908101604052809291908181526020018280546108da90612177565b80156109275780601f106108fc57610100808354040283529160200191610927565b820191906000526020600020905b81548152906001019060200180831161090a57829003601f168201915b5050505050905090565b60008061093c610bbd565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015610a02576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f990611ecb565b60405180910390fd5b610a0f8286868403610bc5565b60019250505092915050565b600080610a26610bbd565b9050610a33818585610e1c565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610acd610bbd565b73ffffffffffffffffffffffffffffffffffffffff16610aeb610875565b73ffffffffffffffffffffffffffffffffffffffff1614610b41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3890611e0b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610bb1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba890611d4b565b60405180910390fd5b610bba816114b4565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c35576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2c90611e8b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ca5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9c90611d6b565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610d839190611f0b565b60405180910390a3505050565b6000610d9c8484610a3e565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610e165781811015610e08576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dff90611d8b565b60405180910390fd5b610e158484848403610bc5565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8390611e6b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610efc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef390611d0b565b60405180910390fd5b610f0783838361157a565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610f8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8490611dab565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110209190611fda565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110849190611f0b565b60405180910390a361109784848461157f565b50505050565b60006110a830611584565b15905090565b6110b6610bbd565b73ffffffffffffffffffffffffffffffffffffffff166110d4610875565b73ffffffffffffffffffffffffffffffffffffffff161461112a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112190611e0b565b60405180910390fd5b600560159054906101000a900460ff16611179576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117090611eab565b60405180910390fd5b60005b82518110156112d85760008382815181106111c0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015190506000838381518110611205577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101519050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415801561124d575060008114155b61128c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128390611dcb565b60405180910390fd5b60006112b660646112a8846006546115a790919063ffffffff16565b6115bd90919063ffffffff16565b90506112c283826115d3565b50505080806112d0906121da565b91505061117c565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561134d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134490611e4b565b60405180910390fd5b6113598260008361157a565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156113df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113d690611d2b565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816002600082825461143691906120bb565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161149b9190611f0b565b60405180910390a36114af8360008461157f565b505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600081836115b59190612061565b905092915050565b600081836115cb9190612030565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611643576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161163a90611eeb565b60405180910390fd5b61164f6000838361157a565b80600260008282546116619190611fda565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546116b69190611fda565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161171b9190611f0b565b60405180910390a361172f6000838361157f565b5050565b600061174661174184611f66565b611f41565b9050808382526020820190508285602086028201111561176557600080fd5b60005b85811015611795578161177b888261180b565b845260208401935060208301925050600181019050611768565b5050509392505050565b60006117b26117ad84611f92565b611f41565b905080838252602082019050828560208602820111156117d157600080fd5b60005b8581101561180157816117e78882611874565b8452602084019350602083019250506001810190506117d4565b5050509392505050565b60008135905061181a81612722565b92915050565b600082601f83011261183157600080fd5b8135611841848260208601611733565b91505092915050565b600082601f83011261185b57600080fd5b813561186b84826020860161179f565b91505092915050565b60008135905061188381612739565b92915050565b60006020828403121561189b57600080fd5b60006118a98482850161180b565b91505092915050565b600080604083850312156118c557600080fd5b60006118d38582860161180b565b92505060206118e48582860161180b565b9150509250929050565b60008060006060848603121561190357600080fd5b60006119118682870161180b565b93505060206119228682870161180b565b925050604061193386828701611874565b9150509250925092565b6000806040838503121561195057600080fd5b600061195e8582860161180b565b925050602061196f85828601611874565b9150509250929050565b6000806040838503121561198c57600080fd5b600083013567ffffffffffffffff8111156119a657600080fd5b6119b285828601611820565b925050602083013567ffffffffffffffff8111156119cf57600080fd5b6119db8582860161184a565b9150509250929050565b6000602082840312156119f757600080fd5b6000611a0584828501611874565b91505092915050565b611a17816120ef565b82525050565b611a2681612101565b82525050565b6000611a3782611fbe565b611a418185611fc9565b9350611a51818560208601612144565b611a5a816122df565b840191505092915050565b6000611a72602383611fc9565b9150611a7d826122f0565b604082019050919050565b6000611a95602283611fc9565b9150611aa08261233f565b604082019050919050565b6000611ab8602683611fc9565b9150611ac38261238e565b604082019050919050565b6000611adb602283611fc9565b9150611ae6826123dd565b604082019050919050565b6000611afe601d83611fc9565b9150611b098261242c565b602082019050919050565b6000611b21602683611fc9565b9150611b2c82612455565b604082019050919050565b6000611b44601283611fc9565b9150611b4f826124a4565b602082019050919050565b6000611b67602e83611fc9565b9150611b72826124cd565b604082019050919050565b6000611b8a602083611fc9565b9150611b958261251c565b602082019050919050565b6000611bad600d83611fc9565b9150611bb882612545565b602082019050919050565b6000611bd0602183611fc9565b9150611bdb8261256e565b604082019050919050565b6000611bf3602583611fc9565b9150611bfe826125bd565b604082019050919050565b6000611c16602483611fc9565b9150611c218261260c565b604082019050919050565b6000611c39602b83611fc9565b9150611c448261265b565b604082019050919050565b6000611c5c602583611fc9565b9150611c67826126aa565b604082019050919050565b6000611c7f601f83611fc9565b9150611c8a826126f9565b602082019050919050565b611c9e8161212d565b82525050565b611cad81612137565b82525050565b6000602082019050611cc86000830184611a0e565b92915050565b6000602082019050611ce36000830184611a1d565b92915050565b60006020820190508181036000830152611d038184611a2c565b905092915050565b60006020820190508181036000830152611d2481611a65565b9050919050565b60006020820190508181036000830152611d4481611a88565b9050919050565b60006020820190508181036000830152611d6481611aab565b9050919050565b60006020820190508181036000830152611d8481611ace565b9050919050565b60006020820190508181036000830152611da481611af1565b9050919050565b60006020820190508181036000830152611dc481611b14565b9050919050565b60006020820190508181036000830152611de481611b37565b9050919050565b60006020820190508181036000830152611e0481611b5a565b9050919050565b60006020820190508181036000830152611e2481611b7d565b9050919050565b60006020820190508181036000830152611e4481611ba0565b9050919050565b60006020820190508181036000830152611e6481611bc3565b9050919050565b60006020820190508181036000830152611e8481611be6565b9050919050565b60006020820190508181036000830152611ea481611c09565b9050919050565b60006020820190508181036000830152611ec481611c2c565b9050919050565b60006020820190508181036000830152611ee481611c4f565b9050919050565b60006020820190508181036000830152611f0481611c72565b9050919050565b6000602082019050611f206000830184611c95565b92915050565b6000602082019050611f3b6000830184611ca4565b92915050565b6000611f4b611f5c565b9050611f5782826121a9565b919050565b6000604051905090565b600067ffffffffffffffff821115611f8157611f806122b0565b5b602082029050602081019050919050565b600067ffffffffffffffff821115611fad57611fac6122b0565b5b602082029050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000611fe58261212d565b9150611ff08361212d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561202557612024612223565b5b828201905092915050565b600061203b8261212d565b91506120468361212d565b92508261205657612055612252565b5b828204905092915050565b600061206c8261212d565b91506120778361212d565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156120b0576120af612223565b5b828202905092915050565b60006120c68261212d565b91506120d18361212d565b9250828210156120e4576120e3612223565b5b828203905092915050565b60006120fa8261210d565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015612162578082015181840152602081019050612147565b83811115612171576000848401525b50505050565b6000600282049050600182168061218f57607f821691505b602082108114156121a3576121a2612281565b5b50919050565b6121b2826122df565b810181811067ffffffffffffffff821117156121d1576121d06122b0565b5b80604052505050565b60006121e58261212d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561221857612217612223565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f496e76616c6964206974656d20696e7075740000000000000000000000000000600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f496e76616c696420696e70757400000000000000000000000000000000000000600082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61272b816120ef565b811461273657600080fd5b50565b6127428161212d565b811461274d57600080fd5b5056fea264697066735822122079b2dc73110a16d08d74b0776ae044e63f6595d14a5ce4d0bba3562f8f5edb1f64736f6c63430008040033";

export class RibusToken__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RibusToken> {
    return super.deploy(owner, overrides || {}) as Promise<RibusToken>;
  }
  getDeployTransaction(
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner, overrides || {});
  }
  attach(address: string): RibusToken {
    return super.attach(address) as RibusToken;
  }
  connect(signer: Signer): RibusToken__factory {
    return super.connect(signer) as RibusToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RibusTokenInterface {
    return new utils.Interface(_abi) as RibusTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RibusToken {
    return new Contract(address, _abi, signerOrProvider) as RibusToken;
  }
}
