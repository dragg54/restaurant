import { useState, createContext } from "react";
import { Contact } from "../types/Contact";

export const ContactContext = createContext<{userContact:Contact | null | undefined, setUserContact:  React.Dispatch<React.SetStateAction<Contact | null | undefined>>} | null>(null)


export const ContactContextProvider = ({children}: {children: React.ReactNode}) =>{
    const [userContact, setUserContact] = useState<null | Contact>()
    return(
        <ContactContext.Provider value = {{userContact, setUserContact}}>
            {children}
        </ContactContext.Provider>
    )
}