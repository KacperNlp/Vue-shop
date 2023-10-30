declare global {
    type Product = {
        id: string,
        name: string
        price: number
        promotionalPrice: number
        stock: number
    };

    type FilterTypes = 'lowest-price' | 'highest-price' | 'a-z' | 'z-a' | 'promotional';

    type ShopState = {
        products: Product[]
        sortBy: FilterTypes
    }

    type CartState = {
        items: [] | Product[]
    }

    type Filter = { name: string, id: string }

    type Currency = 'GBP' | 'USD' | 'PLN' | 'EUR';
    type CurrencyLocation = 'en-GB' | 'en-US' | 'en-PL' | 'en-DE';

    type NextPrevStep = 'next' | 'prev'

    interface ShopGetters {
        getPromotedProducts(state: ShopState): Product[];
        getAllProducts(state: ShopState): Product[];
        getProductById(state: ShopState): (id: string) => Product | undefined;
        getCurrentFilter(state: ShopState): FilterTypes
    }

    interface MainGetters {
        shop: ShopGetters
    }
}

export { Product, FilterTypes, ShopState, CartState, Filter, Currency, CurrencyLocation, NextPrevStep, ShopGetters, MainGetters };