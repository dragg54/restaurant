import React, { Dispatch, SetStateAction, useState } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext<
{
  token: string,
  setToken?: Dispatch<SetStateAction<string>>,
  isLoading: boolean,
  setIsLoading?:  Dispatch<SetStateAction<boolean>>
}
>({
  token:"",
  isLoading: true
})
type AuthProps = {
  children: React.ReactNode
}
const AuthContextProvider = ({children}:AuthProps) => {
  const [token, setToken] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  return (
    <AuthContext.Provider value={{token, setToken, isLoading, setIsLoading}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider