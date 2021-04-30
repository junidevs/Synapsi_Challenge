import React,{useContext,useState,useEffect} from 'react'
import {auth} from '../firebaseConfig';
import PropTypes from 'prop-types';

const AuthContext = React.createContext();
export function useAuth()
{
    return useContext(AuthContext);
}



export function AuthProvider({children}) {
    const [currentUser,setCurrentUser] = useState();
    const [loading,setLoading] = useState(true);
    //we want to call useEffect only once in render component so I put blank array
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=> setCurrentUser(user))
        setLoading(false);
        //this is something like a  componentWillUnmount , we must to prevent 
        return unsubscribe
    },[]);
    
    const logout = ()=>{
        return auth.signOut();
    }
    const signup = (login,password)=>{
        return auth.createUserWithEmailAndPassword(login,password);
    }
    const signin = (login,password)=>{
        return auth.signInWithEmailAndPassword(login,password);
    }
    const initialValue ={
        currentUser,
        signup,
        signin,
        logout
        
    }
    return (
        <AuthContext.Provider value={initialValue}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.element.isRequired
  };