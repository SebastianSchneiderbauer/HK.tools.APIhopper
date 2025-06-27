//this will contain code to test the program
import { callAPI,addAPIkeyCollection,getAPIname } from "./apihopper.js"
import dotenv from 'dotenv';
dotenv.config();

addAPIkeyCollection(["marketstack","status","200",process.env.MARKETSTACK_API_KEY_FAKE, process.env.MARKETSTACK_API_KEY_REAL])

//get the APIkeyCollection´s name
console.log(getAPIname(0))

//call the 0´th API
var result = await callAPI(0,"http://api.marketstack.com/v1/eod?access_key=APIKEY&symbols=AAPL")

console.log(result)