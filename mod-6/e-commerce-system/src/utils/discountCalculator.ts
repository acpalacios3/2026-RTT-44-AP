// Part 3: Implementation
//2. Implement Utilities:
    // Discount Calculator Module (discountCalculator.ts):
    // Create a calculateDiscount() function to handle discount calculations for products.
    // This function should return the dollar amount that a product is discounted by. 
    // For example, if a product costs $100 and has a 10% discount, the function should return $10.

function calculateDiscount(price:number, discountPercentage: number):number
 {
    return Number(((price * discountPercentage)/100).toFixed(2));
}

console.log("discount: $",calculateDiscount(100,10));