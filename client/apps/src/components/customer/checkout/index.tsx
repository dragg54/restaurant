import React from 'react'
import CustomerCheckout from "../containers/checkout"
import { Wrapper } from '../../admin/layouts/wrapper/Wrapper'
import CheckoutItems from "..//containers/checkoutItem"

const Checkout = () => {
    return (
        <>
            <div style={{ width: "100%", height: "100%", display: "flex" }}>
                <CustomerCheckout />
                <CheckoutItems />
            </div>
        </>
    )
}

export default Checkout