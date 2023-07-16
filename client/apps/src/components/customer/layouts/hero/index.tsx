import React from 'react'
import { HeroButton, HeroCaptionContainer, HeroContainer, HeroImageContainer, HeroPrimaryCaption, HeroSecondaryCaption } from './Hero'

const index = () => {
    return (
        <HeroContainer>
            <HeroCaptionContainer>
                <HeroPrimaryCaption>Delicious Food Is Waiting For You</HeroPrimaryCaption>
                <HeroSecondaryCaption>We will make your taste bud beg for more <br /> with our varieties of delicious meals</HeroSecondaryCaption>
                <HeroButton>GO TO MENU</HeroButton>
            </HeroCaptionContainer>
            <HeroImageContainer>
                <img src="images/Hero.png" alt="" style={{width:"100%", height:"100%"}}/>
            </HeroImageContainer>
        </HeroContainer>
    )
}

export default index