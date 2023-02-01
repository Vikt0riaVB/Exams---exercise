function birthday(input){
    let rent = Number(input);
    let total = 0;
    priceForCake = rent * 0.2;
    priceForDrinks = priceForCake - (priceForCake * 0.45);
    priceForAnime = rent / 3;

    total = rent + priceForCake + priceForDrinks + priceForAnime;

    console.log(total)
}

birthday(3720)