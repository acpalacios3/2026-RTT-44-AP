// import the PhysicalProduct and DigitalProduct classes, and create instances of both.
import PhysicalProduct from "./models/PhysicalProduct.js";
import DigitalProduct from "./models/DigitalProduct.js";
// Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.
const physicalProduct = new PhysicalProduct("P1", "Laptop", 1100, 3.8);
const digitalProduct = new DigitalProduct("D2", "Music album", 90, 300);
const merchandise = [physicalProduct, digitalProduct];
for (const items of merchandise) {
    // Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
    // Hint: Utilize polymorphism to your advantage here.
    console.log("Polimorfismo Product details:", items.displayDetails(), items.formattedWeight);
    console.log("Polimorfismo Price with tax: $", items.getPriceWithTax());
}
//# sourceMappingURL=main.js.map