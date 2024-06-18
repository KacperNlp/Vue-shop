import type { Product } from "@/types/types";

export const useMinMaxPrice = (products: Product[]): number[] => {
    if (!products.length) return [0, 0]

    let min = null;
    let max = null;
  
    for (let product of products) {
      let price = product.price;
      let discount = product.discount;
  
      let finalPrice = (discount && discount > 0) ? discount : price;
  
      if (min === null || finalPrice < min) min = finalPrice;
      if (max === null || finalPrice > max) max = finalPrice;
    }
  
    if (!min || !max) 
      return [10, 100];
  
    return [min, max];
}