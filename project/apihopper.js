//APIhopper by Sebastian Schneiderbauer aka HerrKleiderbauer
var apikeys

export function loadAPIkeys(){
    apikeys = []
    apikeys.push(["test1","1","2"])
    apikeys.push(["test2","1","2"])
}

export function callAPI(index,call){
    // handle error cases
    if (typeof(index) != "number"){
        return "\"index\" parameter is not of the right type (needs a number). Provided: " + typeof(index)
    }

    if (index < 0){
        return "\"index\" parameter needs to be greater than 0. Provided: " + index
    }

    if (typeof(call) != "string"){
        return "\"call\" parameter is not of the right type (needs a string). Provided: " + typeof(index)
    }

    var keys = apikeys[index].splice(1)
    console.log(keys)   
}