import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { CategoryInput, DescriptionInput, DiscountInput, FileInput, FileInputContainer, FileInputLabel, ItemForm, ItemFormContainer, NameInput, PriceInput, QuantityInput, SaveButton } from './ItemForm'
import PrimaryButton from '../../button/primaryButton'
import { postRequest, updateItem } from '../../../../api'
import { Item } from '../../../../types/Item'
import { ModalContext } from '../../../../contexts/ModalContext'
import { FormItemContext } from '../../../../contexts/FormItemContext'

const index = () => {
  const {itemToBeUpdated} = useContext(FormItemContext)!
  const formData = new FormData()
  const { formType } = useContext(ModalContext)
  const [itemValue, setItemValue] = useState<Item>({
    name:"",
    category:'',
    description:'',
    price:'',
    quantity: 0,
    image: ""
  })
  interface ItemValue extends EventTarget{
      name: string,
      value: string
      }

      useEffect(()=>{
        setItemValue({
          name:itemToBeUpdated?.name,
          category:itemToBeUpdated?.category,
          description:itemToBeUpdated?.description,
          price: itemToBeUpdated?.price,
          quantity: itemToBeUpdated? itemToBeUpdated.quantity: 0,
          image: itemToBeUpdated? itemToBeUpdated.image: ""

        })
      }, [formType?.isEditItemForm, itemToBeUpdated])
  
  const handleInput = (e: ChangeEvent<HTMLInputElement |HTMLTextAreaElement> ) =>{
    e.preventDefault()
    setItemValue({...itemValue, [(e.target as ItemValue).name]: (e.target as ItemValue).value})
  }

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault()
    setItemValue({...itemValue, [e.target.name]: e.target?.files![0]})
  }
  formData.append('image', itemValue.image)

  const [postItemRequest] = postRequest('http://localhost:8080/api/v1/item/create', itemValue)
  const [updateItemRequest] = updateItem(`http://localhost:8080/api/v1/item/${itemToBeUpdated?._id}`, itemValue)
  return (
    <ItemFormContainer id="modcon">
      <ItemForm id="modcon" onSubmit={(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        formType?.isEditItemForm? updateItemRequest() : postItemRequest()
      }}>
      <h1 style={{fontSize: '1.1rem', whiteSpace:'nowrap', marginRight: 'auto'}}>Add Item</h1>
        <NameInput type='text' name='name' placeholder='Enter item name' value={itemValue.name} onChange={(e)=> handleInput(e)}/>
        <CategoryInput type='text' name='category' placeholder='Enter category' value={itemValue.category} onChange={(e)=> handleInput(e)}/>
        <DescriptionInput  name='description'  placeholder='Enter description...' value={itemValue.description} rows={4} onChange={(e)=> handleInput(e)}/>
        <PriceInput type='text' name='price' step={undefined} placeholder='Enter price' value={itemValue.price} onChange={(e)=> handleInput(e)}/>
        <QuantityInput type='number' name = 'quantity' placeholder='Enter quantity' value={itemValue.quantity} onChange={(e)=> handleInput(e)}/>
        <DiscountInput type='number' name='discount' placeholder='Enter discount' value={itemValue.discount} onChange={(e)=> handleInput(e)}/>
        <FileInputContainer>
          <FileInputLabel htmlFor='image'>Upload a file</FileInputLabel>
          <FileInput id='image' type="file" name='image'  onChange={(e)=> handleImageInput(e)}/>
        </FileInputContainer>
        <SaveButton type='submit'>{formType?.isAddItemForm? "Save": "Update"}</SaveButton>
      </ItemForm>
    </ItemFormContainer>
  )
}

export default index