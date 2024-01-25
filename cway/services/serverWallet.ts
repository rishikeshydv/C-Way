import Web3 from 'web3';

//TO account
const etherium2API = process.env['ethApi']   //this is the API to communicate with Etherium
const etherium2PrivateKey = process.env['ethPrivateKey']   //this is sender's wallet private key for ethrium

const network ='testnet';
const node = `https://eth.getblock.io/${etherium2API}/${network}/`
const web3 = new Web3(node);
//creating a wallet
const myWallet = new Web3.eth.accounts.wallet.create(1);

// Check if the toWallet account already exists in 'myWallet'
if (etherium2PrivateKey !== undefined) {
  const toWallet = web3.eth.accounts.privateKeyToAccount(etherium2PrivateKey)
  const existingAccount = myWallet.find((toWallet:any) => toWallet.privateKey === etherium2PrivateKey);
  //adding TO account to the wallet
if (!existingAccount) {
  //const toWallet = web3.eth.accounts.privateKeyToAccount(etherium2PrivateKey);
  // Add the account to 'myWallet'
  myWallet.add(toWallet);
  // web3.eth.accounts.wallet.add(toWallet);
  // Now you can use toWallet for further operations

} else {
  console.error('ethPrivateKey is undefined. Please check your environment variables. or The account already exists in the wallet');  
}
}

export {myWallet};