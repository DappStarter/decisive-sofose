require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remind hospital grid knee sun gate'; 
let testAccounts = [
"0x616ae308a3c424b9164c61ccfc363819729fae8d90351985d394cdf53b99b7b9",
"0x0c8e13b7ebaaf85de5e9cf76141f5db40230056c238fc605fe8a917df49f87a6",
"0x6c2fb21c94744216126beefa5800334e8ca86bad2982b2b85d8947b0f8dfdab8",
"0xf936d83a990b8bc385cf7ce31acea9953abd55882822c48011f759c960b550f2",
"0x055cb2f2dea0b96d390e945402df6a48d68d71578bcea690791542935434b044",
"0xfa83c3230a1984c52f2c93161a55d36c7e6925a8f20dc1a0dd9038c1af26eab5",
"0x13e6d9345ceb8bc2c14909b94874f8f03e14b49a8923e62098bde253cffa9b4f",
"0x5078a0a3295344bc0e724071142a163a2986fbc9716bd5b61b3ec8443d89ee3d",
"0x7ed59bb2d2e442b2dd177356ba5d6e900a71f0b3eb12fd60e6bd50298d915afc",
"0xa2915157c09ad634ba6423f7849d24008ed8fb1a82e476f95df78458ec6f3ac4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
