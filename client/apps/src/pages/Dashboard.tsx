import React, { useContext } from 'react'
import DashboardContainer from '@/components/dashboard/layouts/dashboardContainer'
import { Outlet } from 'react-router-dom'
import { ModalContext } from '../contexts/ModelContext'

const Dashboard = () => {
  const openModal = useContext(ModalContext)?.openModal
  return (
    <div style={{overflow: openModal? 'hidden': 'visible'}}>
      <DashboardContainer />
    </div>
  )
}

export default Dashboard