import React from 'react'
import { OrderDetail, OrderDetailContainer, OrderHeaderContainer, OrderTable } from './OrderTable'
import { Order } from '../../../../types/Order'
import { CartItem } from '../../../../types/Cart'

const index = ({ orders }: { orders: [Order] }) => {
    return (
        <>
            <OrderTable>
                <OrderHeaderContainer style={{ gridColumn: "1/ span 2" }}>
                    Order Id
                </OrderHeaderContainer>
                <OrderHeaderContainer style={{ gridColumn: "3/ span 2" }}>
                    Customer Name
                </OrderHeaderContainer>
                <OrderHeaderContainer style={{ gridColumn: "5/ span 2" }}>
                    Address
                </OrderHeaderContainer>
                <OrderHeaderContainer style={{ gridColumn: "7/ span 2" }}>
                    Order
                </OrderHeaderContainer>
                <OrderHeaderContainer >
                    Order Status
                </OrderHeaderContainer>
            </OrderTable>
                {orders && orders.length > 0 && orders.map((order) => {
                    return (
                        <OrderDetailContainer>
                            <OrderDetail style={{ gridColumn: "1/ span 2", fontSize:'0.8rem' }} >
                                {order._id}
                            </OrderDetail>
                            <OrderDetail style={{ gridColumn: "3/ span 2" }}>
                                {order.name}
                            </OrderDetail>
                            <OrderDetail style={{ gridColumn: "5/ span 2" }}>
                                {order.contact.address.line1}
                            </OrderDetail>
                            <OrderDetail style={{ gridColumn: "7/ span 2", display: "flex", padding:"20px", flexDirection:"column", alignItems:"flex-start" }}>
                                {JSON.parse(order.cartItems[0]).map((itm:CartItem) => {
                                    return (
                                        <>
                                            <span>{itm.name} </span><br />

                                        </>
                                    )
                                })}
                            </OrderDetail>
                            <OrderDetail>
                               {order.status}
                            </OrderDetail>
                        </OrderDetailContainer>
                    )
                })}
        </>
    )
}

export default index