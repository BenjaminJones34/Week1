function larger(num1, num2) {
    if (num1 > num2) {
        return `${num1} is greater than ${num2}`;
    } else if (num1 < num2) {
        return `${num2} is greater than ${num1}`;
    } else {
        return `Neither are greater`;
    }
};

console.log(larger(7,7))