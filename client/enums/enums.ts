enum HeadlinesTypes {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6'
}

enum OrderStatus {
    InProgress = 'InProgress',
    Done = 'Done',
    Delivered = 'InProgress',
}

const OrderStatusText = [
    {
        name: OrderStatus.InProgress,
        text: 'W trakcie realizacji'
    },
    {
        name: OrderStatus.Done,
        text: 'Gotowe do wysyłki'
    },
    {
        name: OrderStatus.Delivered,
        text: 'Dostarczone'
    }
]

export {
    HeadlinesTypes,
    OrderStatus,
    OrderStatusText
}