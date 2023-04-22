import React, { ComponentProps, useContext } from 'react'
import { PrimaryButton } from './PrimaryBotton'
import { IconType } from 'react-icons/lib'
import { ModalContext } from '../../../../contexts/ModalContext'

type PrimaryButtonProps = {
  buttonValue: string,
  icon: React.ReactNode,
  bg: string,
}
const index = ({buttonValue, icon, bg}: PrimaryButtonProps) => {
  const setOpenModal: null | React.Dispatch<React.SetStateAction<boolean>> = useContext(ModalContext)!.setOpenModal!

  return (
    <PrimaryButton id = "modcon" style={{background: bg, alignSelf:'flex-end', width:'100px', color:'#fff'}} onClick={()=>{
      setOpenModal(true)
    }}>{buttonValue} {icon}</PrimaryButton>
  )
}

export default index