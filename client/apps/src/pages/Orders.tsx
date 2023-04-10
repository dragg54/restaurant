import React from 'react'
import Wrapper from '../components/dashboard/layouts/wrapper'
import OrderTable from '../components/dashboard/orderTable'

const Orders = () => {
  return (
    <Wrapper>
      <h1 style={{alignSelf: "flex-start", fontSize: "1.4rem"}}>Order Report</h1>
      <div>
        <OrderTable />
      </div>
    </Wrapper>
  )
}

export default Orders