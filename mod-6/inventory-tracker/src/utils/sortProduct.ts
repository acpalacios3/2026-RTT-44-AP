import Product from "../models/Product.js";


 export function sortProducts( product : Product[], sort: "price"|"name"): Product[]{
  return [...product].sort((a, b) => {

        if (sort === "price") {
            return a.price - b.price;
        }

        return a.name.localeCompare(b.name);
    });

}


