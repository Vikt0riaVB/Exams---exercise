function mountain(input){
    let recordInSec = Number(input[0]);
    let meters = Number(input[1]);
    let timeForOneMeter = Number(input[2]);

    let mustClimbFor = meters * timeForOneMeter;
    let slower = Math.floor(meters / 50 )
    let slowerSec = slower * 30;
    let allTimeWasClimb = mustClimbFor + slowerSec;
    let neededSec = allTimeWasClimb - recordInSec;

    if(allTimeWasClimb < recordInSec){
       console.log(`Yes! The new record is ${allTimeWasClimb.toFixed(2)} seconds.`) 
    }else{
        console.log(`No! He was ${neededSec.toFixed(2)} seconds slower.`) 
    }
}


mountain((["10164",
"1400",
"25"]))

console.log("-----------")

mountain((["5554.36",
"1340",
"3.23"]))

console.log("-----------")

mountain((["1377",
"389",
"3"]))