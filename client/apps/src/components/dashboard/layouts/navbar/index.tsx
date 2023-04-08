import React from 'react'
import { Logo, Navbar } from './Navbar'
import SearchField from '@@/commons/forms/SearchField'
import SearchIcon from '@@/commons/icons/SearchIcon'
import NotificationIcon  from '@@/commons/icons/NotificationIcon'
import  CurrentUserContainer from '@@/commons/containers/CurrentUserContainer'

const index = () => {
  return (
    <Navbar>
        <Logo>
            Becca's
        </Logo>
        <SearchField />
        <NotificationIcon/>
        <CurrentUserContainer/>
    </Navbar>
  )
}

export default index