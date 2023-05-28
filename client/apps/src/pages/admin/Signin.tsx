import React from 'react'
import Wrapper from '../../components/admin/layouts/wrapper'
import SigninForm from '../../components/commons/forms/signinForm'
import Navbar from '../../components/admin/layouts/navbar'
import { Logo } from '../../components/admin/layouts/navbar/Navbar'

export const Signin = () => {
  console.log(window.location.pathname)
  return (
    <Wrapper user="auth">
      <Navbar>
        <Logo>
          Becca's
        </Logo>
      </Navbar>
      <SigninForm />
    </Wrapper>
  )
}
