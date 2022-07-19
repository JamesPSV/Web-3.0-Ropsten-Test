require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      accounts: [ '7e52ffaf85098f6ca673df73a7e614febd7a50351da813810aa377bbd257d66f' ]
    }
  }
}