import React, { useState } from 'react'
import Wrapper from '../../components/admin/layouts/wrapper'
import OrderTable from '../../components/admin/tables/orderTable'
import { BiCalendar } from 'react-icons/bi'
import Calendar from '../../components/commons/calendar'


const Orders = () => {
  return (
    <Wrapper user="admin">
       <div style={{ display: 'flex', width: "100%", justifyContent: "space-between", alignItems: "center", marginTop: "50px" }}>
        <h1 style={{alignSelf: "flex-start", fontSize: "1.4rem"}}>Order Report</h1>
        <Calendar/>
    </div>
      <div>
        <OrderTable />
      </div>
    </Wrapper>
  )
}

export default Orders