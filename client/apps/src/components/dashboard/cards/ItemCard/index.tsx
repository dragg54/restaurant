import React, { MutableRefObject, useContext } from 'react'
import { ItemCard, ItemDescriptionContainer, ItemDescriptionSubContainer, ItemImageContainer, ItemImg } from './ItemCard'
import { AiFillStar } from 'react-icons/ai'
import { ModalContext } from '../../../../contexts/ModalContext'

type ItemProps = {
    price: number,
    description: string,
    discount: number,
    image: string,
    name: string,
    rating: number
}

type OpenModal = {
    openModal: boolean 
}

const index = ({price, description, discount, image, name, rating}: ItemProps) => {
    for(let i = 0; i <= Math.floor(rating); i++){   
    }
const openModal = useContext(ModalContext)?.openModal
const setOpenModal = useContext(ModalContext)?.setOpenModal!
const modalRef: MutableRefObject<null | HTMLDivElement> = useContext(ModalContext)?.modalRef!
  return (
    <ItemCard id="modcon" onClick={()=>{
        setOpenModal(true)
        console.log(openModal)
    }}>
        <ItemImageContainer >
            <ItemImg src="images/items/Burger1.jpg" alt="image"/>
        </ItemImageContainer>
        <ItemDescriptionContainer>
            <ItemDescriptionSubContainer/>
            <h4>{name}</h4>
            <h1>${price}</h1>
            <p>{description}</p>
            <div style={{color: "gold"}}>
                <AiFillStar/>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                </div>
        </ItemDescriptionContainer>
    </ItemCard>
  )
}

export default index