import React, { ChangeEventHandler, useContext, useState } from 'react'
import { RouteList, CheckoutRoute, ShippingContainer, Heading, ContinueToShopping } from './Information'
import { AiOutlineRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { ContactContext } from '../../../../contexts/ContactContext'
import { Contact } from '../../../../types/Contact'

const index = () => {
  const navigate = useNavigate()
  const [contactInputValue, setContactInputValue] = useState<Contact>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
    phone: ""
  }) 
  const { userContact, setUserContact} = useContext(ContactContext)!

  interface ContactEvent extends EventTarget {
    name: string,
    value: string
  }
  function HandleContactChange(e:React.ChangeEvent<HTMLInputElement>){
    setContactInputValue({...contactInputValue, [(e.target as ContactEvent).name]: (e.target as ContactEvent).value})
  }
  return (
    <>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <Heading style={{ marginTop: "15px", marginBottom: "10px" }}>Contact</Heading>
        <input type="text" name="email" value={contactInputValue.email}  onChange={(e)=>{HandleContactChange(e)}} id="" placeholder='Email Address' style={{ width: "100%", padding: "10px", marginBottom: "20px" }} />
        <div style={{ display: "flex", alignItems: "center" }}><input type="checkbox" name="" id="" /> <span style={{ fontSize: "0.8rem", marginLeft: "5px" }}>Email me for news and offers</span></div>
        <Heading>Shipping Address</Heading>
        <ShippingContainer>
          <select name = "country" id="" style={{ gridColumnStart: "1", gridColumnEnd: "3", padding: "10px" }}>
            <option value="">United States</option>
          </select>
          <input type="text" placeholder='First Name' name="firstName" onChange={(e)=>{HandleContactChange(e)}} value={contactInputValue.firstName} style={{ gridColumnStart: "1", gridColumnEnd: "2", width: "100%", padding: "10px" }} />
          <input type="text" placeholder='Last Name'name="lastName" onChange={(e)=>{HandleContactChange(e)}} value={contactInputValue.lastName}  style={{ gridColumnStart: "2", gridColumnEnd: "3", width: "100%", padding: "10px" }} />
          <input type='text' placeholder='Address' name="address" onChange={(e)=>{HandleContactChange(e)}} value={contactInputValue.address}  style={{ gridColumnStart: "1", gridColumnEnd: "3", padding: "10px" }} />
          <div style={{ gridColumnStart: 1, gridColumnEnd: 3, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
            <input type="text" placeholder='City' name="city" onChange={(e)=>{HandleContactChange(e)}} value={contactInputValue.city}  style={{ gridColumnStart: "1", gridColumnEnd: "2", padding: "10px" }} />
            <input type='text' placeholder='State' name="state" onChange={(e)=>{HandleContactChange(e)}} value={contactInputValue.state}  style={{ gridColumnStart: "2", gridColumnEnd: "3", padding: "10px" }} />
            <input type="text" placeholder='Zip Code' name="zipCode" onChange={(e)=>{HandleContactChange(e)}} value={contactInputValue.zipCode}  style={{ gridColumnStart: "3", gridColumnEnd: "4", padding: "10px" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}><input type="checkbox" name="" id="" /> <span style={{ fontSize: "0.8rem", marginLeft: "5px" }}>Save this information for next time</span></div>
        </ShippingContainer>
        <ContinueToShopping onClick={() => {
          navigate("../shipping")
          setUserContact(contactInputValue)
        }}>Continue to shipping</ContinueToShopping>
      </div>
    </>
  )
}

export default index