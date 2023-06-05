import React, { useContext, useState } from 'react'
import ItemCategoryContainer from '../../containers/itemCategory'
import Items from '../../containers/items'
import { ItemContext } from '../../../../contexts/ItemContext'
import { useFetchItem } from '../../../../api'
import { ItemWrapper } from '../../containers/items/Items'
import Footer from '../footer'
import { ViewMore } from './Section'

const index = () => {
  const { itemState } = useContext(ItemContext)
  useFetchItem("http://localhost:8080/api/v1/items")
  const [loadAmt, setLoadAmt] = useState(8)
  return (

    <div style={{ width: "100%", display: "flex", flexDirection:"column", alignItems:"center"}}>
      <ItemCategoryContainer />

      <ItemWrapper>
        {
          itemState?.length! > 0 && itemState?.slice(0, loadAmt).map((item) => {
            console.log("items",itemState)
            return (
              <Items {...{ item }} />
            )
          })
        }
      </ItemWrapper>
      <ViewMore onClick={()=>{
          loadAmt <= 8 ? setLoadAmt(10): setLoadAmt(8)
          console.log(loadAmt)
      }}>{loadAmt <= 8? "View More": "Show Less"}</ViewMore>
      <Footer />
    </div>
  )
}

export default index