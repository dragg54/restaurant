import { Dispatch, SetStateAction, useContext, useReducer, useState } from "react";
import { initialItemState, itemReducer } from "../reducers/ItemReducer";
import { Item } from "../types/Item";
import { createContext } from "react";

export const ItemContext = createContext<{
    itemState: [Item] | null,
    dispatchItemAction: React.Dispatch<any> | null,
    isLoading: null | boolean,
    setIsLoading: null| Dispatch<SetStateAction<boolean>>
}>({
    itemState : null,
    dispatchItemAction: null,
    isLoading: null,
    setIsLoading: null
})
type ItemContextProps = {
    children: React.ReactNode
}

export const ItemContextProvider = ({children}: ItemContextProps) =>{
    const[itemState, dispatchItemAction] = useReducer(itemReducer, initialItemState)
    const[isLoading, setIsLoading] = useState(true)
    return(
        <ItemContext.Provider value={{itemState, dispatchItemAction, isLoading, setIsLoading}}>
            {children}
        </ItemContext.Provider>
    )
}

