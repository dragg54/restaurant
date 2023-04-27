import styled from 'styled-components'

export const ItemCard = styled.div`
    width: 24%;
    height: 320px;
    border-radius: 5px;
    position: relative;
    box-shadow: 2px 2px 2px gray;
    overflow: hidden;
    color: #050A30;
    &:hover{
        cursor: pointer;
    }

`

export const ItemImageContainer = styled.div`
    width: 100%;
    height: 55%;
    background-color: purple;
    object-fit: contain;
    overflow: hidden;
   
`

export const ItemDescriptionContainer = styled.div`
    width: 100%;
    height: 45%;
    background-color: #fff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative
`
export const ItemDescriptionSubContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 100;
    background-color: transparent;
`

export const ItemImg = styled.img`
    width: 100%;
    height: 100%
`