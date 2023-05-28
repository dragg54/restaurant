import styled from "styled-components"

export const HeroContainer = styled.div`
    width: 100%;
    height:600px;
    background-color: white;
    display: flex;
    justify-content: space-around;

`

export const HeroCaptionContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px 0 50px 150px;
    align-items: flex-start;
    justify-content: center;
`

export const HeroImageContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding:0 150px 0 0;
    object-fit: contain;
    align-items: center;
`

export const HeroPrimaryCaption = styled.h1`
    font-size: 4rem;
    font-weight: 900;
`
export const HeroSecondaryCaption = styled.h1`
    font-size: 1rem;
    font-weight: 600;
    color: gray;
    margin-top: 15px;
    line-height: 26px;
`

export const HeroButton = styled.div`
    width: 200px;
    padding: 20px;
    background-color: #FF2511;
    color: white;
    margin-top: 30px;
    font-weight: 800;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 3px 3px 3px #FF2511;

`