import { defineStore } from 'pinia'
import type { CartStore, Product } from '@/types/types';

export const useCart = defineStore('cart', {
    state: (): CartStore => {
        return {
            addedProducts:  []
        }
    },

    actions: {
        addProductToCart(product: Product) {
            const indexOfProduct = this.addedProducts.findIndex(productInCart => productInCart.id === product.id);

            if(indexOfProduct) {
                this.addedProducts[indexOfProduct].quantity++;
            } else {
                const addedProduct = {
                    ...product,
                    quantity: 1
                }

                this.addedProducts.push(addedProduct);
            }
        }
    }
})