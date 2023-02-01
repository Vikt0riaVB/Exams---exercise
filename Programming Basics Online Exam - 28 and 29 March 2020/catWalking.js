function cat(input){
let walkInMin = Number(input[0]);
let walksCount = Number(input[1]);
let calories  = Number(input[2]);

let minutesWalk = walksCount * walkInMin;
let burnedCalories = minutesWalk * 5;
let neededCaloeries = calories / 2;

if(burnedCalories >= neededCaloeries){
    console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`)
}else{
    console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`)
}

}

cat((["30",
"3",
"600"]))

console.log("-----------")

cat((["15",
"2",
"500"]))