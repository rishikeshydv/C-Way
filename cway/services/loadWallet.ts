import Web3 from 'web3';
import { myWallet } from './serverWallet';
//setting up etherium credentials
//FROM account
// const etheriumAPI = process.env['ethApi']   //this is the API to communicate with Etherium
// const etheriumPrivateKey = process.env['ethPrivateKey']   //this is sender's wallet private key for ethrium

const network ='Mainnet';
const node = `https://eth.getblock.io/${etheriumAPI}/${network}/`
const web3 = new Web3(node);

//create a new Account and add it to the wallet
export const loadWallet = (password) => {
    myWallet.load(password);
    console.log('Wallet Loaded')
    
}
