import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import style from 'styled-components'
import Section from './components/dashboard/layouts/section/index'
import Dashboard from './pages/Dashboard'
import Items from './pages/Items'
import Orders from './pages/Orders'
import Payments from './pages/Payments'
import Reviews from './pages/Reviews'
import Settings from './pages/Settings'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Section />} />
          <Route path="orders" element={<Orders />} />
          <Route path="items" element={<Items />} />
          <Route path="payments" element={<Payments />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
