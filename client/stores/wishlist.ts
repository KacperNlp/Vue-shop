import { defineStore } from 'pinia';
import type { WishlistStore } from '@/types/types';

const config = useRuntimeConfig();
const headers = {
    Authorization: `bearer ${config.public.apiKey}`,
};

export const useWishlist = defineStore('wishlist', {
    state: (): WishlistStore => {
        return {
            productsList: []
        }
    },

    getters: {
        getProductsList: (state) => {
            return state.productsList;
        }
    },

    actions: {
        async addProductToWishlist() {
            try {
                await useFetch('/wishlist')
            } catch(err) {
                console.log(err);
            }
        },

        async fetchProductsList() {
            try {
                const { data } = await useAPIFetch(`/wishlists?user=4`);
                console.log(data)
                this.productsList = data ? data : [];
            } catch(err) {
                console.log(err)
            }
        }
    }
})