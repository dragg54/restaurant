import React from 'react'
import { AuthButton } from './AuthButton'

type AuthActionProp = {
  authAction:{
    signin?: boolean,
    register?: boolean
  }
}
 const index = ({authAction}: AuthActionProp) => {
  return (
    <AuthButton type='submit'>
       {authAction.signin? "Log In": "Sign Up"}
    </AuthButton>
  )
}

export default index
