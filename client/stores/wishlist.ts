import { defineStore } from 'pinia';
import type { WishlistStore } from '@/types/types';

const config = useRuntimeConfig();
const headers = {
    Authorization: `bearer ${config.public.apiKey}`,
};

export const useWishlist = defineStore('wishlist', {
    state: (): WishlistStore => {
        return {
            wishlistId: null,
            productsList: [],
            productsListIds: [],
        }
    },

    getters: {
        getProductsList: (state) => {
            return state.productsList;
        },

        getProductsIdsList: (state) => {
            return state.productsListIds;
        }
    },

    actions: {
        async addProductToWishlist(productId: number) {
            try {
                if(this.productsListIds.includes(productId)) {
                    return;
                }

                this.productsListIds.push(productId)

                $fetch(`${config.public.baseURL}/wishlists/${this.wishlistId}`, {
                    method: "PUT",
                    headers: {
                        Authorization: `bearer ${config.public.apiKey}`,
                    },
                    body: {
                      data: {
                        products: this.productsListIds
                      }
                    }
                });
            } catch(err) {
                console.error(err);
            }
        },

        async removeProductFromWishlist(productId: number) {
            try {
                const filteredProducts = this.productsListIds.filter((id) => id !== productId)
                this.productsListIds = filteredProducts;

                $fetch(`${config.public.baseURL}/wishlists/${this.wishlistId}`, {
                    method: "PUT",
                    headers: {
                        Authorization: `bearer ${config.public.apiKey}`,
                    },
                    body: {
                      data: {
                        products: this.productsListIds
                      }
                    }
                });
            } catch(err) {
                console.error(err);
            }
        },

        async fetchProductsList() {
            try {
                const data = await useAPIFetch(`/wishlists?filters[user][id][$eq]=4&populate[products][populate]=images`);
                this.productsList = data[0].attributes.products.data || [];
                this.wishlistId = data[0].id;

                if(this.productsList.length) {
                    this.productsListIds = this.productsList.map(({ id }) => id)
                }
            } catch(err) {
                console.error(err)
            }
        }
    }
})