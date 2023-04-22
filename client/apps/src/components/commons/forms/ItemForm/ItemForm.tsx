import styled from 'styled-components'

export const ItemFormContainer = styled.div`
    width: 500px;
    height: 390px;
    border: 1px solid gray;
    border-radius: 4px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    box-shadow: 2px 2px 2px gray;
`

export const ItemForm = styled.form`
    width: 100%;
    height: 100%;
    display: grid;
    padding: 20px 22px;
    gap: 20px 15px;
    justify-items: center;
    align-content: flex-start
`
export const NameInput = styled.input`
    width: 100%;
    grid-row: 1/ span 2;
    grid-column: 1/ span 2;
    height: 40px;
    border-radius: 5px;
    outline: red;
    border: 1px solid gray;
    color: gray;
    padding: 4px;
    &:focus{
        outline: 2px solid red;
    }
`

export const CategoryInput = styled.input`
    width: 100%;
    grid-row: 1;
    grid-column: 3;
    height: 40px;
    border-radius: 5px;
    outline: red;
    border: 1px solid gray;
    color: gray;
    padding: 4px;
    &:focus{
        outline: 2px solid red;
    }

`

export const DescriptionInput = styled.textarea`
    width: 100%;
    grid-row: 2/ span 5;
    grid-column: 1/ span 3;
    padding: 8px;
    border: 5px;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 4px;
    &:focus{
        outline: 2px solid red;
    }

`

export const PriceInput = styled.input`
    width: 100%;
    grid-row: 7;
    grid-column: 1;
    height: 40px;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 4px;
    &:focus{
        outline: 2px solid red;
    }

`

export const QuantityInput = styled.input`
    width: 100%;
    grid-row: 7;
    grid-column: 2;
    height: 40px;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 4px;
    &:focus{
        outline: 2px solid red;
    }

`

export const DiscountInput = styled.input`
    width: 100%;
    grid-row: 7;
    grid-column: 3;
    height: 40px;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 4px;
    &:focus{
        outline: 2px solid red;
    }

`

export const FileInputContainer = styled.div`
  width: 100%;
  height: 50px;
   grid-row: 8;
    grid-column: 1/ span 2; 
    padding:'';
    display: flex;
    align-items: center;
    position: relative
`

export const FileInput = styled.input`
    position: absolute;
    left: 22px;
    font-size: 1rem;
    color: gray
`

export const FileInputLabel = styled.label`
height:100%;
display: inline-block;;
    font-size: 1rem;
    color: #B9B7BD;;
    font-weight: bold;
    background-color: #F6E6E8;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 4px;
    position: absolute;
    &:hover{
        cursor: pointer
    }
    z-index: 10;
`

export const SaveButton = styled.button`
    width: 100%;
    height: 50px;
    color: white;
    background: #E10032;
    grid-row: 9;
    grid-column: 1/ span 3;
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid gray
`

export const category = styled.input