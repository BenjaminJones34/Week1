topping = "mushrooms";

switch (topping) {
    case "bacon":
    case "pepperoni":
    case "cheese":
    case "BBQ sauce":
        console.log(`You need ${topping}`);
        break;
    case "mushrooms":
        console.log(`Don't mind ${topping}`);
        break;
    default:
        console.log(`Ew, ${topping} should not be on pizza`);
        break;
}