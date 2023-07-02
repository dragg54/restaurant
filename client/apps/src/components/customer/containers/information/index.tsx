import React, { useContext } from 'react'
import { ItemImageContainer } from '../cart/Cart'
import { BoldP, BolderP, ItemContainer, ItmP } from './Information'
import { CartContext } from '../../../../contexts/CartContext'

const index = () => {
  const { cartState } = useContext(CartContext)!
  return (
    <div style={{ width: "40%", height: "100%", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", padding: "45px 60px" }}>
      {
        cartState && cartState.cartItems.length > 0 && cartState.cartItems.map((itm) => {
          const base64String = btoa(String.fromCharCode(...new Uint8Array(itm.image?.data.data)))
          return (
            <ItemContainer key={itm._id}>
              <ItemImageContainer>
              <img src={`data:image/png;base64,${base64String}`} alt="image" style={{width: "100%", height:"100%"}} />
              </ItemImageContainer>
              <ItmP style={{fontWeight:"bolder", color:"#000"}}>{itm.name}</ItmP>
              <ItmP>{itm.quantity}</ItmP>
              <ItmP>${itm.price}</ItmP>
            </ItemContainer>
          )
        })
      }
      <ItemContainer>
      <BoldP>Subtotal </BoldP><ItmP>${cartState?.cartPrice}</ItmP>
      </ItemContainer>
      <ItemContainer>
      <BoldP>Shipping </BoldP><ItmP style={{fontSize:"0.9rem"}}>Calculated at next step</ItmP>
      </ItemContainer>
      <ItemContainer>
      <BolderP>Total Price </BolderP><BolderP>${cartState?.cartPrice}</BolderP>
      </ItemContainer>
    </div>
  )
}

export default index