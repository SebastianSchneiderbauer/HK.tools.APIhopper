//this will contain code to test the program
import { callAPI,loadAPIkeys,getAPIname } from "./apihopper.js"

loadAPIkeys()
getAPIname(0)
var result = await callAPI(0,"http://api.marketstack.com/v1/eod?access_key=APIKEY&symbols=AAPL")
console.log(result)