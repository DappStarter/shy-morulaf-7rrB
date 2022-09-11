require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure suspect warm deny ranch coast coral light army gas'; 
let testAccounts = [
"0xd1aa300f06e4fb11c71f5e4f1ab6ca0b97a0dd98de1b989a8f594b6f82772d04",
"0x4f56aebcb14117330d398b91d216ba3676f7d056bb01030982ac14a1842555aa",
"0x31c33034092c65b06c7e754322a9df107860183e87325e50a242c080ffcb66f8",
"0x543eff6224bc150c0aba1a3f554b0ea697064ed2cafc4da53aff065053871700",
"0x2b1acc6e4586256c2cf6ab9e61847e9721d1b526bf1848b603a90e2139c16a02",
"0xd2cee9c5b194cd0fdb2dfc4f9dd03b43d2e05dcc51ac9e83ff0d32495c9cb646",
"0x3868a50987a450560fad38a70b82f9136f470bcdcb2a7cf258a9b21bf0f286cf",
"0x240b2f4621ab1747df3aa901b0d2c82326ce861b40cc060e67722c318bd70e84",
"0x6ec9cc48317c133e18c13665361af5d240d03f91f325d964169ae649ecb18127",
"0xd1f4eaabe94e2c0d6e4384206e269b6a70f2f4fbf1788f527078c29bc2d1fa7d"
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
            version: '^0.8.0'
        }
    }
};

