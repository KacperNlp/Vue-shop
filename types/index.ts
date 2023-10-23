declare global {
    type Product = {
        id: string,
        name: string
        price: number
        promotion: number
        stock: number
    };

    type Currency = 'GBP' | 'USD' | 'PLN' | 'EUR';
    type CurrencyLocation = 'en-GB' | 'en-US' | 'en-PL' | 'en-DE';
}

export { Product, Currency, CurrencyLocation };