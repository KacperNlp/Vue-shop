import { defineStore } from 'pinia'
import type { CartStore, AddedProduct } from '@/types/types';

export const useCart = defineStore('cart', {
    state: (): CartStore => {
        return {
            addedProducts:  []
        }
    },

    getters: {
        numberOfProductsAddedToCart: (state) => {
            let addedProducts = 0;
            state.addedProducts.forEach(({ quantity }) => addedProducts += quantity);

            return addedProducts;
        },

        getCartTotalAmount: (state) => {
            let amount = 0;

            state.addedProducts.forEach( ({ discount, price, quantity }) => {
                if(discount) {
                    amount += discount * quantity
                } else {
                    amount += price * quantity
                }
            })

            return amount;
        }
    },

    actions: {
        addProductToCart(product: AddedProduct) {
            const indexOfProduct = this.addedProducts.findIndex(productInCart => productInCart.id === product.id);

            if(indexOfProduct >= 0) {
                this.addedProducts[indexOfProduct].quantity += product.quantity;
            } else {
                const addedProduct = {
                    ...product,
                }

                this.addedProducts.push(addedProduct);
            }
        },

        removeProductFromCart(productId: string) {
            const productsInCart = this.addedProducts.filter(({ id }) => id !== productId);

            this.addedProducts = productsInCart;
        },

        changeProductQuantity(productId: string, quantity: number) {
            const indexOfProduct = this.addedProducts.findIndex(({ id }) => id === productId);
            this.addedProducts[indexOfProduct].quantity = quantity;
        },

        clearWholeCart() {
            console.log(this.addedProducts)
        },
    }
})