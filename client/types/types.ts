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

type BreadcrumbType = {
    name: string,
    path: string
}

interface AddedProduct extends Product {
    quantity: number
}

type CartStore = {
    addedProducts: AddedProduct[]
}

export type {
    NavigationElement,
    NavigationStoreSetup,
    ProductReviewsSummary,
    Product,
    BreadcrumbType,
    CartStore
}