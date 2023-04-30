import React, { ChangeEvent, useState } from 'react'
import { CategoryInput, DescriptionInput, DiscountInput, FileInput, FileInputContainer, FileInputLabel, ItemForm, ItemFormContainer, NameInput, PriceInput, QuantityInput, SaveButton } from './ItemForm'
import PrimaryButton from '../../button/primaryButton'
import { postRequest } from '../../../../api'
import { Item } from '../../../../types/ItemType'

const index = () => {
  const formData = new FormData()
  const [itemValue, setItemValue] = useState<Item>({
    name:'',
    category:'',
    description:'',
    price:'',
    quantity:0,
    image: ''
  })

  interface ItemValue extends EventTarget{
      name: string,
      value: string
      }


  const handleInput = (e: ChangeEvent<HTMLInputElement |HTMLTextAreaElement> ) =>{
    e.preventDefault()
    setItemValue({...itemValue, [(e.target as ItemValue).name]: (e.target as ItemValue).value})
    console.log(itemValue)
  }

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault()
    setItemValue({...itemValue, [e.target.name]: e.target?.files![0]})
  }

  formData.append('image', itemValue.image)

  const [postItemRequest] = postRequest('http://localhost:8080/api/v1/item/create', itemValue)
  return (
    <ItemFormContainer id="modcon">
      <ItemForm id="modcon" onSubmit={(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        postItemRequest()
      }}>
      <h1 style={{fontSize: '1.1rem', whiteSpace:'nowrap', marginRight: 'auto'}}>Add Item</h1>
        <NameInput type='text' name='name' placeholder='Enter item name' onChange={(e)=> handleInput(e)}/>
        <CategoryInput type='text' name='category' placeholder='Enter category' onChange={(e)=> handleInput(e)}/>
        <DescriptionInput  name='description'  placeholder='Enter description...' rows={4} onChange={(e)=> handleInput(e)}/>
        <PriceInput type='number' name='price' step={undefined} placeholder='Enter price' onChange={(e)=> handleInput(e)}/>
        <QuantityInput type='number' name = 'quantity' placeholder='Enter quantity' onChange={(e)=> handleInput(e)}/>
        <DiscountInput type='number' name='discount' placeholder='Enter discount' onChange={(e)=> handleInput(e)}/>
        <FileInputContainer>
          <FileInputLabel htmlFor='image'>Upload a file</FileInputLabel>
          <FileInput id='image' type="file" name='image' onChange={(e)=> handleImageInput(e)}/>
        </FileInputContainer>
        <SaveButton type='submit'>Save</SaveButton>
      </ItemForm>
    </ItemFormContainer>
  )
}

export default index