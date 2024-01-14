import axios from 'axios';

const fetchRate = async() => {
    try{
        const apiKey = process.env['conversionKey'];
        const apiUrl = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD&api_key=${apiKey}`;
        const response = await axios.get(apiUrl);
        const conversionRates = response.data;
       //console.log(conversionRates)
        return conversionRates;
    }
catch (error){
    console.log(error);
    throw error;    
}

}

export {fetchRate};



