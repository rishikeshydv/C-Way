import Web3 from 'web3';

//TO account
const etherium2API = process.env['ethApi']   //this is the API to communicate with Etherium
const etherium2PrivateKey = process.env['ethPrivateKey']   //this is sender's wallet private key for ethrium

const network ='Mainnet';
const node = `https://eth.getblock.io/${etheriumAPI}/${network}/`
const web3 = new Web3(node);
//creating a wallet
const myWallet = new Web3.eth.accounts.wallet.create(0);

//adding TO account to the wallet
if (etherium2PrivateKey !== undefined) {
    const toWallet = web3.eth.accounts.privateKeyToAccount(etherium2PrivateKey);
    web3.eth.accounts.wallet.add(toWallet);
    // Now you can use toWallet for further operations
  } else {
    console.error('ethPrivateKey is undefined. Please check your environment variables.');  
}

export {myWallet};