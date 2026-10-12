// Part 3: Implementation
// 1. Develop Product Class:
// Product Base Class (Product.ts):
// Define a Product class that includes the appropriate properties based on 
// data provided in the API response.
// Include methods displayDetails() and getPriceWithDiscount(), 
// and implement them appropriately based on the provided data.
import fetchDataAPI from "../services/apiServices.js";
import calculateTax from "../utils/taxCalculator.js";
class Product {
    // the properties of the object (not yet created)
    id;
    sku;
    title;
    price;
    discountPercentage;
    category;
    // built-in method of our class that helps us create the object
    constructor(id, sku, title, price, discountPercentage, category) {
        // assigning values to our properties
        this.id = id;
        this.sku = sku;
        this.title = title;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.category = category;
    }
    // any object we create from this class will include this method (displayDetails)
    displayDetails() {
        return `id: ${this.id},SKU: ${this.sku}, Title: ${this.title},
               Price: $${this.price}, Discount: ${this.discountPercentage},
               Category: ${this.category} `;
    }
    getPriceWithDiscount() {
        let priceD = this.price - ((this.price * this.discountPercentage) / 100);
        return Number(priceD.toFixed(2));
    }
}
//get data from API
const data = await fetchDataAPI();
// create the object using the API data
const product1 = new Product(data.id, data.sku, data.title, data.price, data.discountPercentage, data.category);
//console.log(product1);
// test
//  console.log("Product 1:",product1.displayDetails());
//  console.log("Price with discount ====>:",product1.getPriceWithDiscount() );
// call function calculateTax
const valueTaxCategory = calculateTax(data.price, data.category);
//  console.log("price:$",data.price,"category:", data.category);
//  console.log("Value Tax by category: $",valueTaxCategory);
export default Product;
//# sourceMappingURL=Product.js.map