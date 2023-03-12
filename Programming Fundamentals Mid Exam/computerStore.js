function store(input) {
  let price = 0;
  let customer = input.pop();
  let taxes = 0;
  let totalPrice = 0;

  for(current of input)
  {
     let currentPrice = Number(current);

      if(current > 0){
          price += currentPrice
      } else {
          console.log("Invalid price!")
          continue;
      }

  }

  if (price === 0) {
    return console.log("Invalid order!");
  }

  taxes = price * 0.2;
  totalPrice = price + taxes;

  if (customer == "special") {
    totalPrice = totalPrice - (totalPrice * 0.1);
   
  }

  console.log(`Congratulations you've just bought a new computer!`);
  console.log(`Price without taxes: ${price}$`);
  console.log(`Taxes: ${taxes.toFixed(2)}$`);
  console.log(`-----------`);
  console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}
store(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
console.log("_________");
//store(["1023", "15", "-20", "-5.50", "450", "20", "17.66", "19.30", "regular"]);
//console.log("_________");
//store(["regular"]);
console.log("_________");
