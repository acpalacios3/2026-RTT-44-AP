export declare class NetworkError extends Error {
    constructor(message: string);
}
export declare class DataError extends Error {
    constructor(message: string);
}
export declare const fetchProductCatalog: () => Promise<{
    id: number;
    name: string;
    price: number;
}[]>;
export declare const fetchProductReviews: (productId: number) => Promise<{
    productId: number;
    rating: number;
    comment: string;
}[]>;
export declare const fetchSalesReport: () => Promise<{
    totalSales: number;
    unitSold: number;
    averagePrice: number;
}>;
//# sourceMappingURL=apiSimulator.d.ts.map