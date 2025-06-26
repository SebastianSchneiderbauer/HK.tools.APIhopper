//APIhopper by Sebastian Schneiderbauer aka HerrKleiderbauer
var apikeys
var APIkeysloaded = false

export function loadAPIkeys(){
    apikeys = []
    apikeys.push(["test1","1","2"])
    apikeys.push(["test2","1","2"])
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

export function callAPI(index,call){
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

    var keys = apikeys[index].splice(1) //remove api name entry
    console.log(keys)   
}