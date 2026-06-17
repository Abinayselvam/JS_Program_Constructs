const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {

    let n = Number(input);

    // 1) Power of 2
    console.log("\nPower of 2:");
    for (let i = 0; i <= n; i++) {
        console.log(`2^${i} = ${2 ** i}`);
    }


    // 2) Harmonic Number
    let harmonic = 0;

    for (let i = 1; i <= n; i++) {
        harmonic += 1 / i;
    }

    console.log(`\nHarmonic Number H${n} = ${harmonic}`);


    // 3) Prime Number
    let isPrime = true;

    if (n <= 1) {
        isPrime = false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
        }
    }

    console.log(
        isPrime ? `${n} is Prime` : `${n} is Not Prime`
    );


    // 5) Factorial
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    console.log(`${n}! = ${factorial}`);


    // 6) Prime Factors
    console.log(`Prime Factors of ${n}:`);

    let temp = n;

    for (let i = 2; i * i <= temp; i++) {
        while (temp % i === 0) {
            console.log(i);
            temp /= i;
        }
    }

    if (temp > 1) {
        console.log(temp);
    }

    rl.close();
});