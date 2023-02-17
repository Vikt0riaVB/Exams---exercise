function movieDay(input){
    let time = Number(input[0]);
    let scene = Number(input[1]);
    let sceneTime = Number(input[2]);

    let outreach = time * 0.15;
    let neededTime = scene * sceneTime;
    let totalTime = outreach + neededTime
    let total = 0;
 
    if(time < totalTime){
        total = totalTime - time;
        console.log(`Time is up! To complete the movie you need ${Math.round(total)} minutes.`);
    }else{
        total = time - totalTime;
        console.log(`You managed to finish the movie on time! You have ${Math.round(total)} minutes left!`);
    }

}
movieDay((["135",
    "5",
    "20"]))