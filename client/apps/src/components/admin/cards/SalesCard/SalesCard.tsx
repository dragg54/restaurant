import React from 'react'
import styled from 'styled-components'


export const SalesCardContainer = styled.div`
    width: 250px;
    height: 100%;
    border-radius: 10px;
    max-height: 250px;
    background-color: white;
    box-shadow: 1px 1px gray;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
`

/* export const Section = style.div`
    grid-column: 2/span 9;
    grid-row: 2 / span 9;
    background-color: #efefef;
    display: grid
` */

export const Value = styled.h1`
    font-size: 3rem;
    margin-top: 20px;
    color: #050A30;
    font-weight: bold;
`

export const Description = styled.p`
    font-size: 1rem;
    color: #050A30;
`