import calculateTax from "./utils/taxCalculator.js";
import fetchDataAPI from "./services/apiServices.js";
import Product from "./models/Product.js";
import { NetworkError, TaxCalculationError } from "./utils/errorHandler.js";
import { DataError } from "./utils/errorHandler.js";

async function main() {

    try {

        //get data product  from API
        const data = await fetchDataAPI();

        // create the object using the API data
        const product1 = new Product(data.id, data.sku, data.title, data.price, data.discountPercentage, data.category);

        console.log(product1);

        // test
        console.log("Product 1:", product1.displayDetails());
        console.log("Price with discount ====>:", product1.getPriceWithDiscount());

        const taxvalue = calculateTax(product1.price, product1.category)

        console.log("Tax value beauty: $", taxvalue);

    } catch (error) {

        if (error instanceof NetworkError) {
            console.error("Network error:", error.message);

        } else if (error instanceof DataError) {
            console.error("Data error:", error.message);

        } else if (error instanceof TaxCalculationError) {
            console.log("Tax calculation error:", error.message);

        } else {
            console.error("Unknown error:", error);
        }

    }

}

main();