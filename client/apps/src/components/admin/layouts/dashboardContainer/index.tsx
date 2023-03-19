import React from 'react'
import  Navbar  from '../navbar/index'
import SideBar from '../sidebar/index'
import { DashboardContainer } from './DashboardContainer'

const index = () => {
    return (
        <DashboardContainer>
            <Navbar />
            <SideBar />
        </DashboardContainer>
    )
    
}

export default index