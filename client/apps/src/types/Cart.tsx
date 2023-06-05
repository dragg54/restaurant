import { Item } from "./Item";

export enum CartAction{
    ADD_TO_CART,
    REMOVE_FROM_CART
}

export interface CartItem extends Item{
    cartItemQuantity: number
}