export const state = () => ({
    items: [],
})

export const getters = {
    getProducts({ items }) {
        return items
    },

    getNumberOfProductsInCart({ items }) {
        let numberOfProducts = 0
        items.forEach((item) => (numberOfProducts += item.stock))
        return numberOfProducts
    },

    getProductById:
        ({ items }) =>
        (id) => {
            return items.find((item) => item.id === id)
        },

    getProductStock:
        ({ items }) =>
        (id) => {
            const item = items.find((item) => item.id === id)
            return item.stock
        },

    getSummaryPrice({ items }) {
        const summaryPrice = { price: 0, promotionalPrice: 0 }
        items.forEach(({ stock, price, promotionalPrice }) => {
            summaryPrice.price += stock * price
            summaryPrice.promotionalPrice += stock * promotionalPrice
        })

        return summaryPrice
    },
}

export const mutations = {
    addProduct({ items }, { id, price, promotionalPrice, stock }) {
        const addedProduct = { id, name, price, promotionalPrice, stock }
        items.push(addedProduct)
    },

    increaseProduct({ items }, { idOfProduct, stock }) {
        items[idOfProduct].stock += stock
    },

    removeItemFromCart(state, cartItemsWithoutRemovedItem) {
        state.items = cartItemsWithoutRemovedItem
    },

    changeItemStock(state, { index, newValue }) {
        const cartItems = [...state.items]
        cartItems[index].stock = newValue

        state.items = cartItems.filter(({ stock }) => stock > 0)
    },
}

export const actions = {
    addProduct({ state, commit, rootGetters }, { id, stock }) {
        const { items } = state
        const indexOfExistingProductInCart = items.findIndex((item) => item.id === id)

        if (indexOfExistingProductInCart > -1) {
            commit('increaseProduct', { idOfProduct: indexOfExistingProductInCart, stock })
        } else {
            const { name, price, promotionalPrice } = rootGetters['shop/getProductById'](id)
            commit('addProduct', { id, name, price, promotionalPrice, stock })
        }

        commit('shop/decreaseProduct', { id: id, stock }, { root: true })
    },

    removeItemFromCart({ state, commit }, id) {
        const cartItems = state.items.filter((item) => id !== item.id)

        commit('removeItemFromCart', cartItems)
    },

    changeItemStock({ state, commit }, { id, newValue }) {
        const index = state.items.findIndex((item) => id === item.id)
        commit('changeItemStock', { index, newValue })
    },
}
