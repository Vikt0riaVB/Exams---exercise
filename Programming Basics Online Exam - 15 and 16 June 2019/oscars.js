function oscars(input){
    let nameOfActor = input.shift();
    let pointsFromAcadamy = Number(input.shift());
    let evaluators = Number(input.shift());
    let index = 0;
    let total = 1250.5;

    while(evaluators !== index){
        let name = input.shift();
        let points = Number(input.shift());

        let allPoints = (name.length * points) / 2;

         pointsFromAcadamy += allPoints;


         if(pointsFromAcadamy > total){
            break;
         }
         index++
    }


    if(total > pointsFromAcadamy){
        total -= pointsFromAcadamy;
        console.log(`Sorry, ${nameOfActor} you need ${total.toFixed(1)} more!`);
    }else{
        console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${pointsFromAcadamy.toFixed(1)}!`)
    }

    
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])