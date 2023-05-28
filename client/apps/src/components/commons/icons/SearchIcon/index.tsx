import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { SearchIcon } from './SearchIcon'

const index = () => {
    return (
        <SearchIcon>
            <FiSearch style={{height: '30px', width:'30px'}}/>
        </SearchIcon>
    )
}

export default index