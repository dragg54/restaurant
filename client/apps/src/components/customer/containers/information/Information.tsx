import styled from "styled-components"

export const RouteList = styled.ul`
    display: flex;
    margin-top: 15px;
    width: 250px;
    justify-content: space-between;
    align-items: flex-end;
    height: 10px;
`

export const CheckoutRoute = styled.li`
    font-size: small;
`

export const ShippingContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    gap: 10px;
`

export const Heading = styled.p`
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 12px;
    margin-top: 15px;
`

export const ContinueToShopping = styled.button`
    padding: 20px 15px;
    background-color: #613659;
    color: white;
    font-weight: 500;
    border-radius: 6px;
    margin-top: 44px;
    border: none;
    position: absolute;
    right: 0px
`