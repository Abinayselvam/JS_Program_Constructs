const dailyWageArray = [
    160, 80, 0, 160, 80,
    160, 160, 0, 80, 160
];

// a) Total Wage
const totalWage = dailyWageArray.reduce(
    (total, wage) => total + wage,
    0
);

console.log("Total Wage =", totalWage);

// b) Day with Wage
const dayWageMap = dailyWageArray.map(
    (wage, index) => `Day ${index + 1} = ${wage}`
);

console.log(dayWageMap);

// c) Full Time Wage Days
const fullTimeDays = dailyWageArray
    .map((wage, index) =>
        wage === 160 ? index + 1 : null)
    .filter(day => day !== null);

console.log("Full Time Days =", fullTimeDays);

// d) First Full Time Wage
console.log(
    "First Full Time Day =",
    dailyWageArray.indexOf(160) + 1
);

// e) Every Full Time Wage Correct?
console.log(
    dailyWageArray
        .filter(wage => wage === 160)
        .every(wage => wage === 160)
);

// f) Any Part Time Wage?
console.log(
    dailyWageArray.some(
        wage => wage === 80
    )
);

// g) Days Worked
console.log(
    dailyWageArray
        .filter(wage => wage > 0)
        .length
);