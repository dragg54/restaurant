import React, { Dispatch, SetStateAction, useState } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext<
{
  token: string | null,
  setToken?: Dispatch<SetStateAction<string>>,
  isLoading: boolean,
  setIsLoading?:  Dispatch<SetStateAction<boolean>>,
  isLoggedIn: boolean,
  setIsLoggedIn?: Dispatch<SetStateAction<boolean>>
}
>({
  token:"",
  isLoading: true,
  isLoggedIn: false
})
type AuthProps = {
  children: React.ReactNode
}
const AuthContextProvider = ({children}:AuthProps) => {
  //retrieve token from local storage

  const storedToken = JSON.parse(localStorage.getItem("auth")!)
  //There is a better way of doing this
  //You can store all variables in one object called auth
  const [token, setToken] = useState(storedToken)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <AuthContext.Provider value={{token, setToken, isLoading, setIsLoading, isLoggedIn, setIsLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider