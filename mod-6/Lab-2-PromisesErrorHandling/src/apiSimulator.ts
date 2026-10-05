// Part 2: Implement API Simulation Functions
// fetchProductCatalog(): Simulates fetching a list of products, each with id, name, and price.
// Resolve the Promise with an array of mock products after a 1-second delay.
// Use Math.random() to sometimes reject the Promise with an error message, e.g., "Failed to fetch product catalog".

export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            } else {
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};


console.log("Starting ..fetchProductCatalog.");

fetchProductCatalog()
    .then((prodCatg) => {
        console.log("Product Catalog ==>:", prodCatg);
    })
    .catch((error) => {
        console.error("Error ==>:", error);
    });

console.log(".. fetchProductCatalog? ..");



// fetchProductReviews(productId: number): Simulates fetching reviews for a product.
// Resolve the Promise with an array of reviews after a 1.5-second delay.
// Reject the Promise randomly with an error message, e.g., "Failed to fetch reviews for product ID ${productId}".

export const fetchProductReviews = (productId: number): Promise<{ productId: number; rating: number; comment: string }[]> => {
     return new Promise((resolve, reject) => {
        
     setTimeout(() => {

        if (Math.random() < 0.8) {
                resolve([
                          { productId:1, rating:5, comment: "Good product" },
                          { productId:1, rating:2, comment: "I am not satisfied with the quality"},
                        ]);
        } else {
                reject(`Failed to fetch reviews for product id: ${productId}`);
               }
        }, 1500)
    });

};

console.log("Starting ..fetchProductReviews.");

fetchProductReviews(1)
    .then((reviews) => {
        console.log("Reviews ==>:", reviews);
    })
    .catch((error) => {
        console.error("Error ==>:", error);
    });

console.log(".. fetchProductReviews? ..");


// fetchSalesReport(): Simulates fetching a sales report with totalSales, unitsSold, and averagePrice.
// Resolve the Promise with a mock sales report after a 1-second delay.
// Reject randomly with an error message, e.g., "Failed to fetch sales report".

export const fetchSalesReport = (): Promise<{ totalSales: number; unitSold: number; averagePrice: number }> => {
     return new Promise((resolve, reject) => {
        
     setTimeout(() => {

        if (Math.random() < 0.8) {
                resolve({ totalSales:20000, unitSold:550, averagePrice: 45 },
                        
                        );
        } else {
                reject("Failed to fetch sales report");
               }
        }, 1000)
    });

};

console.log("Starting ..fetchSalesReport.");
fetchSalesReport()
    .then((salesReport) => {
        console.log("Sales Report ==>:", salesReport);
    })
    .catch((error) => {
        console.error("Error ==>:", error);
    });
console.log(".. fetchSalesReport? ..");


