function trekking(input){
    let groupsOfpeople = Number(input.shift());
    let groupForM = 0;
    let groupForMon =0;
    let groupForKili = 0;
    let groupForK2 = 0;
    let groupForE = 0; 
    let allPeople = 0;


    for (let i = 1; i <= groupsOfpeople; i++) {
        let currentPeople = Number(input.shift());
        
        
        if(currentPeople <= 5){
            groupForM += currentPeople;
        }else if(currentPeople <= 12){
            groupForMon +=currentPeople;
        }else if(currentPeople <= 25){
            groupForKili += currentPeople;
        }else if(currentPeople <= 40){
            groupForK2 +=currentPeople;
        }else if(currentPeople > 40){
            groupForE += currentPeople;
        }

        allPeople += currentPeople;
    }

    console.log(`${((groupForM / allPeople) * 100).toFixed(2)}%`)
    console.log(`${((groupForMon / allPeople) * 100).toFixed(2)}%`)
    console.log(`${((groupForKili / allPeople) * 100).toFixed(2)}%`)
    console.log(`${((groupForK2 / allPeople) * 100).toFixed(2)}%`)
    console.log(`${((groupForE / allPeople) * 100).toFixed(2)}%`)
}

trekking((["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]))