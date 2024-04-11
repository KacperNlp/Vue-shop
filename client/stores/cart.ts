import { defineStore } from 'pinia'
import type { CartStore, AddedProduct } from '@/types/types';

export const useCart = defineStore('cart', {
    state: (): CartStore => {
        return {
            addedProducts:  []
        }
    },

    actions: {
        addProductToCart(product: AddedProduct) {
            const indexOfProduct = this.addedProducts.findIndex(productInCart => productInCart.id === product.id);

            if(indexOfProduct) {
                this.addedProducts[indexOfProduct].quantity += product.quantity;
            } else {
                const addedProduct = {
                    ...product,
                }

                this.addedProducts.push(addedProduct);
            }
        }
    }
})