const validatorAbi = [
  {
    "name": "getVersion",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [{ "type": "string" }]
  },
  {
    "name": "getBurnAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [{ "type": "address" }]
  },
  {
    "name": "getEpochDuration",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [{ "type": "uint32" }]
  },
  {
    "name": "getGenesisTime",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [{ "type": "uint128" }]
  },
  {
    "name": "getAttesters",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [{ "type": "address[]" }]
  },
  {
    "name": "status",
    "type": "function",
    "stateMutability": "view",
    "inputs": [{ "name": "depositId", "type": "uint256" }],
    "outputs": [{ "type": "string" }]
  },
  {
    "name": "owner",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [{ "type": "address" }]
  }
];
