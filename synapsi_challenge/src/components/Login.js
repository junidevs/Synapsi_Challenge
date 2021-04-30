import React,{useRef,useState} from 'react'
import {useAuth} from '../contexts/AuthContext';
import {useHistory,Link} from 'react-router-dom'

export default function Login() {

    const emailRef = useRef();
    const passRef = useRef();
    const { signin } = useAuth()
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const history = useHistory();

    const handleFormSignUp = async (e)=>{
        e.preventDefault();
     
            try{

                  setError('');
                  setLoading(true);
             await signin(emailRef.current.value,passRef.current.value);
                  history.push("/")
                 }
             
            catch(err)
                {
                
                  setError("Failed to log in")
                }
                setLoading(false);
   
    }
    return (
        <>
        <div className="login_Container">
          <h1>Log in</h1>
         <h2 style={{color:"red"}}>error:{error}</h2>
            <form onSubmit={handleFormSignUp}>
                email<input type="text" required ref={emailRef} /> <br></br>
                pass<input type="text" required ref={passRef} /> <br></br>
        
                <button disabled={loading} type="submit">Log in</button>
            </form>  
            <Link to="/signup">Dont have an account yet ?</Link>
            </div>
        </>
    )
}
