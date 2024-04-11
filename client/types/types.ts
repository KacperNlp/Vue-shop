type NavigationElement = {
    url: string,
    name: string,
    isVisibleOnDesktop: boolean
}

type NavigationStoreSetup = {
    mainNav: NavigationElement[]
}

type ProductReviewsSummary = {
    numberOfReviews: number,
    review: number
}

type Product = {
    id: string,
    name: string,
    price: number,
    discount: null | number,
    img: string,
    reviews: ProductReviewsSummary
}

export type {
    NavigationElement,
    NavigationStoreSetup,
    ProductReviewsSummary,
    Product
}