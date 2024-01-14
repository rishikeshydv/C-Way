'use client';

import React, { useState } from 'react';
import Web3 from 'web3';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { fetchRate } from '@/components/conversion';

export default function CryptoPay() {

  const [cryptoEqVal,setcryptoEqVal] = useState(0);

  //setting up etherium credentials
  //FROM WALLET
  const etheriumAPI = process.env['ethApi']   //this is the API to communicate with Etherium
  const etheriumPrivateKey = process.env['ethPrivateKey']   //this is sender's wallet private key for ethrium

  const network ='Mainnet';
  const node = `https://eth.getblock.io/${etheriumAPI}/${network}/`
  const web3 = new Web3(node);
   
 const getRate = async(deal:number) => {
  try {
    const jsonRes = await fetchRate();
    // const jsonRes = {"ETH":{"USD":2548.24}}
    const val = jsonRes["ETH"]["USD"];
    const finalVal = deal/val;
    setcryptoEqVal(finalVal);
    //return ();
} catch (error) {
    console.error(error);
}
  }

  return (
    <form className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>


    <div className="mb-4">

    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className='bg-red-500 rounded-lg'
        >
          Choose Package
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="p1"
        onPress={
          (e) => getRate(100)}>Package 1 : $100</DropdownItem>

        <DropdownItem key="p2"
        onPress={
          (e) => getRate(200)}>Package 2 : $200</DropdownItem>

        <DropdownItem key="p3"
        onPress={
          (e) => getRate(300)}>Package 3 : $300</DropdownItem>

      </DropdownMenu>
    </Dropdown>

    </div>

    <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Equivalent Crypto
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={cryptoEqVal}
          readOnly
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>




      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          value={cryptoEqVal}
          // onClick={}
        >
          Pay Crypto
        </button>
      </div>
    </form>

  )
}
