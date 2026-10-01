import Product from "../models/Product.js";
export function calculateTax(product) {
    console.log("call product.getPriceWithTax from calculateTax");
    return product.getPriceWithTax();
}
// test
const product = new Product("10", "Laptop", 750);
// console.log("Product:", product);
// console.log("Price including tax: ",calculateTax(product));
//# sourceMappingURL=taxCalculator.js.map