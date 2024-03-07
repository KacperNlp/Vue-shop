import { defineStore } from 'pinia'
import type { NavigationStoreSetup } from '@/types/types';

export const useWebsiteNavigation = defineStore('websiteNavigation', {
    state: (): NavigationStoreSetup => {
        return {
            mainNav:  [
                {
                    url: "/",
                    name: "Home",
                    isVisibleOnDesktop: true,
                },
                {
                    url: "/products",
                    name: "Products",
                    isVisibleOnDesktop: true,
                },
                {
                    url: "/categories",
                    name: "Categories",
                    isVisibleOnDesktop: true,
                },
                {
                    url: "/contact",
                    name: "Contact",
                    isVisibleOnDesktop: true,
                },
                {
                    url: "/wishlist",
                    name: "Wishlist",
                    isVisibleOnDesktop: false,
                },
                {
                    url: "/account",
                    name: "My Account",
                    isVisibleOnDesktop: false,
                },
            ]
        }
    }
})