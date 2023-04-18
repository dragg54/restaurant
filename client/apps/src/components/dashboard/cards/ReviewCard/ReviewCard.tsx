import styled from "styled-components";

export const ReviewCardContainer = styled.div`
    width: 100%;
    padding:0 50px;
    background-color: #F6F4F0;
    margin-top: 20px;
`
export const ReviewCard = styled.div`
    width: 90%;
    height: 200px;
    border-radius: 5px;
    background-color: white;
    display: flex;;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 15px auto;
    box-shadow: 2px 2px 2px gray;
    &:hover{
        border: 2px solid red
    }
`

export const ImgCont = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: indigo;
    object-fit: contain;
    overflow: hidden;
    display: flex;
    justify-content: center;
`

export const CustomerDetl = styled.div`
    width: 100px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: gray;
`

export const ReviewContainer = styled.div`
    width: 500px;
    height: 80%;
    color: gray;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    line-height: 16px;
`

export const RatingContainer = styled.div`
    width: 100px;
    height: 80%;
    color: gold;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`