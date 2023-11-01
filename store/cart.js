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

    getProductById: ({ items }) => (id) => {
        return items.find((item) => item.id === id)
    },

    getProductStock:  ({ items }) => (id) => {
        const item = items.find((item) => item.id === id)
        return item.stock
    },
}

export const mutations = {
    addProduct({ items }, { id, price, promotionalPrice }) {
        const addedProduct = { id, name, price, promotionalPrice, stock: 1 }
        items.push(addedProduct)
    },

    increaseProduct({ items }, idOfProduct) {
        items[idOfProduct].stock += 1
    },

    removeItemFromCart( state, cartItemsWithoutRemovedItem) {
        state.items = cartItemsWithoutRemovedItem;
    },

    changeItemStock( state, { index, newValue }) {
        state.items[index].stock = newValue;
    }
}

export const actions = {
    addProduct({ state, commit, rootGetters }, id) {
        const { items } = state
        const indexOfExistingProductInCart = items.findIndex((item) => item.id === id)

        if (indexOfExistingProductInCart > -1) {
            commit('increaseProduct', indexOfExistingProductInCart)
        } else {
            const { name, price, promotionalPrice } = rootGetters['shop/getProductById'](id)
            commit('addProduct', { id, name, price, promotionalPrice })
        }

        commit('shop/decreaseProduct', id, { root: true })
    },

    removeItemFromCart({ state, commit }, id) {
        const cartItems = state.items.filter(item => id !== item.id);

        commit('removeItemFromCart', cartItems)
    },

    changeItemStock({ state, commit }, { id, newValue }) {
        const index = state.items.findIndex( item => id === item.id);
        commit('changeItemStock', { index, newValue })
    }
}
