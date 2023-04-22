import React from 'react'
import { StaffTable, TableDataContainer, TableHeadingContainer } from './StaffTable'

const index = () => {
  return (
    <StaffTable>
        <TableHeadingContainer style={{gridColumn: 1}}>
            Status
        </TableHeadingContainer>
        <TableHeadingContainer style={{gridColumn: "2/ span 2"}}>
            Name
        </TableHeadingContainer>
        <TableHeadingContainer style={{gridColumn: 4}}>
            Email
        </TableHeadingContainer>
        <TableHeadingContainer style={{gridColumn: 5}}>
            Role
        </TableHeadingContainer>
        <TableHeadingContainer style={{gridColumn: 6}}>
            Access Level
        </TableHeadingContainer>
        <TableDataContainer style={{gridColumn: 1}}>
            Active
        </TableDataContainer>
        <TableDataContainer style={{gridColumn: "2/ span 2"}}>
            James Benson
        </TableDataContainer>
        <TableDataContainer>
            jamesben@yahoo.com
        </TableDataContainer>
        <TableDataContainer>
            Manager
        </TableDataContainer>
        <TableDataContainer>
            Company Set Up
        </TableDataContainer>
        <TableDataContainer style={{gridColumn: 1}}>
            Active
        </TableDataContainer>
        <TableDataContainer style={{gridColumn: "2/ span 2"}}>
            James Benson
        </TableDataContainer>
        <TableDataContainer>
            jamesben@yahoo.com
        </TableDataContainer>
        <TableDataContainer>
            Manager
        </TableDataContainer>
        <TableDataContainer>
            Company Set Up
        </TableDataContainer>
        <TableDataContainer style={{gridColumn: 1}}>
            Active
        </TableDataContainer>
        <TableDataContainer style={{gridColumn: "2/ span 2"}}>
            James Benson
        </TableDataContainer>
        <TableDataContainer>
            jamesben@yahoo.com
        </TableDataContainer>
        <TableDataContainer>
            Manager
        </TableDataContainer>
        <TableDataContainer>
            Company Set Up
        </TableDataContainer>
        <TableDataContainer style={{gridColumn: 1}}>
            Active
        </TableDataContainer>
        <TableDataContainer style={{gridColumn: "2/ span 2"}}>
            James Benson
        </TableDataContainer>
        <TableDataContainer>
            jamesben@yahoo.com
        </TableDataContainer>
        <TableDataContainer>
            Manager
        </TableDataContainer>
        <TableDataContainer>
            Company Set Up
        </TableDataContainer>
    </StaffTable>
  )
}

export default index