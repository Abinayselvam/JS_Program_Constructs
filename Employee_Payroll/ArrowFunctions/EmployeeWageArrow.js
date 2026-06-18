// EmployeeWageArrow.js

const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WORKING_DAYS = 20;
let dailyWageArray = [];

// Generate Daily Wages
for (let day = 1; day <= WORKING_DAYS; day++) {

    let empCheck = Math.floor(Math.random() * 3);

    let workHours = 0;

    switch (empCheck) {
        case 1:
            workHours = PART_TIME_HOURS;
            break;

        case 2:
            workHours = FULL_TIME_HOURS;
            break;

        default:
            workHours = 0;
    }

    let dailyWage = workHours * WAGE_PER_HOUR;
    dailyWageArray.push(dailyWage);
}

console.log("Daily Wage Array:");
console.log(dailyWageArray);

// a) Calculate Total Wage using Arrow Function + reduce()
const totalWage = dailyWageArray.reduce(
    (total, wage) => total + wage,
    0
);

console.log("\nTotal Wage =", totalWage);

// b) Show Day along with Daily Wage using map()
const dayWageMap = dailyWageArray.map(
    (wage, index) => `Day ${index + 1} = ₹${wage}`
);

console.log("\nDay Wise Wage:");
console.log(dayWageMap);

// c) Show Days when Full Time Wage (160) was earned
const fullTimeDays = dailyWageArray
    .map((wage, index) =>
        wage === 160 ? index + 1 : null
    )
    .filter(day => day !== null);

console.log("\nFull Time Wage Days:");
console.log(fullTimeDays);

// d) First occurrence of Full Time Wage
const firstFullTimeDay =
    dailyWageArray.findIndex(
        wage => wage === 160
    ) + 1;

console.log(
    "\nFirst Full Time Wage earned on Day:",
    firstFullTimeDay
);

// e) Check every Full Time Wage is 160
const everyFullTimeCorrect =
    dailyWageArray
        .filter(wage => wage === 160)
        .every(wage => wage === 160);

console.log(
    "\nEvery Full Time Wage is 160:",
    everyFullTimeCorrect
);

// f) Check if any Part Time Wage exists
const hasPartTime =
    dailyWageArray.some(
        wage => wage === 80
    );

console.log(
    "Part Time Wage Present:",
    hasPartTime
);

// g) Number of Days Employee Worked
const daysWorked =
    dailyWageArray.filter(
        wage => wage > 0
    ).length;

console.log(
    "Number of Days Worked:",
    daysWorked
);