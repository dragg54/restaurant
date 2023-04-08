import React from 'react'
import { Description, SalesCardContainer, Value } from './SalesCard'

type SalesProps = {
  Icon:React.ReactNode;
  value: String
  description: String
  span: string
}

const index = ({ Icon, value, description, span }: SalesProps) => {
  return (
      <SalesCardContainer>
        {Icon}
        <Value>
            {value}
        </Value>
        <Description>
          {description}
        </Description>
      </SalesCardContainer>

  )
}

export default index