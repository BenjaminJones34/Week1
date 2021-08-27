let placeOfWork = 8;
let townOfHome = 17;
let time = 18;

switch (true) {
    case time < placeOfWork || time > townOfHome:
        console.log("At home");
        break;
    case time == placeOfWork:
        console.log("Commuting");
        break;
    case time > placeOfWork && time < townOfHome:
        console.log("At work");
        break;
    case time == townOfHome:
        console.log("Going home");
        break;
    default: //kinda useless
        console.log("Impossible");
        break;
}