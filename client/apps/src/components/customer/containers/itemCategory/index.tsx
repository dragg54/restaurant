import React from 'react'
import { Border, CategoryImageContainer, ItemCategoryCard, ItemCategoryContainer, ItemCategoryWrapper } from './ItemCategory'

const index = () => {
    return (
        <div style={{width: '100%'}}> 
            <ItemCategoryContainer>
                <h1>CHOOSE CATEGORY</h1>
                <ItemCategoryWrapper>
                    <ItemCategoryCard>
                        <CategoryImageContainer>
                            <img src="images/items/pizcat.png" alt="" style={{ width: "300px", height: "250px" }} />
                        </CategoryImageContainer>
                        <small>Pizza</small>
                    </ItemCategoryCard>
                    <ItemCategoryCard>
                        <CategoryImageContainer>
                            <img src="images/items/burgcat.png" alt="" style={{ width: "250px", height: "250px" }} />
                        </CategoryImageContainer>
                        <small>Burger</small>
                    </ItemCategoryCard>
                    <ItemCategoryCard>
                        <CategoryImageContainer>
                            <img src="images/items/cakecat.png" alt="" style={{ width: "200px", height: "200px", marginTop: "-40px" }} />
                        </CategoryImageContainer>
                        <small>Cake</small>
                    </ItemCategoryCard>
                </ItemCategoryWrapper>
            </ItemCategoryContainer>
            <Border/>
        </div>
    )
}

export default index