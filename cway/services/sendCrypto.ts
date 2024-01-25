import Web3 from 'web3';
import { findKey } from './database';
import { useSession } from "next-auth/react";

export async function SendCrypto(amount:number,) {

const etherium2API = process.env['ethApi']
const network ='testnet';
const node = `https://eth.getblock.io/${etherium2API}/${network}/`
const web3 = new Web3(node);

const {data:session} = useSession()
const pk = await findKey(session.email) //private key of the account you want to send the transaction from
const toAddress = process.env['toAddress'] //address you want to send the transaction to

const encoder = new TextEncoder();
const bytesOfKey: Uint8Array = encoder.encode(pk);

const params = {
    to: toAddress,
    value: Web3.utils.toHex(Web3.utils.toWei(amount, 'ether')),
    gas: Web3.utils.toHex(21000), // optional
    gasPrice: Web3.utils.toHex(20 * Math.pow(10, 9)), // optional
};

const signedTx = await web3.eth.accounts.signTransaction(params, bytesOfKey);

web3.eth.sendSignedTransaction(signedTx.rawTransaction)
.on('transactionHash', () => {
    console.log("Transaction Completed!")
})
.on('error', () => {
   console.log("Transaction Failed!")
});

}
