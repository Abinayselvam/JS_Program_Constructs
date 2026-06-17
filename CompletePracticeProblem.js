
//1)Random single digit print
console.log("Single Digit Random: "+(Math.floor(Math.random()*10)));

//2)Dice problem
console.log("Dice Problem: "+(Math.floor(Math.random() * 6) + 1));

//3)Add 2 dice
console.log(("Two Dice Added: "+(Math.floor(Math.random()*6)+1)+Math.floor(Math.random()*6)+1));

//4)Find the 2digit random number sum and average
let sum = 0;
let random = ((Math.floor(Math.random()*99)+1));
for(let i =0;i<=5;i++)
{
    let random = (Math.floor(Math.random()*99)+1);
    sum += random;
}

console.log("Find the two digit random number sum: "+(sum));
console.log("Find the two digit random number average: "+(Math.floor(sum/5)));

