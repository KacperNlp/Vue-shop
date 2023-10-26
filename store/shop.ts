import { Product, ShopState, ShopGetters } from '~/types/index';
import { FilterTypes } from '~/types/enums';

export const state = (): ShopState => ({
    products: [
        {
            id: 'ball',
            name: 'Ball',
            price: 15.99,
            promotionalPrice: 12.99,
            stock: 16,
        },
        {
            id: 'cup',
            name: 'Cup',
            price: 28.99,
            promotionalPrice: 11.99,
            stock: 85,
        },
        {
            id: 'socks',
            name: 'Socks',
            price: 12.0,
            promotionalPrice: 12.0,
            stock: 5,
        },
        {
            id: 'trousers',
            name: 'Trousers',
            price: 99.0,
            promotionalPrice: 90.0,
            stock: 14,
        },
        {
            id: 'socks2',
            name: 'Socks2',
            price: 12.0,
            promotionalPrice: 12.0,
            stock: 5,
        },
        {
            id: 'trousers2',
            name: 'Trousers2',
            price: 99.0,
            promotionalPrice: 90.0,
            stock: 14,
        },
    ],
    sortBy: 'a-z'
})

export const getters: ShopGetters = {
    getPromotedProducts({ products }) {
        const promotedProducts = products.filter(
            (product: Product) => product.price > product.promotionalPrice && product.stock > 0,
        )
        return promotedProducts
    },

    getAllProducts({ products }) {
        const productsAfterFiltr = products.filter((product: Product) => product.stock > 0)
        return productsAfterFiltr
    },

    getProductById:
        ({ products }: ShopState) =>
        (id: string) => {
            return products.find((product: Product) => product.id === id)
        },
}

export const mutations = {
    decreaseProduct({ products }: ShopState, id: string) {
        products.forEach((product: Product) => {
            if (id === product.id) --product.stock
        })
    },
}
