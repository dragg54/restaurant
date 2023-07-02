import React from 'react'
import { RouteList, CheckoutRoute, ShippingContainer, Heading, ContinueToShopping } from './Checkout'
import { AiOutlineRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const index = () => {
    const navigate = useNavigate()
    return (
        <>
            <div style={{width: "60%", height:"100vh", padding: "40px 90px", position:"relative", borderRight:"1px solid #efefef", boxShadow:"1px 1px 1px gray"}}>
                <h2 style={{color: "red"}}>Becca</h2>
                <RouteList>
                    <CheckoutRoute>Information</CheckoutRoute>
                    <CheckoutRoute style={{marginBottom:"-3px"}}><AiOutlineRight /></CheckoutRoute>
                    <CheckoutRoute>Shipping</CheckoutRoute>
                    <CheckoutRoute style={{marginBottom:"-3px"}}><AiOutlineRight /></CheckoutRoute>
                    <CheckoutRoute>Payment</CheckoutRoute>
                </RouteList>
                <Heading style={{marginTop: "15px", marginBottom:"10px"}}>Contact</Heading>
                <input type="text" name="" id="" placeholder='Email Address' style={{width:"100%", padding: "10px", marginBottom:"20px"}}/>
                <div style={{display:"flex", alignItems:"center"}}><input type="checkbox" name="" id="" /> <span style={{fontSize:"0.8rem", marginLeft:"5px"}}>Email me for news and offers</span></div>
                <Heading>Shipping Address</Heading>
                <ShippingContainer>
                    <select name="" id="" style={{gridColumnStart:"1", gridColumnEnd: "3", padding: "10px"}}>
                        <option value="0">United States</option>
                    </select>
                    <input type="text" placeholder='First Name' style={{gridColumnStart:"1", gridColumnEnd: "2", width:"100%", padding: "10px"}}/>
                    <input type="text" placeholder='Last Name'style={{gridColumnStart:"2", gridColumnEnd: "3", width:"100%", padding: "10px"}}/>
                   <input type='text' placeholder='Address' style={{gridColumnStart:"1", gridColumnEnd: "3", padding: "10px"}}/>
                   <div style={{gridColumnStart: 1, gridColumnEnd: 3,display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"10px"}}>
                   <input type="text" placeholder='City' style={{gridColumnStart:"1", gridColumnEnd: "2", padding: "10px"}}/>
                   <input type='text' placeholder='State' style={{gridColumnStart:"2", gridColumnEnd: "3", padding: "10px"}}/>
                   <input type="text" placeholder='Zip Code' style={{gridColumnStart:"3", gridColumnEnd: "4", padding: "10px"}}/>
                   </div>
                   <div style={{display:"flex", alignItems:"center", marginTop:"15px"}}><input type="checkbox" name="" id="" /> <span style={{fontSize:"0.8rem", marginLeft:"5px"}}>Save this information for next time</span></div>
                </ShippingContainer>
                <ContinueToShopping onClick={()=>{
                    navigate("../shipping")
                }}>Continue to shipping</ContinueToShopping>
            </div>
        </>
    )
}

export default index