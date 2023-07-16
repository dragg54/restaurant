import React, { useContext } from 'react'
import { DeliveryContainer, Heading, DeliveryP } from './Shipping'
import { useNavigate } from 'react-router-dom'
import { ContinueToShopping } from '../information/Information'
import { ContactContext } from '../../../../contexts/ContactContext'
import StripeCheckout, { Token } from 'react-stripe-checkout'
import { CartContext } from '../../../../contexts/CartContext'
import axios from 'axios'
import { ItmP } from '../../checkoutItem/CheckoutItem'

const index = () => {
    const navigate = useNavigate()
    const { userContact } = useContext(ContactContext)!
    const { cartState } = useContext(CartContext)!

    const makePayment = () => {
        // const body = {
        //     stripeEmail: "ajibolasadiq@yahoo.com",
        //     stripeToken: token.id,
        // }
        const items = cartState?.cartItems.map((itm)=>{
            return {name: itm.name, description: itm.description, price: itm.price, quantity: itm.quantity}
        })
        axios.post("http://localhost:8080/create-checkout-session", {cartItems: items},
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => window.location.replace(res.data.url)
        ).catch((err) => console.log(err))
    }
    return (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <DeliveryContainer>
                <Heading>
                    RECIPIENT INFORMATION
                    <span style={{ textAlign: "right", fontWeight: "400", color: "blue", fontSize: "0.8rem" }}>Change {">"}</span>
                </Heading>
                <div style={{ border: "1px solid #efefef", width: "100%", margin: "15px" }}></div>
                <DeliveryP style={{ color: "black" }}>
                    {userContact?.firstName.toUpperCase()} {userContact?.lastName.toUpperCase()}
                </DeliveryP>
                <DeliveryP>
                    {userContact?.email}
                </DeliveryP>
                <DeliveryP>
                    +2349041568380
                </DeliveryP>
            </DeliveryContainer>
            <DeliveryContainer>
                <Heading>
                    DELIVERY ADDRESS
                    <span style={{ textAlign: "right", fontWeight: "400", color: "blue", fontSize: "0.8rem" }}>Change {">"}</span>
                </Heading>
                <div style={{ border: "1px solid #efefef", width: "100%", margin: "15px" }}></div>
                <DeliveryP style={{ color: "black" }}>
                    USA
                </DeliveryP>
                <DeliveryP>
                    {userContact?.address}
                </DeliveryP>
            </DeliveryContainer>
            <>
                    <ContinueToShopping onClick={()=> makePayment()}>Pay With Card</ContinueToShopping>
                    {/* <StripeCheckout
                        stripeKey="pk_test_51MZnT6HXwt4BpIBQAyCb0LxDAclJ2qxMU1KlO8Lle2NawVWVDK5LPcma7hUIGGBRMMMYzJDo3v1WHCzi7hOEVh9E00xUfeIGEM"
                        token={makePayment}
                        amount={cartState?.cartPrice! * 100}
                        name="Cart" /> */}
            </>
        </div>
    )
}

export default index