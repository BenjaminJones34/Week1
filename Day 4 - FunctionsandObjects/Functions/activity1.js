 const factorial = (n) => {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        let total = 1;
        for (let counter = n; counter > 1; counter--) {
            total *= counter;
        } return total;
    }
};

console.log(factorial(52));