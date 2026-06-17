

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

//4.arithmetic operations
const prompt = require('prompt-sync')();

let num1 = Number(prompt("Enter value of a: "));
let num2 = Number(prompt("Enter value of b: "));
let num3 = Number(prompt("Enter value of c: "));

let result1 = num1 + num2 * num3;
let result2 = num1 % num2 + num3;
let result3 = num3 + num1 / num2;
let result4 = num1 * num2 + num3;

console.log("\nResults:");
console.log("a + b * c =", result1);
console.log("a % b + c =", result2);
console.log("c + a / b =", result3);
console.log("a * b + c =", result4);

let max = Math.max(result1, result2, result3, result4);
let min = Math.min(result1, result2, result3, result4);

console.log("\nMaximum value =", max);
console.log("Minimum value =", min);