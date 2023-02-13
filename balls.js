function balls(input){
    let ballsCount = Number(input[0]);
    let totalPoints = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let otherColor = 0;
    
    for (let i = 1; i <= ballsCount; i++) {
        let currentColor = input[i];

        if(currentColor === "red"){
            totalPoints += 5;
            redBalls++;
        }else if(currentColor === "orange"){
            totalPoints += 10;
            orangeBalls++;
        }else if(currentColor === "yellow"){
            totalPoints += 15;
            yellowBalls++;
        }else if(currentColor === "white"){
            totalPoints += 20;
            whiteBalls++;
        }else if(currentColor === "black"){
            totalPoints /= 2;
            blackBalls++;
        }else{
            otherColor++;
        }
        
    }

    console.log(`Total points: ${Math.floor(totalPoints)}\nRed balls: ${redBalls}\nOrange balls: ${orangeBalls}\nYellow balls: ${yellowBalls}\nWhite balls: ${whiteBalls}\nOther colors picked: ${otherColor}\nDivides from black balls: ${blackBalls}`)
    
}
balls((["3",
"white",
"black",
"pink"]))

console.log("------");

balls((["10",
    "white",
    "white",
    "ee",
    "red",
    "orange",
    "red",
    "black",
    "black",
    "black",
    "black"]))