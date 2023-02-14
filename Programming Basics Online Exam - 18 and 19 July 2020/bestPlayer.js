function best(input) {
  let bestPlayer = "";
  let maxGoal = 0;
  let index = 0;

  while (input[index] !== "END") {
    let name = input[index];
    let goal = Number(input[index + 1]);
    if (goal > maxGoal) {
      maxGoal = goal;
      bestPlayer = name;
    } else if (maxGoal >= 10) {
      break;
    }
    index++;
  }

  if (maxGoal >= 3) {
    console.log(`${bestPlayer} is the best player!`);
    console.log(`He has scored ${maxGoal} goals and made a hat-trick !!!`);
  } else {
    console.log(`${bestPlayer} is the best player!`);
    console.log(`He has scored ${maxGoal} goals.`);
  }
}
best(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"]);
