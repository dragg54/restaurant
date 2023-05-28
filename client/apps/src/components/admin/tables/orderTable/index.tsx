import React from 'react'
import { OrderDetail, OrderDetailContainer, OrderHeaderContainer, OrderTable } from './OrderTable'

const index = () => {
    return (
        <>
            <OrderTable>
                <OrderHeaderContainer style={{ gridColumn: "1" }}>
                    Order Id
                </OrderHeaderContainer>
                <OrderHeaderContainer style={{ gridColumn: "2/ span 2" }}>
                    Customer Name
                </OrderHeaderContainer>
                <OrderHeaderContainer style={{ gridColumn: "4/ span 2" }}>
                    Address
                </OrderHeaderContainer>
                <OrderHeaderContainer style={{ gridColumn: "6/ span 2" }}>
                    Order
                </OrderHeaderContainer>
                <OrderHeaderContainer >
                    Order Status
                </OrderHeaderContainer>
            </OrderTable>
            <OrderDetailContainer>
                <OrderDetail>
                    1234
                </OrderDetail>
                <OrderDetail  style={{ gridColumn: "2/ span 2" }}>
                    Kenny Cole
                </OrderDetail>
                <OrderDetail  style={{ gridColumn: "4/ span 2" }}>
                    No 5, Bony Crumbs Street, California
                </OrderDetail>
                <OrderDetail  style={{ gridColumn: "6/ span 2" }}>
                    2 cheese burgers
                    <br />
                    3 chocolate cake
                </OrderDetail>
                <OrderDetail>
                    Prcoessing
                </OrderDetail>
                <OrderDetail>
                    1234
                </OrderDetail>
                <OrderDetail  style={{ gridColumn: "2/ span 2" }}>
                    Kenny Cole
                </OrderDetail>
                <OrderDetail  style={{ gridColumn: "4/ span 2" }}>
                    No 5, Bony Crumbs Street, California
                </OrderDetail>
                <OrderDetail  style={{ gridColumn: "6/ span 2" }}>
                    2 cheese burgers
                    <br />
                    3 chocolate cake
                </OrderDetail>
                <OrderDetail>
                    Prcoessing
                </OrderDetail>
                <OrderDetail>
                    1234
                </OrderDetail>
                <OrderDetail  style={{ gridColumn: "2/ span 2" }}>
                    Kenny Cole
                </OrderDetail>
                <OrderDetail  style={{ gridColumn: "4/ span 2" }}>
                    No 5, Bony Crumbs Street, California
                </OrderDetail>
                <OrderDetail  style={{ gridColumn: "6/ span 2" }}>
                    2 cheese burgers
                    <br />
                    3 chocolate cake
                </OrderDetail>
                <OrderDetail>
                    Prcoessing
                </OrderDetail>
            </OrderDetailContainer>
        </>
    )
}

export default index