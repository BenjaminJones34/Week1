const coffeeShop = {
    branch: "Schnouqle's",
    drinks: [["Coffee", "1.50"],
             ["Tea", "1.00"],
             ["Hot Chocolate", "1.75"]],
    foods: [["Cake", "2.25"],
            ["Biscuit", "1.00"],
            ["Doughnut", "2.00"]],
    drinksOrdered(arr) {
        let total = 0;
        let drinkList = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < this.drinks.length; j++) {
                if (arr[i] == this.drinks[j][0]) {
                    total += Number.parseFloat(this.drinks[j][1]); //Number.parseFloat converts string into float
                    drinkList.push([" " + this.drinks[j][0] + ": £" +
                                    this.drinks[j][1].toString()]);
                }
            }
        } return `${drinkList.join()}. Your order is in total £${total.toFixed(2)}`; //toFixed makes float at certain decimal point and 
                                                                                     //.join() essentially takes out the brackets and makes it look better
    },
    foodsOrdered(arr) {
        let total = 0;
        let foodsList = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < this.foods.length; j++) {
                if (arr[i] == this.foods[j][0]) {
                    total += Number.parseFloat(this.foods[j][1]);
                    foodsList.push([" " + this.foods[j][0] + ": £" +
                                    this.foods[j][1].toString()]);
                }
            }
        } return `${foodsList.join()}. Your order is in total £${total.toFixed(2)}`; 
    }
};

console.log(coffeeShop["drinksOrdered"](["Coffee", 
                                         "Tea", 
                                         "Tea"]));

console.log(coffeeShop["foodsOrdered"](["Cake", 
                                        "Biscuit", 
                                        "Doughnut"]));