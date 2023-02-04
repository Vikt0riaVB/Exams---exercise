function tournamentOfChristmas(input){
    let days = Number(input.shift());
    let winGames = 0;
    let loseGames = 0;
    let total = 0;

    for (let i = 0; i < days; i++) {
       let sport = input.shift();

       let winCount = 0;
       let loseCount = 0;
       let daylySum = 0;
       let donate = 0;

       while(sport !== "Finish"){
        let winOrLost = input.shift();
        switch (winOrLost) {
            case "win":
                daylySum += 20;
                winCount++;
                winGames++;
                break;
            case "lose":
              
               loseCount++;
               loseGames++
            break;        
        }
        if(winCount > loseCount){
            donate = daylySum * 0.1;
        }

        sport = input.shift();

       }

       total += daylySum + donate;
       
    }

    if (winGames > loseGames) {
        total = total + (total * 0.20);
        console.log(`You won the tournament! Total raised money: ${total.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${total.toFixed(2)}`);
    }


}
