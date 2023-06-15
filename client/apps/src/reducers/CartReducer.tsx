import { CartAction, CartItem } from "../types/Cart"
import { Item } from "../types/Item"

type Action ={
    payload: {
        item:CartItem,
    },
    type: CartAction
}
type CartState = {
    cartItems: [CartItem],
    cartPrice: number
}
export let initialCartState: never

export function cartReducer(cartState:CartState , action:Action ){
    let itemIndex:number
    switch(action.type){
        case CartAction.ADD_TO_CART:
            action.payload.item.cartItemQuantity = 1
            if( cartState && cartState.cartItems.length > 0){
                const cartItems = [...cartState.cartItems, action.payload.item]
                const cartPrice = cartItems.map((item)=>{
                    return +item.price! * item.cartItemQuantity
                })
                const cartTotalPrice = cartPrice.reduce((prev, next) => prev! + next!)
                return {cartItems, cartPrice: cartTotalPrice.toFixed(2)}
            }
            return {cartItems: [action.payload.item], cartPrice: parseInt(action.payload.item.price!).toFixed(2)}
        
        case CartAction.REMOVE_FROM_CART:
            itemIndex =  cartState.cartItems.findIndex((cartItem)=> cartItem._id == action.payload.item?.id)
            cartState.cartItems.splice(itemIndex, 1)
            cartState.cartPrice -= +cartState.cartItems[itemIndex].price!
            return {...cartState}

        case CartAction.INCREASE_QUANTITY:
            itemIndex =  cartState.cartItems.findIndex((cartItem)=> cartItem._id == action.payload.item?._id)
            cartState.cartItems[itemIndex].quantity! += 1
            cartState.cartPrice +=  +cartState.cartItems[itemIndex].price!
            return {...cartState}

        default:
            return cartState
    }
}

function cartHasItem(item: Item, cartState:[Item] | []): boolean{
   return cartState.find((cartItem)=> cartItem.id == item.id) != null
}