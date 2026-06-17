
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


//5.a)Feet conversion
let feet = 42/12;
console.log(feet);

//5.b) 60*40 feet plot in meters
let areaFeat = 60*40;
let areaMeter =    areaFeat * 0.092903;
console.log(areaMeter);

//5.c) Function to calculate total area in acres
function calculateTotalArea(singlePlotSize, unit = 'acres') {
    const totalPlots = 25;
    let totalAreaInAcres = 0;

    if (unit === 'sqft') {
        // 1 acre = 43,560 square feet
        const SQFT_PER_ACRE = 43560;
        const singlePlotInAcres = singlePlotSize / SQFT_PER_ACRE;
        totalAreaInAcres = singlePlotInAcres * totalPlots;
    } else {
        // Assumes the input is already in acres
        totalAreaInAcres = singlePlotSize * totalPlots;
    }

    // Round to 2 decimal places for clean output
    return totalAreaInAcres.toFixed(2);
}

// Example 1: If one plot is 0.15 acres
const areaExample1 = calculateTotalArea(0.15, 'acres');
console.log(`Total area for 25 plots: ${areaExample1} acres`);
// Output: Total area for 25 plots: 3.75 acres
