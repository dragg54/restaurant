import React, { useContext, useEffect, useState } from 'react'
import { Cart, CartContainer, CartTotalContainer, CartWrapper, CounterContainer, Delete, ItemImageContainer, NameAndDescriptionContainer, Price, SumBox } from './Cart'
import { AiOutlineDelete } from 'react-icons/ai'
import { CartContext } from '../../../../contexts/CartContext'
import { ItemImg } from '../../../admin/cards/ItemCard/ItemCard'
import { CartAction, CartItem } from '../../../../types/Cart'
import { Item } from '../../../../types/Item'
import Items from '../../../../pages/admin/Items'

const index = () => {
    const { cartState, dispatchCartAction } = useContext(CartContext)!
    const itemsObj:{id:number | undefined, quantity: number, name: string | undefined}[] | undefined = cartState?.map((cartItem)=>{
        return {id: cartItem._id, quantity: 1, name: cartItem.name}
      })
    const [items, setItems] = useState<
    {id:number | undefined, quantity: number, name: string | undefined}[] | undefined | []>(itemsObj)!

    function increaseQuantity(id: number){
        const item = items!.find((item)=> item.id == id)
       setItems([...items!.filter((item)=> item.id != id), {id:id, quantity: item?.quantity! + 1, name: item?.name}])
    }
    function decreaseQuantity(id: number){
        const item = items!.find((item)=> item.id == id)
        setItems([...items!.filter((item)=> item.id != id), {id:id, quantity: item?.quantity! - 1, name: item?.name }])
    }

    function removeItem(id: number){
       const item = items!.find((cartItem)=> cartItem.id  == id)
       if(item?.quantity! < 1){
         dispatchCartAction({type:CartAction.REMOVE_FROM_CART, payload:{item: item!}})
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
                                        decreaseQuantity(cartItem._id!)
                                    }}>-</SumBox>
                                    {items?.map((item)=>{
                                        if(item.id == cartItem._id){
                                            return(
                                                <>{item.quantity > 0? item.quantity : removeItem(item.id!)}</>
                                            )
                                        }
                                    })}
                                    <SumBox onClick={()=>{
                                        increaseQuantity(cartItem._id!)
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