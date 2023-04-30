import React from 'react'
import { DividerLine, DividerLineContainer, EmailField, IconContainer, IconWrapper, PasswordField, SigninForm, SigninFormWrapper } from './SigninForm'
import SaveButton from '../../button/authButton/index'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'

const index = () => {
  return (
    <SigninFormWrapper>
      <SigninForm>
        <h1 style={{ alignSelf: "flex-start", color: 'black', fontSize: '1.2rem' }}>Welcome back</h1>
        <p style={{ alignSelf: "flex-start", color: 'gray', fontSize: '0.8rem', marginTop:"9px" }}>Log into your account</p>
        <EmailField type='text' placeholder='Enter your email' />
        <PasswordField type='password' placeholder='Enter your password' />
        <SaveButton authAction={{signin:true}} />
        <p style={{ alignSelf: "flex-start", color: 'gray', fontSize: '0.8rem', marginTop:"9px" }}>Not registered? <span style={{color:'green'}}>Create an account</span></p>
        <DividerLineContainer>
          <DividerLine />
          or
          <DividerLine />
        </DividerLineContainer>
        <IconWrapper>
        <IconContainer>
          <FcGoogle style={{width: '20px', height:'20px'}}/>
        </IconContainer>
        <IconContainer>
          <FaFacebookF style={{width: '20px', height:'20px', color:'#0E86D4'}}/>
        </IconContainer>
        </IconWrapper>
      </SigninForm>
    </SigninFormWrapper>
  )
}

export default index