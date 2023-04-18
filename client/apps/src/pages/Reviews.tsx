import React from 'react'
import { Wrapper } from '../components/dashboard/layouts/wrapper/Wrapper'
import { AiOutlineReload } from 'react-icons/ai'
import ReviewCard from '../components/dashboard/cards/ReviewCard'

const Reviews = () => {
  return (
    <Wrapper>
      <div style={{ display: 'flex', width: "100%", justifyContent: "space-between", alignItems: "center", marginTop:"30px" }}>
        <h1 style={{ alignSelf: "flex-start", fontSize: "1.4rem" }}>Reviews</h1>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#E10032', display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', }}>
          <AiOutlineReload style={{ width: '30px', height: '30px', color: '#fff' }} />
        </div>
      </div>
      <ReviewCard />
    </Wrapper>

  )
}

export default Reviews