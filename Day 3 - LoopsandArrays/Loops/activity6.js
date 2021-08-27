let bobsFollowers = ["Charlie", "Bob", "Dave", "Max"];
let hannahsFollowers = ["Emily", "Charlie", "Max", "Jack"];

for (let i = 0; i < hannahsFollowers.length; i++) {
    for (let j = 0; j < bobsFollowers.length; j++) {
        if (bobsFollowers[j] == hannahsFollowers[i]) {
            console.log(bobsFollowers[j]);
        }
    }
}