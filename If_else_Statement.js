

//1)If else
let a=10;
let b = 5;
let c = 40;
let d =42;

console.log(Math.max(a,b,c,d));
console.log(Math.min(a,b,c,d));

//2)Leap Year

let year = 2024;

if((year%4==0 && year%100!=0) || year%400==0)
{
    console.log("This is leap year");
}
else{
    console.log("This is not leap year");
}

//3.Coin Flip

let coin = Math.floor(Math.random()*2);
if(coin == 0)
{
    console.log("Head");
}
else
{
    console.log("Tail");
}