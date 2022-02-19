import './login.css'
import { useState,useRef } from "react";
import { useUserAuth } from "../Login/UserAuthContext";
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './Config';
export default function Login(){
    const [email,setEmail]=useState('')
    const [password,setPassword]= useState('')
    const [error,setError] = useState('')
    const {logIn} = useUserAuth()
    const {googleSignIn} = useUserAuth()
    const navigate=useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault()
        setError('')
        try{
            await googleSignIn();
            navigate('/chatroom');
        } 
        catch(err){
            setError(err.message)
        }
    };
    return(
        <div className='login-field'>
            <h1><i className="fa-solid fa-comments"></i> MeChat</h1>
            {error && <h4 className='alert'>{error}</h4>}
            <div className='login-btn'>
                <button onClick={handleSubmit}><i className="fa-brands fa-google"></i> Sign in with Google</button>
            </div>
        
        </div>
    )
}