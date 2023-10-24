declare global {
    type Product = {
        id: string,
        name: string
        price: number
        promotionalPrice: number
        stock: number
    };

    type Currency = 'GBP' | 'USD' | 'PLN' | 'EUR';
    type CurrencyLocation = 'en-GB' | 'en-US' | 'en-PL' | 'en-DE';

    type NextPrevStep = 'next' | 'prev'
}

export { Product, Currency, CurrencyLocation, NextPrevStep };