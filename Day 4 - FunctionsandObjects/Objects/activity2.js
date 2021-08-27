const pet = {
    name: "Dexter",
    typeOfPet: "Dog",
    age: 8, //can't believe i have to guess this
    colour: "silver",
    eat() {
        return `${this.name} is eating`
    },
    drink() {
        return `${this.name} is drinking`
    }
};

console.log(pet.eat())
console.log(pet.drink())