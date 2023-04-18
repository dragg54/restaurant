import React from 'react'
import styled from 'styled-components'

export const DashboardContainer = styled.div`
    width: 100vw;
    background-color: #F6F4F0;
    display: grid;
    grid-gap: 10px 15px;
    position: relative;
    grid-template-columns: repeat(8, 1fr);
    overflow-y: visible;

`

export const OutletContainer = styled.div`
    grid-column: 2/span 9;
    grid-row: 2 / span 9;
    height: 100%;
    margin-top: 50px;
    `