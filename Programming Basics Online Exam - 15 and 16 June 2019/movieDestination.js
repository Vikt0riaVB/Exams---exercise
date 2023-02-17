function movieDestination(input){

    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);
 
    let price = 0;
   

    if(destination === "Dubai"){
        if(season === "Winter"){
            price = 45000;
        }else if(season === "Summer"){
            price = 40000;
        }
        price = (price * days) * 0.7;
     
    }else if(destination === "Sofia"){
        if(season === "Winter"){
            price = 17000;
        }else if(season === "Summer"){
            price = 12500;
        
        }
        price = (price * days) * 1.25;
    }else if(destination === "London"){
        if(season === "Winter"){
            price = 24000;
        }else if(season === "Summer"){
            price = 20250;
        }
        price = price * days;
    }

    if(price > budget){
        console.log(`The director needs ${(price - budget).toFixed(2)} leva more!`)
    }else{
        console.log(`The budget for the movie is enough! We have ${(budget - price).toFixed(2)} leva left!`)
    }

}
movieDestination(["400000",
"Sofia",
"Winter",
"20"])
console.log("______________")

movieDestination(["1000000",
"Dubai",
"Summer",
"5"])
console.log("______________")

movieDestination(["200000",
"London",
"Summer",
"7"])