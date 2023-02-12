function add(input){
    let priceOfBagsAbove20 = Number(input[0]);
    let kiloOfBags = Number(input[1]);
    let days = Number(input[2]);
    let countOfBags = Number(input[3]);
    let sum = 0;
    let appreciation = 0;
    let allSum = 0; 

    if(kiloOfBags < 10){
        sum = priceOfBagsAbove20 * 0.2;
    }else if(kiloOfBags <=20){
        sum = priceOfBagsAbove20 / 2;
    }else{
        sum = priceOfBagsAbove20;
    }

    if(days < 7){
        appreciation = sum * 1.4;
    }else if(days <= 30){
        appreciation = sum * 1.15;
    }else{
        appreciation = sum * 1.1;
    }

    allSum = appreciation * countOfBags;

    
    console.log(`The total price of bags is: ${allSum.toFixed(2)} lv.`)
}

add((["30",
"18",
"15",
"2"]))

console.log("____________")
add(["25.50",
"5",
"36",
"6"])

console.log("____________")
add(["63.80",
"23",
"3",
"1"])

console.log("____________")