    function suitcasesLoad(input){
        let allCapacity = Number(input.shift());
        let index = 0;
        let counter = 0; 

        let command = input.shift();

        while(command !== "End"){
            let capacity = Number(command);
            index++;
            
            if(index % 3 === 0){
                capacity = capacity * 1.10;
            
            
            }
            if(allCapacity - capacity < 0){
                break;
            }
            counter++;
            allCapacity -= capacity
            command = input.shift()
        }

    

        if(command === "End"){
            console.log("Congratulations! All suitcases are loaded!")
            console.log(`Statistic: ${counter} suitcases loaded.`)

        }else{
            console.log("No more space!");
            console.log(`Statistic: ${counter} suitcases loaded.`)
        }

    }
suitcasesLoad((["1200.2",
"260",
"380.5",
"125.6",
"305",
"End"]))

console.log("__________")


suitcasesLoad((["550",
"100",
"252",
"72",
"End"]))

 console.log("__________")

suitcasesLoad((["700.5",
 "180",
 "340.6",
"126",
"220"]))