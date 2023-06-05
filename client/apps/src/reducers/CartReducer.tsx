import { CartAction, CartItem } from "../types/Cart"
import { Item } from "../types/Item"

type Action ={
    payload: {
        item:CartItem},
    type: CartAction
}

export let initialCartState: never

export function cartReducer(cartState:[CartItem] | [], action:Action ){
    switch(action.type){
        case CartAction.ADD_TO_CART:
            action.payload.item.cartItemQuantity = 1
            if( cartState && cartState.length > 0){
                const cartItems = [...cartState, action.payload.item]
                console.log(cartItems)
                return [...new Set(cartItems)]
            }
            return [action.payload.item]
        
        case CartAction.REMOVE_FROM_CART:
            const itemIndex = cartState.findIndex((cartItem)=> cartItem.id == action.payload.item.id)
            const newCart = cartState.splice(itemIndex, 1)
            return [...cartState]


        // case CartAction.INCREASE_CARTITEM_QTY:
            
            
        default:
            return cartState
    }
}

function cartHasItem(item: Item, cartState:[Item] | []): boolean{
   return cartState.find((cartItem)=> cartItem.id == item.id) != null
}