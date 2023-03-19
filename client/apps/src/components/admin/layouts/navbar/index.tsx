import React from 'react'
import { Logo, Navbar } from './Navbar'
import SearchField from '../../../commons/forms/SearchField'
import SearchIcon from '../../../commons/icons/SearchIcon'
import NotificationIcon  from '../../../commons/icons/NotificationIcon'

const index = () => {
  return (
    <Navbar>
        <Logo>
            Becca's
        </Logo>
        <SearchField />
        <NotificationIcon/>
    </Navbar>
  )
}

export default index