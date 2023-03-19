import React from 'react'
import style from 'styled-components'

export const DashboardContainer = style.div`
    height: 100vh;
    width: 100wh;
    background-color: #efefef;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(8, 1fr);
`