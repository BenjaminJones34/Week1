const person = {
    name: "Benjamin",
    age: "18",
    sayHi() {
        return `Hello my name is ${this.name}`
    }
};

console.log(person.sayHi())
