function dispenseCash(amount, pin, balance) {
    if (checkPIN(pin)) {
        if (balance >= amount) {
            console.log(`Here is your ${amount}`);
        } else {
            console.log("ERROR: Amount to withdraw greater than balance");
        }
    } else {
        console.log("Incorrect PIN.");
    }
};

function checkPIN(pin) {
    if ((pin.toString()).length >= 4 && (pin.toString()).length <= 6) {
        return true;
    } else {
        return false;
    }
};

dispenseCash(500, 123456, 500);