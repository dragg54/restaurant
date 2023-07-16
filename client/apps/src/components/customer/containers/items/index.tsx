import React, { useContext, useEffect } from 'react'
import { AddToCartButton, ItemCard, ItemDesc, ItemImg, ItemWrapper } from './Items'
import { Item } from '../../../../types/Item'
import { AiFillStar } from 'react-icons/ai'
import { CartContext } from '../../../../contexts/CartContext'
import { CartAction } from '../../../../types/Cart'

const index = ({item}: {item: Item}) => {
    const base64String = btoa(String.fromCharCode(...new Uint8Array(item?.image?.data.data)))
    const { cartState, dispatchCartAction } = useContext(CartContext)!
    useEffect(() => {
        dispatchCartAction({ type: CartAction.GET_CART_ITEMS })
    }, [])
  return (
    
        <ItemCard>
            <ItemImg>
                <img src={`data:image/png;base64,${base64String}`} alt="image" style={{width: "100%", height:"100%"}} />
            </ItemImg>
            <ItemDesc>
            <h4>{item.name}</h4>
                <h1>${item.price}</h1>
                <p style={{ fontSize: "0.8rem" }}>{item.description}</p>
                <AddToCartButton onClick={()=>{
                   ! cartState?.cartItems.find((itm)=> itm._id == item._id) && dispatchCartAction({type: CartAction.ADD_TO_CART, payload:{item}})
                }}>ADD TO CART</AddToCartButton>
            </ItemDesc>
        </ItemCard>
       
  )
}

export default index