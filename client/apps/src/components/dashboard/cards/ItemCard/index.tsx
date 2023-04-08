import React from 'react'
import { ItemCard, ItemDescriptionContainer, ItemImageContainer, ItemImg } from './ItemCard'
import { AiFillStar } from 'react-icons/ai'

type ItemProps = {
    price: number,
    description: string,
    discount: number,
    image: string,
    name: string,
    rating: number
}

const index = ({price, description, discount, image, name, rating}: ItemProps) => {
    for(let i = 0; i <= Math.floor(rating); i++){
        
    }

  return (
    <ItemCard>
        <ItemImageContainer>
            <ItemImg src="images/items/Burger1.jpg" alt="image" />
        </ItemImageContainer>
        <ItemDescriptionContainer>
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