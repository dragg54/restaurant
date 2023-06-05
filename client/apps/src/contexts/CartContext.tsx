import { createContext, useReducer } from "react";
import { cartReducer, initialCartState } from "../reducers/CartReducer";
import { Item } from "../types/Item";
import { CartItem } from "../types/Cart";

export const CartContext = createContext<{
    cartState: [CartItem] | null
    dispatchCartAction: React.Dispatch<any>
} | null>(null)
export const CartContextProvider = ({children}: {children: React.ReactNode}) =>{
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState)
    return(
        <CartContext.Provider value={{cartState, dispatchCartAction}}>
            {children}
        </CartContext.Provider>
    )
}