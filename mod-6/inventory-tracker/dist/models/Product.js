// blueprint for creating objects (cookie cutter is used to create cookies)
class Product {
    // the properties of the object (not yet created)
    sku;
    name;
    price;
    // built-in method of our class that helps us create the object
    constructor(sku, name, price) {
        // assigning values to our properties
        this.sku = sku; // the "this" keyword refers to the current object being created
        this.name = name;
        this.price = price;
    }
    // any object we create from this class will include this method (displayDetails)
    displayDetails() {
        return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price}`;
    }
    getPriceWithTax() {
        let tax = this.price * (.08 + 1);
        return this.price + tax;
    }
}
// create the object using the class (Product) ( creating an instance of the Product class)
const product1 = new Product("10", "Iphone", 1000); // instantiation
const product2 = new Product("20", "tablet", 450);
console.log("Product 1:", product1.displayDetails());
console.log("Product 2:", product2.displayDetails());
export default Product;
//# sourceMappingURL=Product.js.map