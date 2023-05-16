import React from 'react'
import style from 'styled-components'

export const Navbar = style.div`
    grid-row: 1;
    background-color: #fff;
    grid-column: 1/ span 9;
    grid-row: 1;
    z-index: 10;
    box-shadow: 2px 2px #efefef;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px;
    box-sizing: border-box;
    height: 80px;
    position: fixed;
    width: 100%;
`

export const Logo = style.p`
    color: #FF2511;
    font-family: 'Pacifico', cursive;
    font-weight: bold;
    font-size: 1.3rem
`
/* font-family: 'Montserrat', sans-serif;
 */