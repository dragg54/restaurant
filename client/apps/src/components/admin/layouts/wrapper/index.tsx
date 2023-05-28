import React, { ReactNode } from 'react'
import { User, Wrapper } from './Wrapper'

type WrapperProps = {
    children: ReactNode,
    user:string
}
const index = ({ children, user}: WrapperProps) => {
    return (
        <Wrapper user= {user}>
            {children}
        </Wrapper>
    )
}

export default index