import React, { useContext } from 'react'
import Wrapper from '../components/dashboard/layouts/wrapper/index'
import ItemCard from '../components/dashboard/cards/ItemCard'
import PrimaryButton from '../components/commons/button/primaryButton/index'
import { BiPlusMedical } from 'react-icons/bi'
import { ModalContext } from '../contexts/ModelContext'
import { FiChevronDown } from 'react-icons/fi'

const Items = () => {
  const setOpenModal: null | React.Dispatch<React.SetStateAction<boolean>> = useContext(ModalContext)!.setOpenModal
  return (
    <Wrapper>
      <div style={{ display: 'flex', width: "100%", justifyContent: "space-between", alignItems: "center", marginTop: "30px" }}>
        <div style={{fontSize:"0.8 rem", borderRadius:"5px", color:"gray", width: "150px", height: '30px', border: "1px solid gray", display: 'flex', padding: "5px", justifyContent: "space-between", alignItems: "center", alignSelf: "flex-start" }}>
          <span>filter</span>
          <FiChevronDown />
        </div>
        <PrimaryButton bg="#E10032" icon={<BiPlusMedical />} buttonValue='Add Item' />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px 15px", margin: "60px auto", boxSizing: "content-box", justifyContent: "flex-start" }}>
        <ItemCard price={5} description='good taste, delicious feeling' name='palace burger' discount={20} image="" rating={4.25} />
        <ItemCard price={5} description='good taste, delicious feeling' name='palace burger' discount={20} image="" rating={4.25} />
        <ItemCard price={5} description='good taste, delicious feeling' name='palace burger' discount={20} image="" rating={4.25} />
        <ItemCard price={5} description='good taste, delicious feeling' name='palace burger' discount={20} image="" rating={4.25} />
        <ItemCard price={5} description='good taste, delicious feeling' name='palace burger' discount={20} image="" rating={4.25} />
        <ItemCard price={5} description='good taste, delicious feeling' name='palace burger' discount={20} image="" rating={4.25} />
        <ItemCard price={5} description='good taste, delicious feeling' name='palace burger' discount={20} image="" rating={4.25} />
        <ItemCard price={5} description='good taste, delicious feeling' name='palace burger' discount={20} image="" rating={4.25} />
      </div>
    </Wrapper>
  )
}

export default Items