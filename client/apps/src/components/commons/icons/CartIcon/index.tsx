import React from 'react'
import { CartIconContainer } from './CartIcon'
import { FiShoppingCart } from 'react-icons/fi'

const index = () => {
  return (
   <CartIconContainer>
    <FiShoppingCart style={{width: "70%", height:"70%"}}/>
   </CartIconContainer>
  )
}

export default index