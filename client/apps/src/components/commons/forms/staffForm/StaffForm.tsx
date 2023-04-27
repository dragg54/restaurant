import styled from 'styled-components'
import { SaveButton } from '../ItemForm/ItemForm'

export const FormContainer = styled.div`
    width: 400px;
    box-shadow: 1px 1px 1px gray;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StaffForm = styled.form`
    width: 100%;
    height: 100%;
    display: grid;
    padding: 20px;
    gap:10px;
    box-shadow: 1px 1px 1px gray;
    border-radius: 5px;
    background-color: white;
    grid-template-columns: repeat(3, 1fr);
`

export const NameInput = styled.input`
    grid-column: 1/ span 3;
    grid-row: 2;
    height: 40px;
    padding: 5px
`

export const EmailInput = styled.input`
    grid-column: 1/ span 3;
    grid-row: 3;
    padding: 5px;
    height: 40px
`

export const RoleInput = styled.select`
    grid-column: 1;
    grid-row: 4;
    padding: 5px;
    height: 40px
`

export const AccessLevelInput = styled.select`
    grid-column: 2;
    grid-row: 4
`

export const ActiveStatusInput = styled.select`
    grid-column: 3;
    grid-row: 4
`

export const SaveStaffButton = styled(SaveButton)`
    grid-row: 5;
    margin-top: 10px;
`