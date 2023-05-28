import React from 'react'
import { ItemCard, ItemDesc, ItemImg, ItemWrapper } from './Items'
import { Item } from '../../../../types/Item'
import { AiFillStar } from 'react-icons/ai'

const index = ({item}: {item: Item}) => {
    const base64String = btoa(String.fromCharCode(...new Uint8Array(item?.image?.data.data)))
    console.log(item.image)
  return (
    
        <ItemCard>
            <ItemImg>
                <img src={`data:image/png;base64,${base64String}`} alt="image" style={{width: "100%", height:"100%"}} />
            </ItemImg>
            <ItemDesc>
            <h4>{item.name}</h4>
                <h1>${item.price}</h1>
                <p style={{ fontSize: "0.8rem" }}>{item.description}</p>
                <div style={{ color: "gold" }}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
            </ItemDesc>
        </ItemCard>
       
  )
}

export default index