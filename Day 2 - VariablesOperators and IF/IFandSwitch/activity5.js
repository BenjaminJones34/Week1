//checks number is palindrome
let num = "20202";
let numLength = num.length;
let flag = true;
if (numLength % 2 == 0) { //if even length
    for (let counter = 0; counter < numLength / 2; counter++) {
        if (num[counter] != num[numLength-1-counter]) {
            flag = false;
        }
    }
} else { // else odd
    for (let counter = 0; counter < (numLength-1) / 2; counter++) {
        if (num[counter] != num[numLength-1-counter]) {
            flag = false;
        } 
    }
}

if (flag == true) {
    console.log("It is a palindrome");
} else {
    console.log("It is not a palindrome");
}