//1)Single digit to words
let digit = 5;
switch (digit) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    case 0:
        console.log("Zero");
        break;
    default:
        console.log("Invalid value");
        break;
}

//2) Read number and display week day
let day = 1;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid value");
        break;
}

let displayUnits =1;
switch (displayUnits) {
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    case 100000:
        console.log("Lacks");
        break;
    case 1000000:
        console.log("Ten Lacks");
        break;
    default:
        console.log("Invalid value");
        break;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(
    "Choose Conversion:\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet\n",
    (choice) => {
        rl.question("Enter the value: ", (value) => {
            choice = Number(choice);
            value = Number(value);

            switch (choice) {
                case 1:
                    console.log(`${value} Feet = ${value * 12} Inches`);
                    break;

                case 2:
                    console.log(`${value} Feet = ${value * 0.3048} Meters`);
                    break;

                case 3:
                    console.log(`${value} Inches = ${value / 12} Feet`);
                    break;

                case 4:
                    console.log(`${value} Meters = ${value * 3.28084} Feet`);
                    break;

                default:
                    console.log("Invalid Choice");
            }

            rl.close();
        });
    }
);