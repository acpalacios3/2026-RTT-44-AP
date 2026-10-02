import type DiscountableProduct from "../utils/DiscountableProduct.js";
import Product from "./Product.js";


// a new DigitalProduct class that extends Product (has all the same properties and methods as Product)

class PhysicalProduct extends Product implements DiscountableProduct {

    // unique property to the PhysicalProduct 
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        
        // passing the name and price values to the parent contructor
        super(sku, name, price); // super refers to the parent class (Product)
     
        // assign the value of the weight property
        this.weight = weight;
    }

    // "override" use for overrides the parent "Product" function
    override getPriceWithTax():number{
       
        const taxRate = 0.10;
        console.log("PhysicalProducts-getPriceWithTax, price:",this.price)
        console.log("PhysicalProducts-getPriceWithTax, tax:",(taxRate + 1));
        console.log("PhysicalProducts-getPriceWithTax, price with tax:",this.price * (taxRate + 1));
        return this.price * (taxRate + 1);
    }
    
    //get allows you to use the function as a property and not as a function
    get formattedWeight(): string {
        return `${this.weight} kg`;
    }

    //Implement interface DiscountableProduct in PhysicalProduct
  
    applyDiscount(discount: number): number {

          console.log("discount:",  (this.price * discount/100) );
          return this.getPriceWithTax() - (this.price * discount/100);
    }

    applyBulkDiscount(quantity: number): number {
    if (quantity >= 10) {
        console.log("apply 15% Bulk Discount:",  this.applyDiscount(15) );
        return this.applyDiscount(15);
    } else {

          console.log("NO apply 15% Bulk Discount:");
    }

    return this.price;
}

}

export default PhysicalProduct;

// create the object using the class (Product) ( creating an instance of the Product class)
// const PhysicalProduct1 = new PhysicalProduct("30","Laptop", 1200, 5); 
// const PhysicalProduct2 = new PhysicalProduct("40","TV", 500,20 );

// test
// console.log("Physical Product 1:",PhysicalProduct1.displayDetails(),PhysicalProduct1.getPriceWithTax(), PhysicalProduct1.formattedWeight);
// console.log("Physical Product 2:",PhysicalProduct2.displayDetails(),PhysicalProduct2.getPriceWithTax(), PhysicalProduct2.formattedWeight);

// test use implement interface DiscountableProduct 

// console.log("discount price:", PhysicalProduct1.applyDiscount(0.5));
// console.log("discount price:", PhysicalProduct2.applyDiscount(0.5));



// test bulk discounts for physical products

// console.log("discounts for physical products:",PhysicalProduct1.name ,PhysicalProduct1.applyBulkDiscount(5));
// console.log("discounts for physical products:",PhysicalProduct1.name ,PhysicalProduct1.applyBulkDiscount(20));






