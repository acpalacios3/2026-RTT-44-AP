import Product from "./Product.js";

// a new DigitalProduct class that extends Product (has all the same properties and methods as Product)
class DigitalProduct extends Product {

    // unique property to the DigitalProduct 
    fileSize: number;

    constructor(sku:string, name: string, price: number, fileSize: number) {
        
        // passing the name and price values to the parent contructor
        super(sku, name, price); // super refers to the parent class (Product)
     
        // assign the value of the fileSize property
        this.fileSize = fileSize;
    }

    // "override" use for overrides the parent "Product" function
    override getPriceWithTax():number{
        console.log("DigitalProduct-getPriceWithTax override:","price does not include taxRate");
        return this.price;
    }
    
    //get allows you to use the function as a property and not as a function
    get formattedWeight(): string {
        return `${this.fileSize} MB`;
    }
    
   
}

 export default DigitalProduct;
 
// create the object using the class (Product) ( creating an instance of the Product class)
const DigitalProduct1 = new DigitalProduct("50","E-books", 40, 150); // instantiation
const DigitalProduct2 = new DigitalProduct("60","Online courses", 100,500 );


// console.log("Digital Product 1:",DigitalProduct1.displayDetails(),"no tax",DigitalProduct1.getPriceWithTax(), DigitalProduct1.formattedWeight);
// console.log("Digital Product 2:",DigitalProduct2.displayDetails(),"no tax",DigitalProduct2.getPriceWithTax(), DigitalProduct2.formattedWeight);



