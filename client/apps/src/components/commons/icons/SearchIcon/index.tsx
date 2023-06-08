import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { SearchIcon } from './SearchIcon'

const index = () => {
    return (
        <SearchIcon>
            <CiSearch style={{height: '30px', width:'30px'}}/>
        </SearchIcon>
    )
}

export default index