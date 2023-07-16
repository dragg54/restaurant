import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'
import { NotificationContext } from '../../contexts/NotificationContext'
import Wrapper from '../../components/admin/layouts/wrapper'
import { useFetchNotification } from '../../api'


const Notification = () => {
  const socket = io.connect('http://localhost:8080')
  const [input, setInput] = useState('')
  const [message, setMessage] = useState()

  const { dispatchNotificationAction, notification } = useContext(NotificationContext)!

  useEffect(() => {
    socket.on('receiveMessage', (data: any) => {
      setMessage(data.message)
    })
  }, [socket])

const notifications =  useFetchNotification()
  return (
    <Wrapper user="admin">
      <div style={{ display: 'flex', flexDirection:"column", width: "100%", justifyContent: "space-between", marginTop: "50px" }}>
        <h1>
          Message
        </h1>
        {notification && notification.notifications && notification.notifications.length && notification.notifications.map((nty) => {
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>
                {nty.msg}
              </p>
            </div>
          )
        })}
        <p style={{color:"red"}}>{message}</p>
      </div>
    </Wrapper>

  );
  return (
    <div></div>
  )
}

export default Notification