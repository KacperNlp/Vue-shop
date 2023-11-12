import { Product, FilterTypes, ShopState, ShopGetters } from '~/types/index';
import { FilterTypesStatic } from '~/types/enums';
import { ActionContext } from 'vuex';

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

    getAllProducts({ products, sortBy }) {
        const { LowestPrice, HighestPrice, AToZ, ZToA, Promotional } = FilterTypesStatic;
        const productsAfterFiltr = products.filter((product: Product) => product.stock > 0)

        switch(sortBy) {
            case LowestPrice: 
                productsAfterFiltr.sort((a,b) => a.promotionalPrice - b.promotionalPrice);
            break;
            case HighestPrice: 
                productsAfterFiltr.sort((a,b) => b.promotionalPrice - a.promotionalPrice);
            break;
            case AToZ: 
                productsAfterFiltr.sort((a,b) => a.name.localeCompare(b.name));
            break;
            case ZToA: 
                productsAfterFiltr.sort((a,b) => b.name.localeCompare(a.name));
            break;
            case Promotional: 
                productsAfterFiltr.sort((a,b) =>  {
                    if(a.price > a.promotionalPrice && b.price > b.promotionalPrice) {
                        return a.promotionalPrice - b.promotionalPrice;
                    } else if (a.price > a.promotionalPrice) {
                        return -1
                    } else {
                        return 1
                    }
                });
            break;
        }

        return productsAfterFiltr
    },

    getProductById:
        ({ products }: ShopState) =>
        (id: string) => {
            return products.find((product: Product) => product.id === id)
        },

    getCurrentFilter({ sortBy }) {
        return sortBy;
    }
}

export const mutations = {
    decreaseProduct({ products }: ShopState, { id, stock }: {id: string, stock: number}) {
        products.forEach((product: Product) => {
            if (id === product.id) product.stock -= stock
        })
    },

    changeFilter(state: ShopState, newSortyByValue: FilterTypes) {
        state.sortBy = newSortyByValue;
    }
}

export const actions = {
    changeFilter({ commit }: ActionContext<ShopState, ShopState>, filterId: FilterTypes) {
        commit('changeFilter', filterId)
    }
}
