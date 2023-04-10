import style from 'styled-components'

export const ItemCard = style.div`
    width: 24%;
    height: 320px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px gray;
    overflow: hidden;
    color: #050A30;

`

export const ItemImageContainer = style.div`
    width: 100%;
    height: 55%;
    background-color: purple;
    object-fit: contain;
    overflow: hidden
`

export const ItemDescriptionContainer = style.div`
    width: 100%;
    height: 45%;
    background-color: #EAEFF2;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const ItemImg = style.img`
    width: 100%;
    height: 100%
`