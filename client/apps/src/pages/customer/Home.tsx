import React from 'react'
import { Wrapper } from '../../components/admin/layouts/wrapper/Wrapper'
import Navbar from '../../components/admin/layouts/navbar'
import Hero from '../../components/customer/layouts/hero'
import { Logo } from '../../components/commons/layouts/navbar/Navbar'
import SearchField from '../../components/commons/forms/SearchField'
import { CurrentUserContainer } from '../../components/commons/containers/CurrentUserContainer/CurrentUserContainer'
import NotificationIcon from '../../components/commons/icons/NotificationIcon'
import CartIcon from '../../components/commons/icons/CartIcon'
import Section from '../../components/customer/layouts/section'

const Home = () => {
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
            <Hero />
            <Section/>
        </Wrapper>
    )
}

export default Home