import { createContext, useState } from 'react'
import React from 'react'

export const ModalContext = createContext<null | {
    openModal: boolean,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}>(null)


const ModelContextProvider = ({children}) => {
    const [openModal, setOpenModal] = useState(false)
  return (
    <ModalContext.Provider value={{openModal, setOpenModal}}>
        {children}
    </ModalContext.Provider>
  )
}

export default ModelContextProvider