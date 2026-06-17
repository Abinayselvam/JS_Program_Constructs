// TemperatureConversion.js

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function convertTemperature(choice, value) {

    switch(choice) {

        case 1:
            if(value >= 0 && value <= 100) {
                let fahrenheit = (value * 9/5) + 32;
                console.log(`${value}°C = ${fahrenheit}°F`);
            }
            else {
                console.log("Temperature must be between 0°C and 100°C");
            }
            break;


        case 2:
            if(value >= 32 && value <= 212) {
                let celsius = (value - 32) * 5/9;
                console.log(`${value}°F = ${celsius}°C`);
            }
            else {
                console.log("Temperature must be between 32°F and 212°F");
            }
            break;


        default:
            console.log("Invalid Choice");
    }
}


rl.question(
    `Choose Conversion:
1. Celsius to Fahrenheit
2. Fahrenheit to Celsius

Enter choice: `,
    (choice)=>{

        rl.question("Enter temperature: ",(temp)=>{

            convertTemperature(Number(choice), Number(temp));
            rl.close();

        });

    });