import React from 'react'
import Navbar from '../navbar/index'
import SideBar from '../sidebar/index'
import { DashboardContainer, OutletContainer } from './DashboardContainer'
import { Outlet } from 'react-router-dom'
import Section from '../section'

const index = () => {
    return (
        <DashboardContainer>
            <Navbar />
            <SideBar />
            <OutletContainer>
                <Outlet />
            </OutletContainer>
        </DashboardContainer>
    )

}

export default index