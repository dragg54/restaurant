import React, { useContext } from 'react'
import ItemCategoryContainer from '../../containers/itemCategory'
import Items from '../../containers/items'
import { ItemContext } from '../../../../contexts/ItemContext'
import { useFetchItem } from '../../../../api'
import { ItemWrapper } from '../../containers/items/Items'
import Footer from '../footer'

const index = () => {
  const { itemState } = useContext(ItemContext)
  useFetchItem("http://localhost:8080/api/v1/items")
  console.log(itemState)
  return (

    <div style={{ width: "100%" }}>
      <ItemCategoryContainer />

      <ItemWrapper>
        {
          itemState?.length! > 0 && itemState?.splice(0, 8).map((item) => {
            return (
              <Items {...{ item }} />
            )
          })
        }
      </ItemWrapper>
      <Footer />
    </div>
  )
}

export default index