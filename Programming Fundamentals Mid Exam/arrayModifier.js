function modifier(arr) {
  let numberArr = arr.shift().split(" ");

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i].split(" ");
    let command = current[0];
    let firstIndex = Number(current[1]);
    let secondIndex = Number(current[2]);

    if (command == "swap") {
      let temp = numberArr[firstIndex];
      numberArr[firstIndex] = numberArr[secondIndex];
      numberArr[secondIndex] = temp;
    }
    if (command == "multiply") {
      numberArr[firstIndex] *= numberArr[secondIndex];
    }
    if (command == "decrease") {
      for (let index = 0; index < numberArr.length; index++) {
        numberArr[index] -= 1;
      }
    }
  }
  console.log(numberArr.join(', '));
}
modifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);

console.log("___________");
modifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
