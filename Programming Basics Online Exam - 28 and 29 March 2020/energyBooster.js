function energy(input){
    let fruit = input[0];
    let set = input[1];
    let setsCount = Number(input[2]);
    let priceForBigSet = 0;
    let priceForSmallSet = 0;
    let priceForAllSets = 0;
    let total = 0;
    let discount = 0;


    switch (fruit) {
        case "Watermelon":
            if(set === "small"){
                priceForSmallSet = 2 * 56;
                priceForAllSets = setsCount * priceForSmallSet; 
            }else{
                priceForBigSet = 5 * 28.70;
                priceForAllSets = setsCount * priceForBigSet;
            }
            break;
        case "Mango":
            if(set === "small"){
                priceForSmallSet = 2 * 36.66; 
                priceForAllSets = setsCount * priceForSmallSet; 
            }else{
                priceForBigSet = 5 * 19.60;
                priceForAllSets = setsCount * priceForBigSet;
            }
            break;
        case "Pineapple":
            if(set === "small"){
                priceForSmallSet = 2 * 42.10; 
                priceForAllSets = setsCount * priceForSmallSet;
            }else{
                priceForBigSet = 5 * 24.80;
                priceForAllSets = setsCount * priceForBigSet;
            }
            break;
        case "Raspberry":
            if(set === "small"){
                priceForSmallSet = 2 * 20; 
                priceForAllSets = setsCount * priceForSmallSet;
            }else{
                priceForBigSet = 5 * 15.20;
                priceForAllSets = setsCount * priceForBigSet;
            }
            break;
    
    }
    
    total = priceForAllSets;
    if(priceForAllSets > 1000){
        discount = priceForAllSets * 0.5;
        total = priceForAllSets - discount;
    }else if(priceForAllSets > 400 || priceForAllSets >= 1000){
        discount = priceForAllSets * 0.15;
        total = priceForAllSets - discount;
    }

    console.log(`${total.toFixed(2)} lv.`)
}


90/100