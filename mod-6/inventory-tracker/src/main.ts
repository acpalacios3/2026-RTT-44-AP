
// import the PhysicalProduct and DigitalProduct classes, and create instances of both.

import PhysicalProduct from "./models/PhysicalProduct.js";
import DigitalProduct from "./models/DigitalProduct.js";

// import the taxCalculator
import { calculateTax } from "./utils/taxCalculator.js";

// Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.
// Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
// Hint: Utilize polymorphism to your advantage here.

const physicalProduct = new PhysicalProduct("P1","Laptop",1100,3.8);
const digitalProduct = new DigitalProduct("D2","Music album",90, 300);

const products = [physicalProduct, digitalProduct];

for (const product of products) {
    console.log(product.displayDetails());
    console.log(`Final Price: $${calculateTax(product)}`);
}
