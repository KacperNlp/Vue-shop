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
}

export const mutations = {
    addProduct({ items }, { id, price, promotionalPrice }) {
        const addedProduct = { id, name, price, promotionalPrice, stock: 1 }
        items.push(addedProduct)
    },

    increaseProduct({ items }, idOfProduct) {
        items[idOfProduct].stock += 1
    },
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
}
