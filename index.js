// Code your solution in this file!
//create function that takes in an array and returns the first two obejcts (anonymous)
//set const variable
let drivers = []

const returnFirstTwoDrivers = function(drivers){
return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

const selectingDrivers = function(){
    return selectingDrivers.apply(returnFirstTwoDrivers, returnLastTwoDrivers)
}


