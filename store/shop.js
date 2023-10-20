export const state = () => ({
    products: [
        {
            id: 'ball',
            name: 'Ball',
            price: 15.99,
            promotion: 12.99,
            stock: 16
        },
        {
            id: 'cup',
            name: 'Cup',
            price: 28.99,
            promotion: 11.99,
            stock: 85
        },
        {
            id: 'socks',
            name: 'Socks',
            price: 12.00,
            promotion: 12.00,
            stock: 5
        },
        {
            id: 'trousers',
            name: 'Trousers',
            price: 99.00,
            promotion: 90.00,
            stock: 14
        }
    ]
})

export const getters = {
    getPromotedProducts({ products }) {
      const promotedProducts = products.filter( product => product.price > product.promotion );
      return promotedProducts;
    },

    getProductById: ({ products }) => (id) => {
        return products.find(product => product.id === id)
    }
}
  