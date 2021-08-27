let numbers = [];

for (let i = 0; i < 6; i++) {
    numbers.push(Math.floor(Math.random() * 30));
    if (numbers[i] % 7 == 0) {
        console.log("It is divisible by 7");
    } else {
        console.log("It is not divisble by 7");
    }
}
