import React from 'react'
import  Wrapper from '../components/dashboard/layouts/wrapper'
import SigninForm from '../components/commons/forms/signinForm'
import Navbar from '../components/dashboard/layouts/navbar'

export const Signin = () => {
  console.log(window.location.pathname)
  return (
    <Wrapper>
        <Navbar />
        <SigninForm />
    </Wrapper>
  )
}
