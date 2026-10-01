import Product from "./Product.js";
declare class DigitalProduct extends Product {
    fileSize: number;
    constructor(sku: string, name: string, price: number, fileSize: number);
    getPriceWithTax(): number;
    get formattedWeightMB(): string;
}
export default DigitalProduct;
//# sourceMappingURL=DigitalProduct.d.ts.map