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

type ImageObject = {
    id: number,
    attributes: {
        url: string,
    }
}

type ProductAttributes = {
    name: string,
    shortDesc: string,
    description: string,
    price: number,
    discount: null | number,
    images: {
        data: ImageObject[]
    },
    isNew: boolean,
    reviews: ProductReviewsSummary,
    category: {
        data: Category[]
    },
    sku: string,
    stock: number,
}

type Product = {
    id: string,
    attributes: ProductAttributes
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

interface ImgObject {
    data: {
        id: number,
        attributes: {
            url: string
        }
    }
}

interface Category {
    attributes: {
        name: string,
        img?: ImgObject,
        url: string,
        key: string
    }
    id: number
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
    ProductAttributes,
    BreadcrumbType,
    CartStore,
    AddedProduct,
    UserLogin,
    UserRegister,
    Category,
    Resource,
    ImageObject
}