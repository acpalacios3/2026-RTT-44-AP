import { fetchProductCatalog } from "./apiSimulator.js";
import { fetchProductReviews } from "./apiSimulator.js";
import { fetchSalesReport } from "./apiSimulator.js";
import { NetworkError, DataError } from "./apiSimulator.js";
console.log("Starting ..fetchProductCatalog.");
fetchProductCatalog()
    .then((prodCatg) => {
    console.log("Product Catalog ==>:", prodCatg);
    // For each product, fetch the reviews using fetchProductReviews(productId).
    return Promise.all(prodCatg.map(prodCatg => {
        return fetchProductReviews(prodCatg.id);
    }));
})
    .then((reviews) => {
    console.error("Product Reviews ==>:", reviews);
    return fetchSalesReport();
})
    // retrieve the sales report using fetchSalesReport().
    .then((salesReport) => {
    console.error("Sales Report ==>:", salesReport);
})
    .catch((error) => {
    if (error instanceof NetworkError) {
        console.error("Network error:", error.message);
    }
    else if (error instanceof DataError) {
        console.error("Data error:", error.message);
    }
    else {
        console.error("Unknown error:", error);
    }
})
    .finally(() => {
    console.log("all API calls have been attempted");
});
console.log(".. fetchProductCatalog? ..");
//# sourceMappingURL=index.js.map