function puppy(input){
    let foodInGrams = Number(input[0]) * 1000;
    let index = 1;
    let allFood = 0;
    

    while(input[index] !== "Adopted"){ 
       
        let food = input[index];
        allFood += Number(food);
    
        index++;
    }

    if(allFood <= foodInGrams){
       console.log(`Food is enough! Leftovers: ${foodInGrams - allFood} grams.`)
    }else{
        console.log(`Food is not enough. You need ${allFood - foodInGrams} grams more.`)
        
    }
    

   

}

puppy((["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"]))
