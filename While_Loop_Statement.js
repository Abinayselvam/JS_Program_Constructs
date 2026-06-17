// While Loop Practice Problems

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question(
    `Choose program:
1. Power of 2
2. Magic Number
3. Flip Coin
4. Gambler

Enter choice: `,
    (choice) => {


        // 1) Power of 2
        if (choice == 1) {

            rl.question("Enter n: ", (value) => {

                let n = Number(value);
                let i = 0;

                while (2 ** i <= 256 && i <= n) {
                    console.log(`2^${i} = ${2 ** i}`);
                    i++;
                }

                rl.close();
            });

        }


        // 2) Magic Number
        else if (choice == 2) {

            let low = 1;
            let high = 100;

            console.log("Think of a number between 1 and 100");

            function guessNumber() {

                let mid = Math.floor((low + high) / 2);

                rl.question(
                    `Is your number ${mid}? (yes/less/greater): `,
                    (answer) => {

                        if (answer === "yes") {

                            console.log(`Your magic number is ${mid}`);
                            rl.close();

                        }
                        else if (answer === "less") {

                            high = mid - 1;
                            guessNumber();

                        }
                        else if (answer === "greater") {

                            low = mid + 1;
                            guessNumber();

                        }
                    }
                );
            }

            guessNumber();

        }


        // 3) Flip Coin
        else if (choice == 3) {

            let heads = 0;
            let tails = 0;
            let count = 0;


            while (heads < 11 && tails < 11) {

                let flip = Math.floor(Math.random() * 2);


                if (flip === 1) {
                    heads++;
                    console.log("Heads");
                }
                else {
                    tails++;
                    console.log("Tails");
                }

                count++;
            }


            console.log("Total flips:", count);
            console.log("Heads:", heads);
            console.log("Tails:", tails);

            rl.close();

        }


        // 4) Gambler
        else if (choice == 4) {


            let money = 100;
            let goal = 200;

            let bets = 0;
            let wins = 0;


            while (money > 0 && money < goal) {

                bets++;

                let win = Math.floor(Math.random() * 2);


                if (win === 1) {

                    money++;
                    wins++;

                }
                else {

                    money--;

                }

            }


            console.log("Number of bets:", bets);
            console.log("Number of wins:", wins);
            console.log("Final money:", money);


            if (money === goal) {
                console.log("Gambler Won");
            }
            else {
                console.log("Gambler Lost");
            }


            rl.close();

        }


        else {

            console.log("Invalid choice");
            rl.close();

        }

    });