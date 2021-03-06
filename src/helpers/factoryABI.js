module.exports.factoryABI =
[
	{
		"constant": true,
		"inputs": [],
		"name": "getExchangeCount",
		"outputs": [
			{
				"name": "exchangeCount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_token",
				"type": "address"
			}
		],
		"name": "launchExchange",
		"outputs": [
			{
				"name": "exchange",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenList",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_token",
				"type": "address"
			}
		],
		"name": "tokenToExchangeLookup",
		"outputs": [
			{
				"name": "exchange",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_exchange",
				"type": "address"
			}
		],
		"name": "exchangeToTokenLookup",
		"outputs": [
			{
				"name": "token",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "exchange",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "token",
				"type": "address"
			}
		],
		"name": "ExchangeLaunch",
		"type": "event"
	}
]
