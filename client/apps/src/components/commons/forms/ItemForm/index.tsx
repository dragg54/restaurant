import React from 'react'
import { CategoryInput, DescriptionInput, DiscountInput, FileInput, FileInputContainer, FileInputLabel, ItemForm, ItemFormContainer, NameInput, PriceInput, QuantityInput, SaveButton } from './ItemForm'
import PrimaryButton from '../../button/primaryButton'

const index = () => {
  return (
    <ItemFormContainer id = "modcon">
      <ItemForm id="modcon">
        <NameInput type='text' placeholder='Enter item name' />
        <CategoryInput type='text' placeholder='Enter category' />
        <DescriptionInput placeholder='Enter description...' rows={4} />
        <PriceInput type='number' step={undefined} placeholder='Enter price' />
        <QuantityInput type='number' placeholder='Enter quantity' />
        <DiscountInput type='number' placeholder='Enter discount' />
        <FileInputContainer>
          <FileInputLabel htmlFor='file'>Upload a file</FileInputLabel>
            <FileInput id='file' type="file" name='file' />
        </FileInputContainer>
        <SaveButton>Save</SaveButton>
      </ItemForm>
    </ItemFormContainer>
  )
}

export default index