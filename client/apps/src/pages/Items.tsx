import React from 'react'
import Wrapper from '../components/dashboard/layouts/wrapper/index'
import ItemCard from '../components/dashboard/cards/ItemCard'
import  PrimaryButton  from '../components/commons/button/primaryButton/index'
import { BiPlusMedical } from 'react-icons/bi'

const Items = () => {
  return (
    <Wrapper>
      <PrimaryButton bg="red" icon={<BiPlusMedical/>} buttonValue='Add Item'/>
     <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", margin: "60px auto", width: "100%", justifyContent: "space-around"}}>
     <ItemCard price={5} description='good taste, delicious feeling' name='palace burger' discount={20} image="" rating={4.25}/>
     <ItemCard price={5} description='good taste, delicious feeling' name='palace burger' discount={20} image="" rating={4.25}/>
     <ItemCard price={5} description='good taste, delicious feeling' name='palace burger' discount={20} image="" rating={4.25}/>
     <ItemCard price={5} description='good taste, delicious feeling' name='palace burger' discount={20} image="" rating={4.25}/>
     <ItemCard price={5} description='good taste, delicious feeling' name='palace burger' discount={20} image="" rating={4.25}/>
     <ItemCard price={5} description='good taste, delicious feeling' name='palace burger' discount={20} image="" rating={4.25}/>

     </div>
    </Wrapper>
  )
}

export default Items