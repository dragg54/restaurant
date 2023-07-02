import React, { useEffect } from 'react'
import CustomerCheckout from "../../components/customer/containers/checkout"
import { Wrapper } from '../../components/admin/layouts/wrapper/Wrapper'
import CheckoutItems from "../../components/customer/containers/checkoutItem"
import { Outlet, useNavigate } from 'react-router-dom'

const Checkout = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        navigate("information")
    }, [])
    return (
        <>
            <Wrapper user='customer'>
                <div style={{ width: "100%", height: "100%", display: "flex" }}>
                    <Outlet />
                    <CheckoutItems />
                </div>
            </Wrapper>
        </>
    )
}

export default Checkout