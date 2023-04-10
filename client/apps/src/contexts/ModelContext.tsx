import { createContext, useState } from 'react'
import React from 'react'

export const ModalContext = createContext<null | {
    openModal: boolean,
    setOpenModal: null | React.Dispatch<React.SetStateAction<boolean>>
}>({openModal: false, setOpenModal: null})

type ModalProps = {
  children: React.ReactNode
}

const ModelContextProvider = ({children}: ModalProps) => {
    const [openModal, setOpenModal] = useState(false)
  return (
    <ModalContext.Provider value={{openModal, setOpenModal}}>
        {children}
    </ModalContext.Provider>
  )
}

export default ModelContextProvider