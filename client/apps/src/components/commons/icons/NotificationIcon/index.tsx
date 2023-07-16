import React, { useContext, useEffect, useState } from 'react'
import { NotificationIconContainer } from './NotificationIcon'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { NotificationContext } from '../../../../contexts/NotificationContext'
import { Link, useNavigate } from 'react-router-dom'
import io from 'socket.io-client'
import { deleteNotifications, useFetchNotification } from '../../../../api'

const index = () => {
  const { notification, dispatchNotificationAction, isLoading } = useContext(NotificationContext)!
  console.log(notification)
  const navigate = useNavigate()

  const socket = io.connect('http://localhost:8080')

  const [openContainer, setOpenContainer] = useState(false)


  useEffect(() => {
    socket.on('receiveMessage', (data: any) => {
     if(nty){
      setNty(nty + 1)
     }
     else{
      setNty(1)
     }
    })
  }, [socket])
  useFetchNotification()
  const [nty, setNty] = useState<number>()

  useEffect(() => {
    setNty(notification?.notifications?.length)
  }, [notification])
  return (
    <NotificationIconContainer onClick={() => {
      nty && nty > 0 && setOpenContainer(!openContainer)
    }}>
      <IoIosNotificationsOutline style={{ height: '40px', width: '40px', color: 'gray', marginRight: 'auto' }} />
      {nty! > 0 ?
        <p style={{
          position: "absolute", right: "-6px", padding: "5px 9px", borderRadius: "50%",
          top: "-5px", color: "white", fontSize: "0.8rem", background: "red", fontWeight: "bold",
        }}>{nty}</p> : ""}
      <div style={{
        display: `${openContainer ? "flex" : "none"}`,
        borderRadius: "4px", boxShadow: "1px 1px 1px gray", border: "1px solid gray",
        position: "absolute", right: "-75px", padding: "10px", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", bottom: "-30px", color: "white", fontSize: "0.8rem", background: "#efefef", fontWeight: "bold", height: "90px", width: "240px"
      }}>
        <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
          <p style={{ marginTop: "4px" }}>
            You have received {nty} new order
          </p>
          <Link to={"orders"} style={{ marginTop: "4px" }}><a onClick={() => {
            dispatchNotificationAction({ type: "CLEAR_NOTIFICATION" })
            deleteNotifications()
            setNty(0)
          }}>Go to order</a></Link>
          <p style={{ position: "absolute", cursor: "pointer", right: "3px", top: "1px" }} onClick={() => {
            setOpenContainer(false)
            setNty(0)
            dispatchNotificationAction({ type: "CLEAR_NOTIFICATION" })
            deleteNotifications()
          }}>x</p>
        </div>

      </div>
    </NotificationIconContainer>
  )
}

export default index