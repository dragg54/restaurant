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
                return [...new Set(cartItems)]
            }
            return [action.payload.item]
        
        case CartAction.REMOVE_FROM_CART:
            const itemIndex = cartState.findIndex((cartItem)=> cartItem._id == action.payload.item?.id)
            cartState.splice(itemIndex, 1)
            console.log(cartState)
            return [...cartState]
            
            
        default:
            return cartState
    }
}

function cartHasItem(item: Item, cartState:[Item] | []): boolean{
   return cartState.find((cartItem)=> cartItem.id == item.id) != null
}