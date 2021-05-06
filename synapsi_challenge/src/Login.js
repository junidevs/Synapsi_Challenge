import React,{useRef,useState} from 'react'
import {useAuth} from './contexts/AuthContext';
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
          <h1 className="h1_Login">Log in</h1>
         <h2 style={{color:"white"}}>{error ? 'Failed to login !!!' : null}</h2>
         <div className="form_Login">
            <form onSubmit={handleFormSignUp}>
               <h3>Email</h3><input    className="login_inputGroup"  placeholder="Email..." type="text" required ref={emailRef} />
               <h3>Password</h3><input className="login_inputGroup" placeholder="Password..."type="password" required ref={passRef} />
               <br></br>
                <button className="btn btn-primary btn-custom"disabled={loading} type="submit">Log in</button>
            </form>  
            </div>
           
            <Link className="signup_Link" to="/signup">Dont have an account yet ?</Link>
            </div>
        </>
    )
}
