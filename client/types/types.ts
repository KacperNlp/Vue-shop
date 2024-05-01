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

interface UserLogin  {
    userName: string,
    password: string
}

interface UserRegister extends UserLogin  {
    passwordRepeat: string,
    email: string,
    name: string,
    surname: string
}

interface Category {
    name: string,
    img: string
}

interface Resource<T> {
    data: T,
    meta: {
        page: number,
        pageSize: number, 
        pageCount: number, 
        total: number
    }
}

export type {
    NavigationElement,
    NavigationStoreSetup,
    ProductReviewsSummary,
    Product,
    BreadcrumbType,
    CartStore,
    AddedProduct,
    UserLogin,
    UserRegister,
    Category,
    Resource
}