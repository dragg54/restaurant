import React from 'react'
import { PaymentDetail, PaymentDetailContainer, PaymentHeaderContainer, PaymentTable } from './PaymentTable'

const index = () => {
    return (
        <>
            <PaymentTable>
                <PaymentHeaderContainer>
                    Payment Id
                </PaymentHeaderContainer>
                <PaymentHeaderContainer style={{ gridColumn: '2/ span 2' }}>
                    Customer
                </PaymentHeaderContainer>
                <PaymentHeaderContainer>
                    Amount Paid
                </PaymentHeaderContainer>
                <PaymentHeaderContainer>
                    Payment Type
                </PaymentHeaderContainer>
                <PaymentHeaderContainer>
                    Date
                </PaymentHeaderContainer>
            </PaymentTable>
            <PaymentDetailContainer>
                <PaymentDetail>
                    1234
                </PaymentDetail>
                <PaymentDetail style={{gridColumn: "2/ span 2"}}>
                    Kerry Penny
                </PaymentDetail>
                <PaymentDetail>
                   5000
                </PaymentDetail>
                <PaymentDetail>
                   Card
                </PaymentDetail>
                <PaymentDetail>
                   2022-12-03
                </PaymentDetail>
                <PaymentDetail>
                    1234
                </PaymentDetail>
                <PaymentDetail style={{gridColumn: "2/ span 2"}}>
                    Kerry Penny
                </PaymentDetail>
                <PaymentDetail>
                   5000
                </PaymentDetail>
                <PaymentDetail>
                   Card
                </PaymentDetail>
                <PaymentDetail>
                   2022-12-03
                </PaymentDetail>
                <PaymentDetail>
                    1234
                </PaymentDetail>
                <PaymentDetail style={{gridColumn: "2/ span 2"}}>
                    Kerry Penny
                </PaymentDetail>
                <PaymentDetail>
                   5000
                </PaymentDetail>
                <PaymentDetail>
                   Card
                </PaymentDetail>
                <PaymentDetail>
                   2022-12-03
                </PaymentDetail>
            </PaymentDetailContainer>
        </>
    )
}

export default index