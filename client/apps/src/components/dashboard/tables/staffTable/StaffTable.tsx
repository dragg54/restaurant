import styled from 'styled-components'

export const StaffTable = styled.div`
    display: grid;
    width: 95%;
    background-color: green;
    grid-template-columns: repeat(6, 1fr);
    margin-top: 40px;
    background-color: #fff;
`

export const TableHeadingContainer = styled.div`
    background-color: #04D010;
    width: 100%;
    border: 1px solid gray;
    padding: 30px 20px;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
`

export const TableDataContainer = styled(TableHeadingContainer)`
    background-color: #fff;
    font-size: 1rem;
    color: gray
`