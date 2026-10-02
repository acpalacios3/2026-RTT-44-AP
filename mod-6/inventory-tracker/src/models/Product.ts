// blueprint for creating objects (cookie cutter is used to create cookies)
class Product {

    // the properties of the object (not yet created)
    sku: string;
    name: string;
    price: number;
    
    // built-in method of our class that helps us create the object
    constructor(sku: string, name: string, price: number) {

        // assigning values to our properties
        this.sku = sku; // the "this" keyword refers to the current object being created
        this.name = name;
        this.price = price;
       
    }

    // any object we create from this class will include this method (displayDetails)
    displayDetails(): string {
        return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price}`;
    }


    getPriceWithTax(): number{
        
       const taxRate = 0.08;
       console.log("Product-getPriceWithTax: ","taxRate",(taxRate + 1));
       return  this.price * (taxRate + 1);

    }

}

// create the object using the class (Product) ( creating an instance of the Product class)
// const product1 = new Product("10","Iphone", 1000); 
// const product2 = new Product("20","tablet", 450 );

// test
// console.log("Product 1:",product1.displayDetails());
// console.log("Product 2:",product2.displayDetails());

 export default Product;



