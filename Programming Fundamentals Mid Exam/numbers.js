function number(arr) {
  let current = arr.split(" ").map(Number);
  let sum = 0;
  let grater = []
  for (let number of current) {
    sum += number;
  }
  average = sum / current.length;

  for (let i = 0; i < current.length; i++) {
    if (average.toFixed(2) < current[i]) {
      grater.push(current[i]);
    }
    
  }
  
  grater.sort((a, b) => b - a);
  grater.splice(5);
  

  if (grater.length <= 0) {
    console.log('No');
  } else {
  
    console.log(grater.join(' '));
  }
 
}

number("10 20 30 40 50");
console.log("___________");
number("5 2 3 4 -10 30 40 50 20 50 60 60 51");
console.log("___________");
number("1");
console.log("___________");
number("-1 -2 -3 -4 -5 -6");
