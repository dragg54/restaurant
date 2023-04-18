import React from 'react'
import { Wrapper } from '../components/dashboard/layouts/wrapper/Wrapper'
import PaymentTable from '../components/dashboard/tables/paymentTable'
import { BiCalendar } from 'react-icons/bi'

const Payments = () => {
  return (
    <Wrapper>
       <div style={{ display: 'flex', width: "100%", justifyContent: "space-between", alignItems: "center" }}>
       <h1 style={{alignSelf: "flex-start", fontSize: "1.4rem"}}>Payment Report</h1>
            <BiCalendar style={{alignSelf: 'flex-end', width: '50px', height: '50px', color: '#E10032'}}/>
      </div>
      <div></div>
            
            <PaymentTable />
    </Wrapper>
  )
}

export default Payments