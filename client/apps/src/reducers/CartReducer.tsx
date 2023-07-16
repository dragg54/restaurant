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

export function cartReducer(cartState:CartState = initialCartState , action:Action ){
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
                localStorage.setItem("items", JSON.stringify( {cartItems, cartPrice: cartTotalPrice}))
                return {cartItems, cartPrice: cartTotalPrice}
            }
            localStorage.setItem("items", JSON.stringify( {cartItems: [action.payload.item], cartPrice: parseFloat(action.payload.item.price!)}))
            return {cartItems: [action.payload.item], cartPrice: parseFloat(action.payload.item.price!)}

        case CartAction.GET_CART_ITEMS:
            const localStorageItems = JSON.parse(localStorage.getItem("items")!)
            console.log(localStorageItems)
            if(localStorageItems != null ){
                return {cartItems: [...localStorageItems.cartItems], cartPrice: localStorageItems.cartPrice}
            }
            else{
                return {cartItems:[], cartPrice: 0}
            }
        
        case CartAction.REMOVE_FROM_CART:
            itemIndex =  cartState.cartItems.findIndex((cartItem)=> cartItem._id == action.payload.item?._id)
            const itemPrice = +cartState.cartItems[itemIndex]?.price!
            const itemQty = cartState.cartItems[itemIndex]?.cartItemQuantity
            cartState.cartPrice = +cartState.cartPrice - (itemPrice! * itemQty!)
            cartState.cartItems.splice(itemIndex, 1)
            localStorage.setItem("items", JSON.stringify( {cartItems: cartState.cartItems, cartPrice: cartState.cartPrice}))
            return {...cartState}

        case CartAction.INCREASE_QUANTITY:
            itemIndex =  cartState.cartItems.findIndex((cartItem)=> cartItem._id == action.payload.item?._id)
            cartState.cartItems[itemIndex].cartItemQuantity! += 1
            cartState.cartPrice = +cartState.cartPrice +  +(cartState.cartItems[itemIndex].price!)
            localStorage.setItem("items", JSON.stringify( {cartItems: cartState.cartItems, cartPrice: cartState.cartPrice}))
            return {...cartState}

            case CartAction.REDUCE_QUANTITY:
                itemIndex =  cartState.cartItems.findIndex((cartItem)=> cartItem._id == action.payload.item?._id)
                if(cartState.cartItems[itemIndex].cartItemQuantity! > 0){
                    cartState.cartItems[itemIndex].cartItemQuantity! -= 1
                    cartState.cartPrice = +cartState.cartPrice - +(cartState.cartItems[itemIndex].price!)
                }
                localStorage.setItem("items", JSON.stringify( {cartItems: cartState.cartItems, cartPrice: cartState.cartPrice}))
                return {...cartState}    

        default:
            return cartState
    }
}

function cartHasItem(item: Item, cartState:[Item] | []): boolean{
   return cartState.find((cartItem)=> cartItem.id == item.id) != null
}