
// import the PhysicalProduct and DigitalProduct classes, and create instances of both.

import PhysicalProduct from "./models/PhysicalProduct.js";
import DigitalProduct from "./models/DigitalProduct.js";
import Product from "./models/Product.js";
import { sortProducts } from "./utils/sortProduct.js";
import { calculateTax } from "./utils/taxCalculator.js";


// test taxCalculator
const product = new Product("10","Laptop", 750);
 console.log("Product:", product);
console.log("Price including tax: ",calculateTax(product));



// Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.

const physicalProduct = new PhysicalProduct("P1","Laptop",1100,3.8);
const digitalProduct = new DigitalProduct("D2","Music album",90, 300);

const merchandise = [physicalProduct, digitalProduct];

for (const items of merchandise) {
   
    // Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
    // Hint: Utilize polymorphism to your advantage here.
    
    console.log("Polimorfismo Product details:", items.displayDetails(), items.formattedWeight);
    console.log("Polimorfismo Price with tax: $", items.getPriceWithTax());
   
}

// Test use sortproduct
const products: Product[] = [
    new Product("10", "Iphone", 1000),
    new Product("20", "tablet", 450),
    new Product("30", "Monitor", 250)
];

const sortPrice = sortProducts(products, "price");

console.log("Sorted by price:");
console.log(sortPrice);

const sortName = sortProducts(products, "name");

console.log("Sorted by name:");
console.log(sortName);



// test bulk discounts for physical products
const PhysicalProduct1 = new PhysicalProduct("30","Laptop", 1200, 5); // instantiation

// console.log("discounts for physical products:",PhysicalProduct1.name ,PhysicalProduct1.applyBulkDiscount(5));
console.log("discounts for physical products:",PhysicalProduct1.name ,PhysicalProduct1.applyBulkDiscount(20));




 
 
