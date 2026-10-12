declare class Product {
    id: number;
    sku: string;
    title: string;
    price: number;
    discountPercentage: number;
    category: string;
    constructor(id: number, sku: string, title: string, price: number, discountPercentage: number, category: string);
    displayDetails(): string;
    getPriceWithDiscount(): number;
}
export default Product;
//# sourceMappingURL=Product.d.ts.map