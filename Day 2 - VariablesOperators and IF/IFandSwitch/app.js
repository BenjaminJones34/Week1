let place = "Manc";
let weather = "Cloudy";

if (place == "Manc" && weather == "Sunny") {
    console.log("Check again");
} else if (place == "Manc" && weather == "Rain") {
    console.log("Obvs");
} else {
    console.log("What it isn't raining?");
}

switch(weather, place) {
    case "Cloudy", "Manc":
        console.log("Wow");
        break;
    default:
        console.log("Unwow");
}

switch (true) {
    case false == false:
        console.log("iessoifsiohf");
        break;
}