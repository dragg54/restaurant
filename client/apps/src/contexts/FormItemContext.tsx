import React, { useState, createContext, Dispatch, SetStateAction } from 'react'
import { Item } from '../types/Item'

export const FormItemContext = createContext<null | {
    itemToBeUpdated:Item | null ,
    setItemToBeUpdated:null |  Dispatch<SetStateAction<null | Item>>
}>(null)
export const FormItemContextProvider = ({children}:{children: React.ReactNode}) => {
    const [itemToBeUpdated, setItemToBeUpdated] = useState<Item | null>({})
  return (
   <FormItemContext.Provider value={{itemToBeUpdated, setItemToBeUpdated}}>
        {children}
   </FormItemContext.Provider>
  )
}
