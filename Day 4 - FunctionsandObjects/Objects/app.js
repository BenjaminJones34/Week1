// const person = {
//     name: "Benjamin",
//     age: "18"
// };

// console.log(person["name"])
// console.log(person.name)

// let offer = "none";
// let time = 1200;

const cafe = {
	name: "Whitesheep",
	seatingCapacity: 100,
	hasSpecialOffers: true,
	drinks: ["Cappuccino", "Latte", "Filter coffee", "Tea", "Hot chocolate"],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with suprisingly priced sandwich",
    noOffer: "Sorry no offer",
    openCafe() {
        if (this.hasSpecialOffers) {
            return "Time for a special offer!";
        }
    },
    closeCafe() {
        return "We are close, come back tomorrow";
    }
};

console.log(cafe.openCafe());

// if (time < 1100) {
//     offer = cafe.breakfastOffer;
// } else if (time < 1500) {
//     offer = cafe.lunchOffer;
// } else {
//     offer = cafe.noOffer
// }

// console.log(offer)