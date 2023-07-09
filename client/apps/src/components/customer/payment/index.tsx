import React, { useContext } from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";
import { CartContent } from "../../commons/icons/CartIcon/CartIcon";
import { CartContext } from "../../../contexts/CartContext";
import axios from "axios";


const Payment = () => {
    const {cartState} = useContext(CartContext)!

    const makePayment = (token: Token) =>{
        const body = {
          token,
        //   cartState
        }
        axios.post("http://localhost:8080/charge", body, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res)=> console.log(res)).catch((err)=> console.log(err))
      }
    return(
        <>
          <StripeCheckout
           stripeKey="pk_test_51MZnT6HXwt4BpIBQAyCb0LxDAclJ2qxMU1KlO8Lle2NawVWVDK5LPcma7hUIGGBRMMMYzJDo3v1WHCzi7hOEVh9E00xUfeIGEM" 
           token={makePayment}
           amount={cartState?.cartPrice! * 100}
          name="Buy Noodles"/>
        </>
      )
    }

  export default Payment