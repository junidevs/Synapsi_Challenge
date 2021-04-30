import React,{useContext,useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

const ContactsContext = React.createContext();

export const useContacts =() =>{
   return useContext(ContactsContext);
}
export function ContactsProvider({children}) {
    //by default we don't have a list of contacts so we have the blank array
    const [contacts,setContacts] = useLocalStorage('contacts',[]);
    const createContact = (id,name)=>{
        setContacts(prevContacts => {
            //update our state with new id and names of contacts wich will come from "NewContactModal" component
            return [...prevContacts , {id,name}];
        })
    }

    return (
        <ContactsContext.Provider value={{contacts,createContact}}>
            {children}
        </ContactsContext.Provider>
    )
}
