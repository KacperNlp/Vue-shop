import { Currency, CurrencyLocation } from "~/types"

export const useCurrencyConverter = (value: number, locales: CurrencyLocation, currencyType: Currency) => {
    const numberFormatter = Intl.NumberFormat(locales, {
        style: 'currency',
        currency: currencyType
    });

    return numberFormatter.format(value);
}