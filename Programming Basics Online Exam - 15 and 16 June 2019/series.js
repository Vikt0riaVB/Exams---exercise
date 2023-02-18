function series(input){
    let budget = Number(input.shift());
    let serials = Number(input.shift());
    let index = 0;

    while(serials !== index){
        let name = input.shift();
        let price = Number(input.shift());

        switch (name) {
            case "Thrones":
                price = price - (price * 0.5)
            break;
            case "Lucifer":
                price = price - (price * 0.4)
            break;
            case "Protector":
                price = price - (price * 0.3)
            break;
            case "TotalDrama":
                price = price - (price * 0.2)
            break;
            case "Area":
                price = price - (price * 0.1)
            break;
        }
        budget -= price;
        index++
    }

    if(budget >= 0){
        console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`);
    }else{
        console.log(`You need ${Math.abs(budget).toFixed(2)} lv. more to buy the series!`);
        
    }

}
series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"])