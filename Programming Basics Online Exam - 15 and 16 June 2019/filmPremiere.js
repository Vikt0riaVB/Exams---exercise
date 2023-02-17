function movies(input){
    let movie = input[0];
    let package = input[1];
    let tickets = Number(input[2]);
    let discount = 0;
    let totalPrice = 0;

     if(movie === "John Wick"){
        if(package === "Drink"){
            totalPrice = 12 * tickets;
        }else if(package === "Popcorn"){
            totalPrice = 15 * tickets;
        }else if(package === "Menu"){
            totalPrice = 19 * tickets;
        }
    }else if(movie === "Star Wars"){
        if(package === "Drink"){
            totalPrice = 18 * tickets;
        }else if(package === "Popcorn"){
            totalPrice = 25 * tickets;
        }else if(package === "Menu"){
            totalPrice = 30 * tickets;
        }
        if(tickets >= 4){
            discount = totalPrice * 0.3
            totalPrice = totalPrice - discount;
        }
       
        
        

    }else if(movie === "Jumanji"){
        if(package === "Drink"){
            totalPrice = 9 * tickets;
        }else if(package === "Popcorn"){
            totalPrice = 11 * tickets;
        }else if(package === "Menu"){
            totalPrice = 14 * tickets;
        }

         if(tickets === 2){
            discount = totalPrice * 0.15
            totalPrice = totalPrice - discount;
        }
    }

    console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`)

}
movies(["John Wick",
"Drink",
"6"])

movies(["Jumanji",
"Menu",
"2"])