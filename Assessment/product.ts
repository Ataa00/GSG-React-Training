// Task 4:
// Create a TypeScript interface for a Product with the following properties:
// name: string
// price: number

interface Product {
    name: string;
    price: number;
}

// Write a function that:
// - Accepts an array of Product objects.
// - Returns the total price of all products.

function totalPrice (products: Product[]): number {
    return products.reduce( (previousProduct: Product, currentProduct: Product): Product => {
        previousProduct.price += currentProduct.price;
        return previousProduct;
    }).price;
}

let products = [
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
]

console.log(totalPrice(products))

// TypeScript is a superset of JavaScript, on of the differences is that TypeScript declare 
// the variable type in the interface and in the functions which provides a layer of error handling
// to figuer out whether the user passes a variable with differenet type in early stages.
// It appears that "node" doesn't run TypeScript directly. So, it should convert the .ts file to .js and then
// run the .js with node.
// First, install the typescript library via the following command "npm install -g typescript".
// After that, you should initialize the typescript config file as follows "tsc --init", a file
// named "tsconfig.json" will appear in the current directory.
// Then run "tsc product.ts" to generate a .js file from the "product.ts" file. It will create
// "product.js" file in the current directory.
// Finally, run the generated "product.js" file via "node product.js"