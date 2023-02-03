    function animals(input) {
        let days = Number(input.shift());
        let allFood = Number(input.shift());
        let foodEatenFromDog = 0;
        let foodEatenFromCat = 0;
        let buisc = 0;
        let couter = 0;



        for (let i = 1; i <= days; i++) {
            let foodForDog = Number(input.shift());
            foodEatenFromDog += foodForDog;
            let foodForCat = Number(input.shift());
            foodEatenFromCat += foodForCat;

            couter++; 
            if (couter % 3 === 0) {
                buisc += (foodForDog + foodForCat) * 0.1;
                
            } 

        }

        buisc = Math.round(buisc)

        console.log(`Total eaten biscuits: ${buisc}gr.`);
        console.log(`${(((foodEatenFromDog + foodEatenFromCat) / allFood) * 100).toFixed(2)}% of the food has been eaten.`);
        console.log(`${((foodEatenFromDog / (foodEatenFromDog + foodEatenFromCat)) * 100).toFixed(2)}% eaten from the dog.`);
        console.log(`${((foodEatenFromCat / (foodEatenFromDog + foodEatenFromCat)) * 100).toFixed(2)}% eaten from the cat.`);

    }
animals((["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"]))