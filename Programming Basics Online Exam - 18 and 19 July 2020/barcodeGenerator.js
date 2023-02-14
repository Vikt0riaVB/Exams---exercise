function generator(input) {
    let first = input[0];
    let second = input[1];
    let firstStart = Number(first[0]);
    let secondStart = Number(first[1]);
    let thirdStart = Number(first[2]);
    let fourthStart = Number(first[3]);
    let firstEnd = Number(second[0]);
    let secondEnd = Number(second[1]);
    let thirdEnd = Number(second[2]);
    let fourthEnd = Number(second[3]);
    let answer = " ";

    for (let i = firstStart; i <= firstEnd; i++) {
        if (i % 2 !== 0) {
            for (let j = secondStart; j <= secondEnd; j++)
            {
                if (j % 2 !== 0) {
                    for (let k = thirdStart; k <= thirdEnd; k++)
                    {
                        if (k % 2 !== 0) {
                            for (let l = fourthStart; l <= fourthEnd; l++)
                            {
                                 if (l % 2 !== 0) {
                                   answer = answer  +`${i}${j}${k}${l}`  + " "
                                      
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(answer)
}
generator(["1365",
    "5877"])