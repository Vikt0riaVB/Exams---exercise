function bonusSystem(input) {
  let numberOfStudents = Number(input.shift());
  let numberOfLectures = Number(input.shift());
  let bonus = Number(input.shift());
  let totalBonus = 0;
  let maxBonus = 0;
  let countOfLectures = 0;

  for (let i = 0; i < input.length; i++) {
    let currentStudent = Number(input.shift());
    totalBonus = (currentStudent / numberOfLectures) * (5 + bonus);

    if (totalBonus >= maxBonus) {
      maxBonus = totalBonus;
      countOfLectures = currentStudent;
    }
  }

  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${Math.ceil(countOfLectures)} lectures.`);
}
bonusSystem([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
