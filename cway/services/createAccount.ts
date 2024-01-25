import Web3 from 'web3';
import { myWallet } from './serverWallet';
import { useSession } from "next-auth/react";
import { findUser, updateUserKey } from './database';
//setting up etherium credentials
//FROM account
// const etheriumAPI = process.env['ethApi']   //this is the API to communicate with Etherium
// const etheriumPrivateKey = process.env['ethPrivateKey']   //this is sender's wallet private key for ethrium

const network ='Mainnet';
const node = `https://eth.getblock.io/${etheriumAPI}/${network}/`
const web3 = new Web3(node);

//create a new Account and add it to the wallet
export async function createAccount() {
    const newAccount = web3.eth.accounts.create();
    myWallet.add(newAccount);
    console.log('New Account Created!')

    //write a database query to add email, name, private key to the database for transaction purposes
    const {data:session} = useSession()
    var res = await findUser(session.email);
        if (res) {
          //creating user doc on the database
          updateUserKey(profile.email,newAccount.privateKey)}
    }


