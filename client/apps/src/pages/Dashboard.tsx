import React, { useContext, useState } from 'react'
import DashboardContainer from '@/components/dashboard/layouts/dashboardContainer'
import { Outlet } from 'react-router-dom'
import { ModalContext } from '../contexts/ModalContext'

const Dashboard = () => {
  const openModal = useContext(ModalContext)?.openModal
  return (
    <div style={{overflow: openModal? 'hidden': 'visible', height: openModal?'100vh':""}}>
      <DashboardContainer />
    </div>
  )
}

export default Dashboard