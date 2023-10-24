export const state = () => ({
    items: [],
})

export const mutations = {
    addProduct({ items }, id) {
        const addedProduct = { id, count: 1 }
        items.push(addedProduct)
    },

    increaseProduct({ items }, idOfProduct) {
        items[idOfProduct].count += 1
    },
}

export const actions = {
    addProduct({ state, commit }, id) {
        const { items } = state
        const indexOfExistingProductInCart = items.findIndex((item) => item.id === id)

        if (indexOfExistingProductInCart > -1) {
            commit('increaseProduct', indexOfExistingProductInCart)
        } else {
            commit('addProduct', id)
        }

        commit('shop/decreaseProduct', id, { root: true })
    },
}
