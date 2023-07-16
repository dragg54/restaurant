import { Item } from "./Item";

export enum CartAction{
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    REDUCE_QUANTITY,
    GET_CART_ITEMS
}

export interface CartItem extends Item{
    cartItemQuantity: number
}