import Product from "./Product.js";
declare class PhysicalProduct extends Product {
    weight: number;
    constructor(sku: string, name: string, price: number, weight: number);
    getPriceWithTax(): number;
    get formattedWeightKg(): string;
}
export default PhysicalProduct;
//# sourceMappingURL=PhysicalProduct.d.ts.map