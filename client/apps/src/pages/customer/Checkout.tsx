import React, { useEffect } from 'react'
import { Wrapper } from '../../components/admin/layouts/wrapper/Wrapper'
import CheckoutItems from "../../components/customer/checkoutItem"
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineRight } from 'react-icons/ai'

export const RouteList = styled.ul`
    display: flex;
    margin-top: 15px;
    width: 250px;
    justify-content: space-between;
    align-items: flex-end;
    height: 10px;
`

export const CheckoutRoute = styled.li`
    font-size: small;
`
export const Heading = styled.p`
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 12px;
    margin-top: 15px;
`

const Checkout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate("information")
    }, [])

const location = useLocation()
    return (
        <>
            <Wrapper user='customer'>
                <div style={{ width: "100%", height:"100%", overflow:"hidden", display: "flex" }}>
                    <div style={{ width: "60%", padding: "40px 90px", position: "relative", borderRight: "1px solid #efefef", boxShadow: "1px 1px 1px gray" }}>
                        <h2 style={{ color: "red" }}>Becca</h2>
                        <RouteList>
                            <CheckoutRoute style={{fontWeight: location.pathname == "/checkout/information"? "500": ""}}>Information</CheckoutRoute>
                            <CheckoutRoute style={{ marginBottom: "-3px" }}><AiOutlineRight /></CheckoutRoute>
                            <CheckoutRoute style={{fontWeight: location.pathname == "/checkout/shipping"? "500": ""}}>Shipping</CheckoutRoute>
                            <CheckoutRoute style={{ marginBottom: "-3px" }}><AiOutlineRight /></CheckoutRoute>
                            <CheckoutRoute style={{fontWeight: location.pathname == "/checkout/payment"? "500": ""}}>Payment</CheckoutRoute>
                        </RouteList>
                        <Outlet />
                    </div>
                    <CheckoutItems />
                </div>
            </Wrapper>
        </>
    )
}

export default Checkout