function movieProfit(input){
    let name = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let priceOfTicket = Number(input[3]);
    let percentage = Number(input[4]);

    let priceForDay = tickets * priceOfTicket;
    let profit = days * priceForDay;
    let percentageFromProfit = (profit * percentage) / 100;
    let profitFromMovie = profit - percentageFromProfit;

    console.log(`The profit from the movie ${name} is ${profitFromMovie.toFixed(2)} lv.`);
    
}
movieProfit((["The Programmer",
"20",
"500",
"7.50",
"7"]))