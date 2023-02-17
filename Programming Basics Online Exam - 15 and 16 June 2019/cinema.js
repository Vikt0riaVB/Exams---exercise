function cinema(input) {
    let capacity = Number(input[0]);
    let index = 1;
    let total = 0; 
    let allPrice = 0;
    let discount = 0;
    let people = 0;
  
   


    while(input[index] !== "Movie time!"){
        people = Number(input[index]);
        if(people % 3 === 0){
            discount++ ;
           
        }
        total += 5 * people;
        
        allPrice = total - (discount * 5);
        
        capacity -= people;
        if(capacity < 0){
            break;
        }
        index++
        
    }

    if(capacity >= 0){
        console.log(`There are ${capacity} seats left in the cinema.\nCinema income - ${allPrice} lv.`);
    }else{
        allPrice -= (people * 5) - 5;
        console.log(`The cinema is full.\nCinema income - ${allPrice} lv.`);
    }
}
