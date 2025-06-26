//APIhopper by Sebastian Schneiderbauer aka HerrKleiderbauer
import dotenv from 'dotenv';
dotenv.config();

var apikeys
var APIkeysloaded = false

export function loadAPIkeys(){
    apikeys = []
    apikeys.push(["marketstack","status","200", process.env.MARKETSTACK_API_KEY, process.env.MARKETSTACK_API_KEY_REAL])
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

    if (index >= apikeys.length){
        return "There is no APIkeyCollection with index: " + index
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

    if (index >= apikeys.length){
        return "There is no APIkeyCollection with index: " + index
    }

    if (typeof(call) != "string"){
        return "\"call\" parameter is not of the right type (needs a string). Provided: " + typeof(index)
    }

    //initialize the checkvariables, we assume they are correct
    var checkField = apikeys[index][1]
    var checkValue = apikeys[index][2]

    var keys = apikeys[index].splice(3) //remove api name entry, checkfield and checkvalue
    var index = 0
    var result
    var response = null
    var callparts = call.split("APIKEY")

    while (response != checkValue && index < keys.length){
        result = await fetch(callparts[0] + keys[index] + callparts[1])
        response = (result[checkField]).toString()
        console.log(response === checkValue)
        index += 1
    }
    
    if (response === checkValue){
        return result
    }
    else{
        return "no APIkey returned a valid response"
    }
}