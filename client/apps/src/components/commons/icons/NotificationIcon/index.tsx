import React from 'react'
import { NotificationIconContainer } from './NotificationIcon'
import { IoIosNotificationsOutline } from 'react-icons/io'

const index = () => {
  return (
    <NotificationIconContainer>
        <IoIosNotificationsOutline style={{height: '30px', width: '30px', color: 'gray', marginRight: 'auto'}}/>
    </NotificationIconContainer>
  )
}

export default index