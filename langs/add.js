function sumOfDigits(n) {
    let total = 0;
    while (n > 0) {
        total += n % 10;
        n = Math.floor(n / 10);
    }
    return total;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number: ", (num) => {
    console.log("Sum of digits:", sumOfDigits(parseInt(num)));
    readline.close();
});
