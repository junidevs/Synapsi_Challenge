import React,{useState} from 'react'
import {useAuth} from './contexts/AuthContext';
import {useHistory} from 'react-router-dom';

import Login from './components/Login'
import useLocalStorage from './hooks/useLocalStorage';
import DashboardChat from './components/Dashboard'
import { ContactsProvider } from './contexts/ContactsProvider'
import { ConversationsProvider } from './contexts/ConversationsProvider';
import { SocketProvider } from './contexts/SocketProvider';

export default function Dashboard({welcome}) {

    const {currentUser ,logout} = useAuth();
    const [error,setError] = useState('');
    const history = useHistory();
    //signout function with logout function from AuthContext
    const [id, setId] = useLocalStorage('id')


    const signout = async ()=>{
        try{
          await logout();
          history.push("/login")
        }
        catch(err){
            setError(err)
        }
     
    }


  const dashboard = (
      <SocketProvider id={id}>
        <ContactsProvider>
          <ConversationsProvider id={id}>
            <DashboardChat id={id} />
          </ConversationsProvider>
        </ContactsProvider>
      </SocketProvider>
    )

    return (
        <>
        <div className="dashboard_Header">
            <strong>You are now logged in as :</strong> {currentUser.email}
            <button className="btn-customLogout" onClick={signout}>Log out</button>
        </div> 
       {id ? dashboard : <Login onIdSubmit={setId} />}
        </>
    )
}

