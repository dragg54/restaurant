import React from 'react'
import { Wrapper } from '../../components/admin/layouts/wrapper/Wrapper'
import CustomerCart from '../../components/customer/containers/cart'
import Navbar from '../../components/admin/layouts/navbar'
import { Logo } from '../../components/commons/layouts/navbar/Navbar'
import SearchField from '../../components/commons/forms/SearchField'
import CartIcon from '../../components/commons/icons/CartIcon'
import { CurrentUserContainer } from '../../components/commons/containers/CurrentUserContainer/CurrentUserContainer'
import ScrollToTop from '../../components/ScrollToTop'
import Footer from '../../components/customer/layouts/footer'

const Cart = () => {
    return (
        <ScrollToTop>
            <Wrapper user='customer'>
                <Navbar>
                    <Logo>
                        Becca's
                    </Logo>
                    <SearchField />
                    <CartIcon />
                    <CurrentUserContainer />
                </Navbar>
                <CustomerCart />
                <Footer />
            </Wrapper>
        </ScrollToTop>
    )
}

export default Cart