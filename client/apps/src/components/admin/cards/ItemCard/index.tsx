import React, { MutableRefObject, useContext } from 'react'
import { ItemCard, ItemDescriptionContainer, ItemDescriptionSubContainer, ItemImageContainer, ItemImg } from './ItemCard'
import { AiFillStar } from 'react-icons/ai'
import { ModalContext } from '../../../../contexts/ModalContext'
import { ItemContext } from '../../../../contexts/ItemContext'
import { FormItemContext } from '../../../../contexts/FormItemContext'
import { Item } from '../../../../types/Item'

type ItemProps = {
    id: number,
    price: number,
    description: string,
    discount: number,
    image: {
        data: ArrayBufferLike

    },
    name: string,
    rating: number,
    quantity: string
}

type OpenModal = {
    openModal: boolean
}

const index = ({id, price, description, discount, image, name, rating, quantity }: ItemProps) => {
    const openModal = useContext(ModalContext)?.openModal
    const setOpenModal = useContext(ModalContext)?.setOpenModal!
    const { setFormType } = useContext(ModalContext)
    const modalRef: MutableRefObject<null | HTMLDivElement> = useContext(ModalContext)?.modalRef!
    const base64String = btoa(String.fromCharCode(...new Uint8Array(image?.data)))
    const { itemState } = useContext(ItemContext)

    const { itemToBeUpdated, setItemToBeUpdated}  = useContext(FormItemContext)!
    const getItem = (id: number) =>{
        const item: Item= itemState?.find(x => (x as Item)._id == id)!
        return setItemToBeUpdated!(item);
    }
    return (
        <ItemCard id="modcon" onClick={() => {
            getItem(id)
            itemToBeUpdated?.name && setOpenModal(true)
            setFormType!({
                isAddRoleForm: false,
                isEditRoleForm: false,
                isAddItemForm: false,
                isEditItemForm: true
            })
        }}>
            <ItemDescriptionSubContainer id='modcon' />
            <ItemImageContainer >
                <ItemImg src={`data:image/png;base64,${base64String}`} alt="image" width={200} height={200} id='modcon' />
            </ItemImageContainer>
            <ItemDescriptionContainer id='modcon'>
                <ItemDescriptionSubContainer />
                <h4>{name}</h4>
                <h1>${price}</h1>
                <p style={{ fontSize: "0.8rem" }}>{description}</p>
                <p style={{color: "red", fontSize:"0.8rem", marginTop:"3px"}}>{quantity} items left</p>
            </ItemDescriptionContainer>
        </ItemCard>
    )
}

export default index