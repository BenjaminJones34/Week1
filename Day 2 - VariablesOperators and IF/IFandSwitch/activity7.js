let word = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let wordLength = word.length;
const vowels = ["a", "e", "i", "o", "u"];

for (let counter = wordLength-1; counter > -1; counter--) {
    if (vowels.indexOf(word[counter]) !== -1) { //checks if letter being checked is in the list
        console.log(counter);
        break;
    }
}