import React from 'react'
import { EmailField, FirstNameField, LastNameField, PasswordField, SignupForm, SignupFormContainer } from './SignupForm'
import AuthButton from '../../button/authButton'
import { DividerLine, DividerLineContainer, IconContainer, IconWrapper } from '../signinForm/SigninForm'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'

const index = () => {
    return (
        <SignupFormContainer>
            <SignupForm>
                <h1 style={{ alignSelf: "flex-start", color: 'black', fontSize: '1.2rem' }}>Get Started</h1>
                <p style={{ alignSelf: "flex-start", color: 'gray', fontSize: '0.8rem', marginTop: "9px" }}>Already have an account? <span style={{color:'red'}}>Sign in</span></p>
                <FirstNameField type='text' placeholder='Enter first name' />
                <LastNameField type='text' placeholder='Enter last name' />
                <EmailField type='email' placeholder='Enter email' />
                <PasswordField type='password' placeholder='Enter password' />
                <AuthButton authAction={{ register: true }} />
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
            </SignupForm>
        </SignupFormContainer>
    )
}

export default index