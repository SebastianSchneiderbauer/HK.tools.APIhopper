//APIhopper by Sebastian Schneiderbauer aka HerrKleiderbauer

var apikeys = []

export function addAPIkeyCollection(keys){
    if (keys.length >= 4){
        apikeys.push(keys)
    }
}

export function getAPIname(index){
    // handle error cases
    if (apikeys.length === 0){
        return "There are no APIkeyCollections loaded right now. Use \"addAPIkeyCollection(\" to load them"
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

    return apikeys[index][0]
}

export async function callAPI(index,call){
    // handle error cases
    if (apikeys.length === 0){
        return "There are no APIkeyCollections loaded right now. Use \"addAPIkeyCollection(\" to load them"
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

    //cut apikeys to get only the needed APIkeys
    var keys = apikeys[index].slice(3) //get elements from index 3 onwards without modifying original
    
    var loopIndex = 0
    var result
    var toCheckValue = null
    var callparts = call.split("APIKEY")

    while (toCheckValue != checkValue && loopIndex < keys.length){
        result = await fetch(callparts[0] + keys[loopIndex] + callparts[1])
        toCheckValue = (result[checkField]).toString()

        loopIndex += 1 
    }

    if (toCheckValue === checkValue){
        return result
    }
    else{
        return "no APIkey returned a valid response."
    }
}