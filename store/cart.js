export const state = () => ({
    items: [],
})

export const getters = {
    getProducts({ items }) {
        return items
    },
}

export const mutations = {
    addProduct({ items }, { id, price, promotionalPrice }) {
        const addedProduct = { id, price, promotionalPrice, stock: 1 }
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
            const { price, promotionalPrice } = rootGetters['shop/getProductById'](id)
            commit('addProduct', { id, price, promotionalPrice })
        }

        commit('shop/decreaseProduct', id, { root: true })
    },
}
