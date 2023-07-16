import { CartItem } from "./Cart"

export type Order = {
    _id: string,
    name: string,
    cartItems: [string]
    status: Status,
    contact: CustomerContact,
    at: Date,
    by: string
}

enum Status {
    PENDING,
    ACCEPTED,
    CANCELLED
}

type CustomerContact ={
    address: Address,
    telephone: string,
    email: string,
    city: string,
    country: string
}

type Address = {
    line1: string
}