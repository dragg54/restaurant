import styled from 'styled-components'

export const OrderTable = styled.div`
    display: grid;
    background: yellow;
    grid-template-columns: repeat(9, 1fr);
    width: 1100px;
    margin-top: 40px;
    border: 1px solid gray;
    border-top-right-radius: 5px ;
    border-top-left-radius: 5px ;

`
export const OrderHeaderContainer = styled.div`
    width: 100%;
    border: 1px solid gray;
    background: #FF2511;
    display: flex;
    padding: 10px;
    align-items: center;
    font-weight: 600;
    color: white;
    font-size: 1.2rem;
`

export const OrderDetailContainer = styled(OrderTable)`
    background: #fff;
    color: gray;
    margin-top: -4px
`
export const OrderDetail = styled(OrderHeaderContainer)`
    padding: 10px;
    background: #fff;
    color: gray;
    font-size: 1rem
`
