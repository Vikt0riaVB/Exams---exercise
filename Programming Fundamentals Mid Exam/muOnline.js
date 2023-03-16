function muOnline(input){
    let initialHealth = 100;
    let isDead = false;

    let currentRoom = input.split("|");

    let inititalBitcoins = 0;
    let currentHealth = initialHealth;
    let bestRoom = 0; 
    

    for (let i = 0; i < currentRoom.length; i++) {
        bestRoom++;
        let current = currentRoom[i].split(" ");
        let currentCommand = current[0];
        let power = Number(current[1]);

        if(currentCommand == "potion"){
            currentHealth += power;

            if(currentHealth > initialHealth){
                currentHealth = initialHealth;
            }

            console.log(`You healed for 10 hp.`);
            console.log(`Current health: ${currentHealth} hp.`)
        }else if(currentCommand == "chest"){
            inititalBitcoins += power;

            console.log(`You found ${power} bitcoins.`)
        }else{
            currentHealth -= power;
            if(currentHealth <= 0){
                console.log(`You died! Killed by ${currentCommand}.`);
                console.log(`Best room: ${bestRoom}`)
                isDead = true;
                break;
               
                
            }else{
                console.log(`You slayed ${currentCommand}.`);
            }
        }
    }

    if(isDead == false){
        console.log(`You've made it!`)
        console.log(`Bitcoins: ${inititalBitcoins}`)
        console.log(`Health: ${currentHealth}`)
    }
 
}


80/100 points 
