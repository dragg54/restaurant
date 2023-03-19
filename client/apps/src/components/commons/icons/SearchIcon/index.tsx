import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { SearchIcon } from './SearchIcon'

const index = () => {
    return (
        <SearchIcon>
            <FiSearch style={{height: '100%', width:'100%'}}/>
        </SearchIcon>
    )
}

export default index