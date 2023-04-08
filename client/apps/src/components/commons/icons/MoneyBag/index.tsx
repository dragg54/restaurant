import React from 'react'
import { MoneyBagContainer } from './MoneyBag'
import { TbMoneybag } from 'react-icons/tb'

type MoneyBagProps = {
    color: string
}
const index = ({color}: MoneyBagProps) => {
  return (
    <MoneyBagContainer style={{backgroundColor: color}}>
        <TbMoneybag />
    </MoneyBagContainer>
  )
}

export default index