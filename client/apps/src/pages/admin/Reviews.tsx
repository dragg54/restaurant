import React from 'react'
import { Wrapper } from '../../components/admin/layouts/wrapper/Wrapper'
import { AiOutlineReload } from 'react-icons/ai'
import ReviewCard from '../../components/admin/cards/ReviewCard'

const Reviews = () => {
  return (
    <Wrapper user="admin">
      <div style={{ display: 'flex', width: "100%", justifyContent: "space-between", alignItems: "center", marginTop:"30px" }}>
        <h1 style={{ alignSelf: "flex-start", fontSize: "1.4rem" }}>Reviews</h1>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#FFCD58', display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', }}>
          <AiOutlineReload style={{ width: '30px', height: '30px', color: '#fff' }} />
        </div>
      </div>
      <ReviewCard />
    </Wrapper>

  )
}

export default Reviews