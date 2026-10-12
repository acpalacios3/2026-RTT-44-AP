// 2. Implement Utilities:
// Tax Calculator Module (taxCalculator.ts):
// Create a calculateTax() function to handle tax calculations for products.
// This function should return the dollar amount that a product is taxed at.
//  For example, if a product costs $100 and is taxed at 10%, the function should return $10.
// Note that the product data returned from the API does not include a taxPercentage field like it includes a discountPercentage field.
// Apply a default standard tax rate of 4.75% to each product; however, products with a category of “groceries” should only be taxed at 3%.
import { TaxCalculationError } from "./errorHandler.js";
function calculateTax(price, category) {
    if (price < 0) {
        throw new TaxCalculationError("The price can not be negative");
    }
    let taxPercentage;
    if (category === "groceries") {
        taxPercentage = 3;
    }
    else {
        taxPercentage = 4, 75;
    }
    return Number(((price * taxPercentage) / 100).toFixed(2));
}
// test:
// console.log("Tax value groceries: $",calculateTax(100,"groceries" ));
// console.log("Tax value beauty: $",calculateTax(100,"beauty" ));
export default calculateTax;
//# sourceMappingURL=taxCalculator.js.map