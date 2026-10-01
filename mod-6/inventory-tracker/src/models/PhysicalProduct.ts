import Product from "./Product.js";

// a new DigitalProduct class that extends Product (has all the same properties and methods as Product)

class PhysicalProduct extends Product {

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
        console.log("PhysicalProducts-getPriceWithTax - price with tax:",(taxRate + 1));
        return this.price * (taxRate + 1);
    }
    
    //get allows you to use the function as a property and not as a function
    get formattedWeight(): string {
        return `${this.weight} kg`;
    }
  
}

// create the object using the class (Product) ( creating an instance of the Product class)
const PhysicalProduct1 = new PhysicalProduct("30","Laptop", 1200, 5); // instantiation
const PhysicalProduct2 = new PhysicalProduct("40","TV", 500,20 );

// test
// console.log("Physical Product 1:",PhysicalProduct1.displayDetails(),PhysicalProduct1.getPriceWithTax(), PhysicalProduct1.formattedWeight);
// console.log("Physical Product 2:",PhysicalProduct2.displayDetails(),PhysicalProduct2.getPriceWithTax(), PhysicalProduct2.formattedWeight);

export default PhysicalProduct;

