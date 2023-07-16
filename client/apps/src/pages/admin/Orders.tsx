import React, { useEffect, useState } from 'react'
import Wrapper from '../../components/admin/layouts/wrapper'
import OrderTable from '../../components/admin/tables/orderTable'
import { BiCalendar } from 'react-icons/bi'
import Calendar from '../../components/commons/calendar'
import { useFetchOrder } from '../../api'
import { Order } from '../../types/Order'
import { IoMdRefresh } from 'react-icons/io'


const Orders = () => {
  const[refresh , setRefresh] = useState(false)
  const [orders, loading]= useFetchOrder(refresh)
  const [order, setOrder] = useState<[Order]>()!

  useEffect(()=>{
    setOrder(orders!)
  }, [loading])
  console.log(orders)
  return (
    <Wrapper user="admin">
       <div style={{ display: 'flex', width: "100%", justifyContent: "space-between", alignItems: "center", marginTop: "50px" }}>
        <h1 style={{alignSelf: "flex-start", fontSize: "1.4rem"}}>Order Report</h1>
        <div style={{display:"flex"}}>
        <IoMdRefresh style={{fontSize:"3rem", marginRight:"20px",  color: '#FFCD58', cursor:"pointer"}} onClick={(()=>{
          setRefresh(!refresh)
        })}/>
        <Calendar/>
        </div>
    </div>
      <div>
        <OrderTable {...{orders}}/>
      </div>
    </Wrapper>
  )
}

export default Orders