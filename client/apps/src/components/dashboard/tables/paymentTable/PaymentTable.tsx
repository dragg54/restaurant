import styled from 'styled-components'

export const PaymentTable = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: 850px;
    margin-top: 40px;
    border: 1px solid gray;
    border-top-right-radius: 5px ;
    border-top-left-radius: 5px ;
`
export const PaymentHeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    border: 1px solid gray;
    background: #04D010;
    display: flex;
    padding: 10px;
    align-items: center;
    font-weight: 700;
    color: white;
    font-size: 1.2rem;
`

export const PaymentDetailContainer = styled(PaymentTable)`
    background: #fff;
    color: gray;
    margin-top: -4px
`
export const PaymentDetail = styled(PaymentHeaderContainer)`
    background: #fff;
    color: gray;
    font-size: 1rem;
`
