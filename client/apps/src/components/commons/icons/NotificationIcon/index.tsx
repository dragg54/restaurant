import React from 'react'
import { NotificationIconContainer } from './NotificationIcon'
import { GrNotification } from 'react-icons/gr'

const index = () => {
  return (
    <NotificationIconContainer>
        <GrNotification style={{height: '100%', width: '20px', color: 'gray', marginRight: 'auto'}}/>
    </NotificationIconContainer>
  )
}

export default index