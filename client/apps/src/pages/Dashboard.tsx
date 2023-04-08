import React from 'react'
import DashboardContainer from '@/components/dashboard/layouts/dashboardContainer'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <DashboardContainer />
    </div>
  )
}

export default Dashboard