export const state = () => ({
    products: [
        {
            id: 'ball',
            name: 'Ball',
            price: 15.99,
            promotionalPrice: 12.99,
            stock: 16,
            media: '~/assets/product.jpg',
        },
        {
            id: 'cup',
            name: 'Cup',
            price: 28.99,
            promotionalPrice: 11.99,
            stock: 85,
            media: '~/assets/product.jpg',
        },
        {
            id: 'socks',
            name: 'Socks',
            price: 12.0,
            promotionalPrice: 12.0,
            stock: 5,
            media: '~/assets/product.jpg',
        },
        {
            id: 'trousers',
            name: 'Trousers',
            price: 99.0,
            promotionalPrice: 90.0,
            stock: 14,
            media: '~/assets/product.jpg',
        },
        {
            id: 'socks2',
            name: 'Socks2',
            price: 12.0,
            promotionalPrice: 12.0,
            stock: 5,
            media: '~/assets/product.jpg',
        },
        {
            id: 'trousers2',
            name: 'Trousers2',
            price: 99.0,
            promotionalPrice: 90.0,
            stock: 14,
            media: '~/assets/product.jpg',
        },
    ],
})

export const getters = {
    getPromotedProducts({ products }) {
        const promotedProducts = products.filter(
            (product) => product.price > product.promotionalPrice && product.stock > 0,
        )
        return promotedProducts
    },

    getAllProducts({ products }) {
        const promotedProducts = products.filter((product) => product.stock > 0)
        return promotedProducts
    },

    getProductById:
        ({ products }) =>
        (id) => {
            return products.find((product) => product.id === id)
        },
}

export const mutations = {
    decreaseProduct({ products }, id) {
        products.forEach((item) => {
            if (id === item.id) --item.stock
        })
    },
}
