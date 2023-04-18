import React from 'react'
import StaffTable from '../components/dashboard/tables/staffTable'
import { Wrapper } from '../components/dashboard/layouts/wrapper/Wrapper'
import PrimaryButton from '../components/commons/button/primaryButton'
import { BiPlusMedical } from 'react-icons/bi'
import SearchField from '../components/commons/forms/SearchField'
import { FiChevronDown } from 'react-icons/fi'
import { Input } from '../components/commons/forms/SearchField/SearchField'
import SearchIcon from '../components/commons/icons/SearchIcon'

const Staff = () => {
  return (
    <Wrapper>
      <div style={{ display: 'flex', width: "95%", justifyContent: "space-between", alignItems: "center", marginTop: "30px" }}>
        <h1 style={{ fontWeight: "bold" }}>Staff Roles</h1>
        <PrimaryButton bg="#E10032" icon={<BiPlusMedical />} buttonValue='Add Staff' />
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