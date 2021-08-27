let films = ["I", "don't", "like", "films"];

for (let i = 0; i < films.length; i++) {
    if (i == 2 && films[i] == "Ghostbusters") {
        console.log("Yay it's Ghostbusters!");
    } else if (i == 2 && films[i] != "Ghostbusters") {
        console.log("Boo! We want Ghostbusters!");
    } else {
        console.log(films[i]);
    } 
}
