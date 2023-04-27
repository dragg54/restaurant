import React from 'react'
import { List, TrendyDrinksContainer, TrendyFoodsContainer, TrendyMealsContainer } from './TrendyMeal'

const index = () => {
  return (
    <TrendyMealsContainer>
        <TrendyFoodsContainer>
          <h3 style={{color: "#04D010"}}>Trending Foods</h3>
          <ul>
            <List>Pichanto Burger</List>
            <List>Cheddar Burger</List>
            <List>Ginger Sesame</List>
            <List>Mineta Burger</List>
            <List>Nacho Burger</List>
          </ul>
        </TrendyFoodsContainer>
        <TrendyDrinksContainer>
        <h3 style={{color: "#04D010"}}>Trending Drinks</h3>
          <ul>
            <List>Pichanto Drink</List>
            <List>Cheddar Cola</List>
            <List>Ginger Drink</List>
            <List>Mineta Drink</List>
            <List>Nacho Drink</List>
          </ul>
        </TrendyDrinksContainer>
    </TrendyMealsContainer>
  )
}

export default index