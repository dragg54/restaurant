import React, { ComponentProps } from 'react'
import { PrimaryButton } from './PrimaryBotton'
import { IconType } from 'react-icons/lib'

type PrimaryButtonProps = {
  buttonValue: string,
  icon: React.ReactNode,
  bg: string,
}
const index = ({buttonValue, icon, bg}: PrimaryButtonProps) => {
  return (
    <PrimaryButton style={{background: bg, alignSelf:'flex-end', width:'100px', color:'#fff'}}>{buttonValue} {icon}</PrimaryButton>
  )
}

export default index