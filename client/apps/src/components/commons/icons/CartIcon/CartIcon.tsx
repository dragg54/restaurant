import styled from 'styled-components'

export const CartIconContainer = styled.div`
    width: 50px;
    height:100%;
    display: flex;
    align-items: center;
    color: #B9B7BD;
    position: relative;
    cursor: pointer;
`

export const CartContent = styled.h5`
    color: white;
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 3px;
    top: 15px
`
