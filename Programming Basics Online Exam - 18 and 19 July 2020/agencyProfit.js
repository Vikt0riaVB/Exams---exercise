function agency(input){
    let nameOfFlight = input[0];
    let ticketAdults = Number(input[1]);
    let ticketChild = Number(input[2]);
    let priceOfTicket = Number(input[3]);
    let tax = Number(input[4]);

    let priceForKid = priceOfTicket - (priceOfTicket * 0.70);
    let priceForAdult = priceOfTicket + tax;
    let kidTicketAndTax = priceForKid + tax;
    let allPrice = (ticketChild * kidTicketAndTax) + (ticketAdults * priceForAdult);
    let profit = allPrice * 0.20;

    console.log(`The profit of your agency from ${nameOfFlight} tickets is ${profit.toFixed(2)} lv.`)

}
agency((["WizzAir",
"15",
"5",
"120",
"40"]))