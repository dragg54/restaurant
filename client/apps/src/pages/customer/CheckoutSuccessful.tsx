import React from 'react'
import Wrapper from '../../components/admin/layouts/wrapper'
import io from "socket.io-client"
import Navbar from '../../components/admin/layouts/navbar'
import { Logo } from '../../components/admin/layouts/navbar/Navbar'
import SearchField from '../../components/commons/forms/SearchField'
import CurrentUserContainer from '../../components/commons/containers/CurrentUserContainer'
import CartIcon from '../../components/commons/icons/CartIcon'
import Hero from '../../components/customer/layouts/hero'
import Section from '../../components/admin/layouts/section'
import  OrderSuccessful from '../../components/customer/ordersucess'

const CheckoutSuccessful = () => {
    const socket = io.connect("localhost:8080")
    socket.emit('sendMessage', { message: "You have received new Orders" })
    localStorage.removeItem("items")
    return (
        <Wrapper user="customer">
            <Navbar>
                <Logo>
                    Becca's
                </Logo>
                <SearchField />
                <CartIcon />
                <CurrentUserContainer />
            </Navbar>
            <OrderSuccessful/>
        </Wrapper>
    )
}

export default CheckoutSuccessful