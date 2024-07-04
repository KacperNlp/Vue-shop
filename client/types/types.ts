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
    url: string,
}

type Product = {
    id: string | number,
    name: string,
    shortDesc: string,
    description: string,
    price: number,
    discount: null | number,
    images:  ImageObject[] | null,
    thumbnail: string,
    isNew: boolean,
    reviews: ProductReviewsSummary | null,
    category: {
        data: Category[] | null
    },
    sku: string,
    stock: number,
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

type WishlistStore = {
    wishlistId: number | null,
    productsList: Product[],
    productsListIds: (number | string)[],
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

interface UserReview {
    text: string,
    rating: number,
    user: number | null | string
}

export type {
    NavigationElement,
    NavigationStoreSetup,
    ProductReviewsSummary,
    Product,
    BreadcrumbType,
    CartStore,
    WishlistStore,
    AddedProduct,
    UserLogin,
    UserRegister,
    UserData,
    Category,
    Resource,
    ImageObject,
    MessageFormData,
    UserReview
}