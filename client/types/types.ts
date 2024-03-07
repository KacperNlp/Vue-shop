type NavigationElement = {
    url: string,
    name: string,
    isVisibleOnDesktop: boolean
}

type NavigationStoreSetup = {
    mainNav: NavigationElement[]
}


export type {
    NavigationElement,
    NavigationStoreSetup
}