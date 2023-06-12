import styled from 'styled-components'

export const CartWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 90px;
    margin-top: 100px;
`

export const Cart = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
`

export const CartContainer = styled.div`
    width: 100%;
    height: 200px;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`
export const CartTotalContainer = styled.div`
    width: 35%;
    height: 300px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 1px 1px 1px gray;
    display: flex;
    flex-direction: column;
    padding: 15px;
    align-items: flex-start;
    justify-content: space-between;
`

export const ItemImageContainer = styled.div`
    width: 120px;
    height: 120px;
    background-color: green;
    object-fit: cover;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NameAndDescriptionContainer = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    line-height: 30px;
    color: gray;
    justify-content: center;
`

export const CounterContainer = styled.div`
    height: 40px;
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
`

export const Price = styled.h5`
    font-size: 2rem;
    color: gray
`

export const Delete = styled.button`
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
    border: none;
`

export const SumBox = styled.button`
    width:40px;
    height: 40px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
    color: white;
    border-radius: 3px;
    border: none
`

export const EmptyCartContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const GoShoppingButton = styled.button`
    width: 300px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px #FF2511;
    background-color: #FF2511;
    color: white;
    margin-top: 35px;
    border: none;
    font-weight: 800;
`

export const CheckOutButton = styled.button`
    width: 100%;
    padding: 20px;
    border-radius: 5px;
    background-color: #FF2511;
    color: white;
    font-weight: 800;
    border: none;
`