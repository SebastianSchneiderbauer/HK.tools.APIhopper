//APIhopper by Sebastian Schneiderbauer aka HerrKleiderbauer
import dotenv from 'dotenv';
dotenv.config();

var apikeys
var APIkeysloaded = false

export function loadAPIkeys(){
    apikeys = []
    apikeys.push(["marketstack","status","200","1338ef2824a47876d546407343ad2b5d"])
    APIkeysloaded = true
}

export function getAPIname(index){
    if (APIkeysloaded === false){
        return "APIkeys are not loaded, call \"loadAPIkeys\" first"
    }

    if (typeof(index) != "number"){
        return "\"index\" parameter is not of the right type (needs a number). Provided: " + typeof(index)
    }

    if (index < 0){
        return "\"index\" parameter needs to be greater than 0. Provided: " + index
    }

    console.log(apikeys[index][0])   
}

export async function callAPI(index,call){
    // handle error cases
    if (APIkeysloaded === false){
        return "APIkeys are not loaded, call \"loadAPIkeys\" first"
    }

    if (typeof(index) != "number"){
        return "\"index\" parameter is not of the right type (needs a number). Provided: " + typeof(index)
    }

    if (index < 0){
        return "\"index\" parameter needs to be greater than 0. Provided: " + index
    }

    if (typeof(call) != "string"){
        return "\"call\" parameter is not of the right type (needs a string). Provided: " + typeof(index)
    }

    //initialize the checkvariables, we assume they are correct
    var checkField = apikeys[index][1]
    var checkValue = apikeys[index][2]

    var keys = apikeys[index].splice(3) //remove api name entry, checkfield and checkvalue
    var index = 0

    var tempkey = process.env.MARKETSTACK_API_KEY
    var context = await fetch("http://api.marketstack.com/v1/eod?access_key="+tempkey+"&symbols=AAPL")
    console.log(context["status"].toString())   
}