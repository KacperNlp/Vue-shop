declare global {
    type Product = {
        id: string,
        name: string
        price: number
        promotionalPrice: number
        stock: number
    };

    type ShopState = {
        products: Product[]
        sortBy: 'lowest-price' | 'highest-price' | 'a-z' | 'z-a' | 'promotional'
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
    }

    interface MainGetters {
        shop: ShopGetters
    }
}

export { Product, ShopState, CartState, Filter, Currency, CurrencyLocation, NextPrevStep, ShopGetters, MainGetters };