import React, { useContext } from 'react'
import StaffTable from '../../components/admin/tables/staffTable'
import { Wrapper } from '../../components/admin/layouts/wrapper/Wrapper'
import PrimaryButton from '../../components/commons/button/primaryButton'
import { BiPlusMedical } from 'react-icons/bi'
import SearchField from '../../components/commons/forms/SearchField'
import { FiChevronDown } from 'react-icons/fi'
import { Input } from '../../components/commons/forms/SearchField/SearchField'
import SearchIcon from '../../components/commons/icons/SearchIcon'
import { ModalContext } from '../../contexts/ModalContext'

const Staff = () => {
  const formType = useContext(ModalContext)?.formType
  const setFomType = useContext(ModalContext)?.setFormType!
  return (
    <Wrapper user="admin">
      <div style={{ display: 'flex', width: "95%", justifyContent: "space-between", alignItems: "center", marginTop: "30px" }}>
        <h1 style={{ fontWeight: "bold" }}>Staff Roles</h1>
        <div onClick={()=>{
          setFomType({
            isAddItemForm: false,
            isAddRoleForm: true,
            isEditItemForm: false,
            isEditRoleForm: false
          })
        }}>
        <PrimaryButton bg="#FFCD58" icon={<BiPlusMedical />} buttonValue='Add Staff'/>
        </div>
      </div>
      <div style={{ display: 'flex', width: "95%", justifyContent: "flex-start", alignItems: "center", marginTop: "30px" }}>
        <div style={{ fontSize: "0.8 rem", borderRadius: "5px", color: "gray", width: "150px", height: '30px', border: "1px solid gray", display: 'flex', padding: "5px", justifyContent: "space-between", alignItems: "center", alignSelf: "flex-start" }}>
          <span>filter</span>
          <FiChevronDown />
        </div>
        <div style={{ position: "relative", marginLeft: "50px"}}>
          <Input style={{background: 'transparent', border: '1px solid gray', height: '30px', width: '150px' }} type='text' placeholder='search roles...' />
          <SearchIcon />
        </div>
      </div>
      <StaffTable />
    </Wrapper>
  )
}

export default Staff