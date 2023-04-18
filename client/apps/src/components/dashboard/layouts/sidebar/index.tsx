import React from 'react'
import HomeIcon from '@@/commons/icons/HomeIcon'
import { MenuContainer, MenuList, SideBar, SideBarMenuContainer } from './Sidebar'
import OrderIcon from '@@/commons/icons/OrderIcon'
import ItemIcon from '@@/commons/icons/ItemIcon'
import PaymentIcon from '@@/commons/icons/PaymentIcon'
import ReviewIcon from '@@/commons/icons/ReviewIcon'
import SettingsIcon from '@@/commons/icons/SettingsIcon'
import { Link } from 'react-router-dom'
import StaffIcon from '../../../commons/icons/StaffIcon'


const index = () => {
  return (
    <SideBar>
      <SideBarMenuContainer>
        <Link to="/" style={{ textDecoration: "none" }}>
          <MenuContainer>
            <HomeIcon />
            <MenuList>Dashboard</MenuList>
          </MenuContainer>
        </Link>
        <Link to="orders" style={{ textDecoration: "none" }}>
          <MenuContainer>
            <OrderIcon />
            <MenuList>Orders</MenuList>
          </MenuContainer>
        </Link>
        <Link to="items" style={{ textDecoration: "none" }}>
          <MenuContainer>
            <ItemIcon />
            <MenuList>Items</MenuList>
          </MenuContainer>
        </Link>
        <Link to="payments" style={{ textDecoration: "none" }}>
          <MenuContainer>
            <PaymentIcon />
            <MenuList>Payments</MenuList>
          </MenuContainer>
        </Link>
        <Link to="reviews" style={{ textDecoration: "none" }}>
          <MenuContainer>
            <ReviewIcon />
            <MenuList>Reviews</MenuList>
          </MenuContainer>
        </Link>
        <Link to="staff" style={{ textDecoration: "none" }}>
          <MenuContainer>
            <StaffIcon />
            <MenuList>Staff</MenuList>
          </MenuContainer>
        </Link>
        <Link to="settings" style={{ textDecoration: "none" }}>
          <MenuContainer>
            <SettingsIcon />
            <MenuList>Settings</MenuList>
          </MenuContainer>
        </Link>
      </SideBarMenuContainer>
    </SideBar>
  )
}

export default index