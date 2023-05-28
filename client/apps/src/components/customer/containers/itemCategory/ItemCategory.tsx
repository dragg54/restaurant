import styled from "styled-components"

export const ItemCategoryContainer = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 40px 0 0 0
`

export const ItemCategoryWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
`

export const ItemCategoryCard = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const CategoryImageContainer = styled.div`
    width: 100%;
    height: 200px;
    object-fit: contain;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Border = styled.div`
    width: 85%;
    border: 1px solid #C0C0C0;
    margin: 20px auto;
    box-shadow: 1px 1px 1px #C0C0C0;
`