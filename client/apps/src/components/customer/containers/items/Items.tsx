import styled from "styled-components"

export const ItemWrapper = styled.div`
    --gap: 20px;
    --column: 4;
    width: 90%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: --gap;
`

export const ItemCard = styled.div`
    width: calc((100%/4) - (var(--gap) * 2));
    height: 430px;
    margin: 20px;
    box-shadow: 1px 1px 1px gray;
    border-radius: 5px;
    overflow: hidden;
`

export const ItemImg = styled.div`
    height: 60%;
    width: 100%;
    object-fit: contain;
    overflow: hidden;
    `

export const ItemDesc = styled.div`
    height: 40%;
    width: 100%;
    padding: 15px 10px 20px 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const AddToCartButton = styled.button`
    width: 100%;
    padding: 15px;
    background-color: #FF2511;
    color: white;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 1px #FF2511;
    font-weight: 700;
    display: flex;
    justify-content: center;
    transform: translate(0, 15%);
`
