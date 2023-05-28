import React, { ReactNode } from 'react'
import { Wrapper } from './Wrapper'

type WrapperProps = {
    children: ReactNode,
}
const index = ({ children}: WrapperProps) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default index