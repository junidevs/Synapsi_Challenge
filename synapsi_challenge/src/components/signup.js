import React,{useRef,useState} from 'react'
import {useAuth} from '../contexts/AuthContext';
import {useHistory} from 'react-router-dom'


export default function Signup() {

    const emailRef = useRef();
    const passRef = useRef();
    const passConfirmRef = useRef();
    const { signup } = useAuth()
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const history = useHistory();

    const handleFormSignUp = async (e)=>{
        e.preventDefault();
        
        //check matching passwords
        if(passRef.current.value !== passConfirmRef.current.value)
        {
           return setError('Password do not match');
        }
            try{
                setLoading(true);
                  setError('');
                  signup(emailRef.current.value,passRef.current.value);
                  history.push("/login");
                 }
             
            catch(err)
                {
                
                  setError("Failed to create account")
                }
                setLoading(false);
   
    }
    return (
        <>
        <div className="signup_Container">
          <h1>Signup</h1>
          <h2 style={{color:"white"}}>{error ? 'Failed to login' : null}</h2>
            <form onSubmit={handleFormSignUp}>
                <h3>Email</h3><input className="login_inputGroup"  type="text" required ref={emailRef} /> <br></br>
                <h3>Password</h3><input  className="login_inputGroup" type="text" required ref={passRef} /> <br></br>
                <h3>Confirm Password</h3> <input className="login_inputGroup" type="text" required ref={passConfirmRef} /> <br></br>
                <button className="btn btn-primary btn-custom" disabled={loading} type="submit">Sign up</button>
            </form>  
        </div>
        </>
    )
}
