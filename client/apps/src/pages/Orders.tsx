import React from 'react'
import Wrapper from '../components/dashboard/layouts/wrapper'
import OrderTable from '../components/dashboard/tables/orderTable'
import { BiCalendar } from 'react-icons/bi'

const Orders = () => {
  return (
    <Wrapper>
       <div style={{ display: 'flex', width: "100%", justifyContent: "space-between", alignItems: "center", marginTop: "50px" }}>
        <h1 style={{alignSelf: "flex-start", fontSize: "1.4rem"}}>Order Report</h1>
        <BiCalendar style={{alignSelf: 'flex-end', width: '50px', height: '50px', color: '#E10032'}}/>
      </div>
      <div>
        <OrderTable />
      </div>
    </Wrapper>
  )
}

export default Orders