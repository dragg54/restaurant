import React from 'react'
import { Logo, Navbar } from './Navbar'
import SearchField from '@@/commons/forms/SearchField'
import SearchIcon from '@@/commons/icons/SearchIcon'
import NotificationIcon  from '@@/commons/icons/NotificationIcon'
import  CurrentUserContainer from '@@/commons/containers/CurrentUserContainer'


const index = ({children}: {children: React.ReactNode}) => {
  return (
    <Navbar>
       {children}
    </Navbar>
  )
}

export default index