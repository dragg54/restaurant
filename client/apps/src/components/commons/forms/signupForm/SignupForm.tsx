import styled from 'styled-components'

export const SignupFormContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; 
`

export const SignupForm = styled.div`
    width: 470px;
    height: 600px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px gray;
    background-color: white;
    flex-direction: column;
    justify-content: flex-start;
    padding: 30px 20px 20px 20px;
    align-items: center;
    border: 1px solid gray;
    box-shadow: 1px 1px 1px gray;
    margin: auto;
    color: gray;
`

export const SigninForm = styled.form`
    width: 470px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 30px 20px 20px 20px;
    align-items: center;
    border: 1px solid gray;
    border-radius: 5px;
    box-shadow: 1px 1px 1px gray;
    background-color: white;
    margin: auto;
    color: gray;
`

export const FirstNameField = styled.input`
     height: 45px;
    width: 100%;
    margin: 30px 0 25px 0;
    padding: 5px;
`
export const LastNameField = styled.input`
     height: 45px;
    width: 100%;
    padding: 5px;
`

export const EmailField = styled.input`
    height: 45px;
    width: 100%;
    margin: 30px 0 25px 0;
    padding: 5px;
`

export const PasswordField = styled.input`
    height: 45px;
    width: 100%;
    padding: 5px;
    margin-bottom: 50px;
    `