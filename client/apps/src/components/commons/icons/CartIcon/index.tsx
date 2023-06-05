import React, { useContext } from 'react'
import { CartContent, CartIconContainer } from './CartIcon'
import { FiShoppingCart } from 'react-icons/fi'
import { CartContext } from '../../../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'

const index = () => {
  const { cartState } = useContext(CartContext)!
  const navigate = useNavigate()
  return (
   <CartIconContainer onClick={()=>{
    navigate("/cart")
   }}>
    <FiShoppingCart style={{width: "70%", height:"70%"}}/>
    {cartState && cartState.length > 0 &&<CartContent>{cartState.length}</CartContent>}
   </CartIconContainer>
  )
}

export default index