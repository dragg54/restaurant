import React, { useState } from 'react'
import { DividerLine, DividerLineContainer, EmailField, IconContainer, IconWrapper, PasswordField, SigninForm, SigninFormWrapper } from './SigninForm'
import SaveButton from '../../button/authButton/index'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import { User } from '../../../../types/User'
import { postSignInRequest } from '../../../../api'

const index = () => {
  const[inputValues, setInputValues] = useState<User>({
    email:"",
    password:""
  })
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setInputValues({...inputValues, [e.target.name]: e.target.value})
  }
  const [ postSignIn ] = postSignInRequest("http://localhost:8080/api/v1/auth/login", inputValues)
  return (
    <SigninFormWrapper>
      <SigninForm onSubmit={(e)=>{
        e.preventDefault()
        postSignIn()
      }}>
        <h1 style={{ alignSelf: "flex-start", color: 'black', fontSize: '1.2rem' }}>Welcome back</h1>
        <p style={{ alignSelf: "flex-start", color: 'gray', fontSize: '0.8rem', marginTop:"9px" }}>Log into your account</p>
        <EmailField type='text' placeholder='Enter your email' name='email' onChange={(e)=>{
          handleInputChange(e)
        }}/>
        <PasswordField type='password' placeholder='Enter your password' name='password'  onChange={(e)=>{
          handleInputChange(e)
        }}/>
        <SaveButton  authAction={{signin:true}} />
        <p style={{ alignSelf: "flex-start", color: 'gray', fontSize: '0.8rem', marginTop:"9px" }}>Not registered? <span style={{color:'red'}}>Create an account</span></p>
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