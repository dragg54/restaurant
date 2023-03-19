import React from 'react'
import SearchIcon from '../../icons/SearchIcon'
import { Input } from './SearchField'

const index = () => {
  return (
    <div style={{position: 'relative', margin: 'auto'}}>
      <Input type='text' placeholder='search items...' />
      <SearchIcon />
    </div>
  )
}

export default index