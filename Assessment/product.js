// Task 4:
// Create a TypeScript interface for a Product with the following properties:
// name: string
// price: number
// Write a function that:
// - Accepts an array of Product objects.
// - Returns the total price of all products.
function totalPrice(products) {
    console.log("test");
    return products.reduce(function (previousProduct, currentProduct) {
        previousProduct.price += currentProduct.price;
        return previousProduct;
    }).price;
}
var products = [
    {
        name: "Apple",
        price: 5
    },
    {
        name: "Banana",
        price: 2
    },
    {
        name: "Orange",
        price: 8
    }
];
console.log(totalPrice(products));
