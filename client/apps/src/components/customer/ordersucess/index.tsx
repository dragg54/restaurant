import React from 'react'
import { ContinueToShopping } from '../containers/information/Information'
import { GiConfirmed } from 'react-icons/gi'
import { OrderSuccessful, SuccessContainer } from './OrderSuccess'
import { useNavigate } from 'react-router-dom'

const index = () => {
    const navigate = useNavigate()
    return (
        <SuccessContainer>
            <GiConfirmed style={{ fontSize: "2.5rem", color: "green" }} />
            <OrderSuccessful>
                Your order has been successfully placed
            </OrderSuccessful>
            <small>Thank you for your order</small>
            <ContinueToShopping style={{marginTop:"20px", marginBottom:"30px", position:"revert", background:"green", paddingTop:"14px"  , paddingBottom:"14px"}} onClick={()=>{
                navigate("/")
            }}>Continue Shopping</ContinueToShopping>
        </SuccessContainer>
    )
}

export default index