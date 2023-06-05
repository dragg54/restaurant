import React, { useContext } from 'react'
import { Cart, CartContainer, CartTotalContainer, CartWrapper, CounterContainer, Delete, ItemImageContainer, NameAndDescriptionContainer, Price, SumBox } from './Cart'
import { AiOutlineDelete } from 'react-icons/ai'
import { CartContext } from '../../../../contexts/CartContext'
import { ItemImg } from '../../../admin/cards/ItemCard/ItemCard'
import { CartAction, CartItem } from '../../../../types/Cart'
import { Item } from '../../../../types/Item'

const index = () => {
    const { cartState, dispatchCartAction } = useContext(CartContext)!

    function increaseQuantity(id: number, item: CartItem){
        if(id == item._id){
           item.cartItemQuantity + 1 
        }
    }
    return (
        <CartWrapper>
            <Cart>
                {
                    cartState && cartState.map((cartItem) => {
                        const base64String = btoa(String.fromCharCode(...new Uint8Array(cartItem?.image?.data.data)))
                        return (
                            <CartContainer>
                                <ItemImageContainer><ItemImg src={`data:image/png;base64,${base64String}`} alt="image" width={200} height={200} id='modcon' />
                                </ItemImageContainer>
                                <NameAndDescriptionContainer>
                                    <h5 style={{fontSize:"1.1rem", color:"black"}}>{cartItem.name}</h5>
                                    <p style={{fontSize:"0.8rem"}}>{cartItem.description}</p>
                                </NameAndDescriptionContainer>
                                <Price>$12</Price>
                                <CounterContainer>
                                    <SumBox onClick={()=>{
                                        increaseQuantity(cartItem._id!, cartItem)
                                    }}>-</SumBox>
                                    <h3>{cartItem.cartItemQuantity}</h3>
                                    <SumBox onClick={()=>{
                                        increaseQuantity(cartItem._id!, cartItem)
                                    }}>+</SumBox>
                                </CounterContainer>
                                <Delete onClick={()=>{
                                 dispatchCartAction({type: CartAction.REMOVE_FROM_CART, payload: {item: cartItem}})
                                }}><AiOutlineDelete style={{ height: "30px", width: "30px" }} /></Delete>
                            </CartContainer>
                        )
                    })
                }
            </Cart>
            <CartTotalContainer>

            </CartTotalContainer>
        </CartWrapper>
    )
}

export default index