import React from 'react'
import { Wrapper } from '../components/dashboard/layouts/wrapper/Wrapper'
import PaymentTable from '../components/dashboard/tables/paymentTable'
import { BiCalendar } from 'react-icons/bi'
import  Calendar from '../components/commons/calendar'

const Payments = () => {
  return (
    <Wrapper>
       <div style={{ display: 'flex', width: "100%", justifyContent: "space-between", alignItems: "center", marginTop: "50px" }}>
       <h1 style={{alignSelf: "flex-start", fontSize: "1.4rem"}}>Payment Report</h1>
       <Calendar />
      </div>
      <div></div>
            
            <PaymentTable />
    </Wrapper>
  )
}

export default Payments