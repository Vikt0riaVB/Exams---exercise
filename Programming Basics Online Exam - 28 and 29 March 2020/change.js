function change(input){
// 1 биткойн = 1168 лева.
// 1 китайски юан = 0.15 долара.
// 1 долар = 1.76 лева.
// 1 евро = 1.95 лева.

let bitcoin = Number(input[0]);
let ioan = Number(input[1]);
let comm = Number(input[2]);

let curBitcoin = bitcoin * 1168;
let curIoan = ioan * 0.15;
let curDollar = curIoan * 1.76
let curComm = comm / 100;
let euro = (curBitcoin + curDollar) / 1.95;

let total = euro - (euro * curComm);

console.log(total.toFixed(2))


}
change(["20",
"5678",
"2.4"])