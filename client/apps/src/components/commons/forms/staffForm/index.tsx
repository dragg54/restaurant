import React from 'react'
import { AccessLevelInput, ActiveStatusInput, EmailInput, FormContainer, NameInput, RoleInput, SaveStaffButton, StaffForm } from './StaffForm'
import { SaveButton } from '../ItemForm/ItemForm'

const index = () => {
  return (
    <FormContainer>
      <StaffForm>
        <h1 style={{fontSize: '1.1rem', whiteSpace:'nowrap'}}>Add Staff</h1>
        <NameInput type='text' placeholder='Enter name'/>
        <EmailInput type='email' placeholder='Enter email'/>
        <RoleInput>
          <option value={0}>Super Admin</option>
          <option value={1}>Manager</option>
          <option value={2}>Accountant</option>
          <option value={3}>Logistics</option>
        </RoleInput>
        <AccessLevelInput>
          <option value={0}>Company</option>
          <option value={1}>Finance</option>
          <option value={2}>Kitchen</option>
        </AccessLevelInput>
        <ActiveStatusInput>
          <option value={0}>Active</option>
          <option value={1}>Inactive</option>
        </ActiveStatusInput>
        <SaveStaffButton>Save</SaveStaffButton>
      </StaffForm>
    </FormContainer>
  )
}

export default index