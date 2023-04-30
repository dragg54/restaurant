import styled from 'styled-components'

export const SigninFormWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
export const DividerLineContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const DividerLine = styled.div`
    height: 0.1rem;
    width: 46%;
    background-color: gray;
    opacity: 0.4;
`

export const IconWrapper = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
`

export const IconContainer = styled.div`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0.5px 0.5px 0.5px gray;
    margin: 5px;
    border: 1px solid gray;
`