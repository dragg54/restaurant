import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import style from 'styled-components'
import Section from './components/admin/layouts/section/index'
import Dashboard from './pages/admin/Dashboard'
import Items from './pages/admin/Items'
import Orders from './pages/admin/Orders'
import Payments from './pages/admin/Payments'
import Reviews from './pages/admin/Reviews'
import Settings from './pages/admin/Settings'
import Staff from './pages/admin/Staff'
import { Signin } from './pages/admin/Signin'
import Signup from './pages/common/Signup'
import ProtectedRoute from './components/commons/protectedRoutes'
import Home from './pages/customer/Home'
import Cart from './pages/customer/Cart'
import Checkout from './pages/customer/Checkout'
import Shipping from './components/customer/containers/shipping'
import Information from './components/customer/containers/information'
import Payment from './pages/customer/Payment'
import Notification from './pages/admin/Notification'
import CheckoutSuccessful from './pages/customer/CheckoutSuccessful'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<ProtectedRoute routeProps={<Dashboard />} />}>
          <Route path="/dashboard" element={<Section />} />
          <Route path="/dashboard/orders" element={<Orders />} />
          <Route path="/dashboard/items" element={<Items />} />
          <Route path="/dashboard/payments" element={<Payments />} />
          <Route path="/dashboard/reviews" element={<Reviews />} />
          <Route path="/dashboard/staff" element={<Staff />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/notification" element={<Notification />} />
        </Route>
        <Route path='/' element={<Home />}></Route>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cart" element={<Cart />} />
        <Route path='checkout' element={<Checkout />}>
          <Route path='information' element={<Information />} />
          <Route path='shipping' element={<Shipping />} />
          <Route path='payment' element={<Payment />} />
        </Route>
        <Route path='success' element={<CheckoutSuccessful />} />
      </Routes>
    </>
  )
}

export default App
