import React, { useContext, useEffect } from 'react'
import Wrapper from '../components/dashboard/layouts/wrapper/index'
import ItemCard from '../components/dashboard/cards/ItemCard'
import PrimaryButton from '../components/commons/button/primaryButton/index'
import { BiPlusMedical } from 'react-icons/bi'
import { ModalContext } from '../contexts/ModalContext'
import { FiChevronDown } from 'react-icons/fi'
import { ItemContext } from '../contexts/ItemContext'
import { ItemAction } from '../types/Item'
import { useFetchItem } from '../api'

const Items = () => {
  const setOpenModal: null | React.Dispatch<React.SetStateAction<boolean>> = useContext(ModalContext)!.setOpenModal
  const formType = useContext(ModalContext)?.formType
  const setFomType = useContext(ModalContext)?.setFormType!
  useFetchItem("http://localhost:8080/api/v1/items")
  const {isLoading, itemState} = useContext(ItemContext)
  
  if(!isLoading){
    return (
      <Wrapper>
        <div style={{ display: 'flex', width: "100%", justifyContent: "space-between", alignItems: "center", marginTop: "30px" }}>
          <div style={{ fontSize: "0.8 rem", borderRadius: "5px", color: "gray", width: "150px", height: '30px', border: "1px solid gray", display: 'flex', padding: "5px", justifyContent: "space-between", alignItems: "center", alignSelf: "flex-start" }}>
            <span>filter</span>
            <FiChevronDown />
          </div>
          <div onClick={() => {
            setFomType({
              isAddItemForm: true,
              isAddRoleForm: false,
              isEditItemForm: false,
              isEditRoleForm: false
            })
          }}>
            <PrimaryButton bg="#FFCD58" icon={<BiPlusMedical />} buttonValue='Add Item' />
          </div>
        </div>
        <div style={{ display: "flex", width:" 100%", flexWrap: "wrap", gap: "30px 15px", margin: "60px auto", boxSizing: "content-box" }}>
          {
            !isLoading && itemState && itemState.length > 0 && itemState.map((item)=>{
              return(
                <ItemCard id={item._id!} price={+item.price!} description= {item.description!} image={item.image.data!} name={item.name!} discount={item.discount!}  rating={4.25} />
              )
            })
          }
        </div>
      </Wrapper>
    )
  }
}

export default Items