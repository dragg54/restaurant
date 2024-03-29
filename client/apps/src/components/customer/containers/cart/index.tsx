import React, { useContext, useEffect, useState } from 'react'
import { Cart, CartContainer, CartTotalContainer, CartWrapper, CheckOutButton, CounterContainer, Delete, EmptyCartContainer, GoShoppingButton, ItemImageContainer, NameAndDescriptionContainer, Price, SumBox } from './Cart'
import { AiOutlineDelete } from 'react-icons/ai'
import { CartContext } from '../../../../contexts/CartContext'
import { ItemImg } from '../../../admin/cards/ItemCard/ItemCard'
import { CartAction, CartItem } from '../../../../types/Cart'
import { Item } from '../../../../types/Item'
import Items from '../../../../pages/admin/Items'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import io from 'socket.io-client'
import { NotificationContext } from '../../../../contexts/NotificationContext'


const index = () => {
    const { cartState, dispatchCartAction } = useContext(CartContext)!
    const [isLoading, setIsLoading] = useState(true)

    const socket = io.connect("http://localhost:8080")
    useEffect(() => {
        dispatchCartAction({ type: CartAction.GET_CART_ITEMS })
        setIsLoading(false)
    }, [])
    console.log()
    const itemsObj: { id: number | undefined, quantity: number, name: string | undefined, price: number | undefined }[] | undefined = cartState?.cartItems?.map((cartItem) => {
        return { id: cartItem._id, quantity: 1, name: cartItem.name, price: parseFloat(cartItem.price!) }
    })
    const [items, setItems] = useState<
        { id: number | undefined, quantity: number, name: string | undefined, price: number | undefined }[] | undefined | []>(itemsObj)!

    const navigate = useNavigate()
    function goToItemPage() {
        navigate("/home")
    }

    const { notification, dispatchNotificationAction } = useContext(NotificationContext)!

    const checkOut = () => {
        // const body = {
        //     stripeEmail: "ajibolasadiq@yahoo.com",
        //     stripeToken: token.id,
        // }
        const items = cartState?.cartItems.map((itm) => {
            return { name: itm.name, description: itm.description, price: itm.price!, quantity: itm.cartItemQuantity }
        })

        axios.post("http://localhost:8080/create-checkout-session", { cartItems: items },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                window.location.replace(res.data.url)
            })

    }

    if (cartState?.cartItems?.length! > 0 && !isLoading) {
        return (
            <CartWrapper>
                <Cart>
                    {
                        cartState && cartState.cartItems?.map((cartItem) => {
                            const base64String = btoa(String.fromCharCode(...new Uint8Array(cartItem?.image?.data.data)))
                            return (
                                <CartContainer>
                                    <ItemImageContainer><ItemImg src={`data:image/png;base64,${base64String}`} alt="image" width={200} height={200} id='modcon' />
                                    </ItemImageContainer>
                                    <NameAndDescriptionContainer>
                                        <h5 style={{ fontSize: "1.1rem", color: "black" }}>{cartItem.name}</h5>
                                        <p style={{ fontSize: "0.8rem" }}>{cartItem.description}</p>
                                    </NameAndDescriptionContainer>
                                    <Price>${(+cartItem.price!).toFixed(2)}</Price>
                                    <CounterContainer>
                                        <SumBox onClick={() => {
                                            cartItem.cartItemQuantity > 1 ? dispatchCartAction({ type: CartAction.REDUCE_QUANTITY, payload: { item: cartItem } }) : dispatchCartAction({ type: CartAction.REMOVE_FROM_CART, payload: { item: cartItem } })
                                        }}>-</SumBox>
                                        {cartItem.cartItemQuantity}
                                        <SumBox onClick={() => {
                                            dispatchCartAction({ type: CartAction.INCREASE_QUANTITY, payload: { item: cartItem } })
                                        }}>+</SumBox>
                                    </CounterContainer>
                                    <Delete onClick={() => {
                                        dispatchCartAction({ type: CartAction.REMOVE_FROM_CART, payload: { item: cartItem } })
                                    }}><AiOutlineDelete style={{ height: "30px", width: "30px" }} /></Delete>
                                </CartContainer>
                            )
                        })
                    }
                </Cart>
                <CartTotalContainer>
                    <h3>CART SUMMARY</h3>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                        <li>ITEMS QTY</li>
                        <li>{cartState?.cartItems.length!}</li>
                    </div>
                    <div style={{ width: "100%", background: "#B1B1B1", boxShadow: "1px 1px 1px #B1B1B1", height: "1px" }}></div>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", fontWeight: "700" }}>
                        <li>SUB-TOTAL</li>
                        <li>${cartState?.cartPrice.toFixed(2)}</li>
                    </div>
                    <CheckOutButton onClick={() => checkOut()}>CHECKOUT</CheckOutButton>
                </CartTotalContainer>
            </CartWrapper>
        )
    }
    else {
        return (
            <CartWrapper>
                <EmptyCartContainer>
                    <h1 style={{ fontWeight: "800", color: "gray" }}>YOUR CART IS EMPTY</h1>
                    <GoShoppingButton onClick={goToItemPage}>GO SHOPPING</GoShoppingButton>
                </EmptyCartContainer>
            </CartWrapper>
        )
    }
}

export default index