import { MutableRefObject, createContext, useEffect, useRef, useState } from 'react'
import React from 'react'

type FormType = {
      isAddRoleForm: boolean | null,
      isEditRoleForm: boolean | null,
      isAddItemForm : boolean | null,
      isEditItemForm: boolean | null
}

export const ModalContext = createContext<null | {
    openModal: boolean,
    setOpenModal: null | React.Dispatch<React.SetStateAction<boolean>>
    modalRef:  null | MutableRefObject<HTMLDivElement | null>
    formType: null | FormType,
    setFormType: null | React.Dispatch<React.SetStateAction<FormType>>
}>({openModal: false, setOpenModal: null, modalRef:null, formType:null, setFormType: null})

type ModalProps = {
  children: React.ReactNode
}

const ModelContextProvider = ({children}: ModalProps) => {
    const [openModal, setOpenModal] = useState(false)
    const [formType, setFormType] = useState<FormType>({
      isAddRoleForm:false,
      isEditRoleForm: false,
      isAddItemForm: false,
      isEditItemForm: false
    })
    const modalRef = useRef<HTMLDivElement | null>(null)
    useEffect(()=>{
      const checkIfClickedOutside = (e: any) => {
        const modelRefChildren = modalRef.current?.children!
        /* for(let i of modelRefChildren){
          i.id = "modcon"
          console.log(i.id)
        } */
           if ( modalRef.current && !modalRef.current.contains(e.target) && e.target.id !== "modcon") {
            setOpenModal!(false);
          }
        };
        document.addEventListener("click", checkIfClickedOutside);
  }, [openModal])

  return (
    <ModalContext.Provider value={{openModal, setOpenModal, modalRef, formType, setFormType}}>
        {children}
    </ModalContext.Provider>
  )
}

export default ModelContextProvider