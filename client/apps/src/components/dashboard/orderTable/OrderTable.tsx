import styled from 'styled-components'

export const OrderTable = styled.div`
    display: grid;
    background: yellow;
    grid-template-columns: repeat(8, 1fr);
    width: 1100px;
    margin-top: 40px;

`
export const OrderHeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    border: 1px solid gray;
    background: red;
    display: flex;
    padding: 10px;
    align-items: center;
    font-weight: 600;
    color: white;
    font-size: 0.85rem;
`

export const OrderDetailContainer = styled(OrderTable)`
    background: #fff;
    color: gray;
    margin-top: 0
`
export const OrderDetail = styled(OrderHeaderContainer)`
    background: #fff;
    color: gray;
`
