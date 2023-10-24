export const state = () => ({
    items: [],
})

export const mutations = {
    addProduct(state, id) {
        const addedProduct = { id, count: 1 }
        state.items.push(addedProduct)
    },

    increaseProduct(state, idOfProduct) {
        state.items[idOfProduct].count += 1
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
    },
}
