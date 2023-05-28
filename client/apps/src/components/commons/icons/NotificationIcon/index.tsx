import React from 'react'
import { NotificationIconContainer } from './NotificationIcon'
import { IoIosNotificationsOutline } from 'react-icons/io'

const index = () => {
  return (
    <NotificationIconContainer>
        <IoIosNotificationsOutline style={{height: '40px', width: '40px', color: 'gray', marginRight: 'auto'}}/>
    </NotificationIconContainer>
  )
}

export default index