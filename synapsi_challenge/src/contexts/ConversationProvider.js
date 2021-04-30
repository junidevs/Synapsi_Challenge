import React,{useContext,useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

const ConversationContext = React.createContext();

export const useConversations =() =>{
   return useContext(ConversationContext);
}
export function ConversationProvider({children}) {
 
    const [conversation,setConversation] = useLocalStorage('conversations',[]);
    const createConversation = (receipents)=>{
        setConversation(prevConversation => {
    
            return [...prevConversation , {receipents,messages:[]}]
        })
    }

    return (
        <ConversationContext.Provider value={{conversation,createConversation}}>
            {children}
        </ConversationContext.Provider>
    )
}
