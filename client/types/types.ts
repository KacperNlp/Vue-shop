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
        data: ImageObject[] | null
    },
    thumbnail: string,
    isNew: boolean,
    reviews: ProductReviewsSummary | null,
    category: {
        data: Category[] | null
    },
    sku: string,
    stock: number,
}

type Product = {
    id: string | number,
    attributes: ProductAttributes
}

type BreadcrumbType = {
    name: string,
    path: string
}

interface AddedProduct {
    id: string,
    name: string,
    price: number,
    discount: null | number,
    thumbnail: string,
    reviews: ProductReviewsSummary | null,
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

interface UserData {
    blocked: boolean
    confirmed: boolean
    createdAt: string
    email: string
    id: string | number
    name: string
    surname: string
    username: string
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

interface MessageFormData {
    name: string,
    email: string,
    phone: string,
    message: string,
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
    UserData,
    Category,
    Resource,
    ImageObject,
    MessageFormData
}