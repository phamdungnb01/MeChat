import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

export default function Login(){
    const navigate=useNavigate()
    const handleLogin = async(e) => {
        navigate('/updateuser')
    };
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    return(
        <LoginField>
            <h1 style={{color:'white',textDecoration:'none',fontFamily:'Kaushan Script, cursive',fontSize:'5vmax'}}>MeChat</h1>
            <h1>Đăng Nhập</h1>
            <LoginForm>
                <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}></input>
                <input placeholder="Mật khẩu" value={password} onChange={e=>setPassword(e.target.value)} type='password'></input>
            </LoginForm>
            <p onClick={()=>{navigate('/register')}}>Chưa có tài khoản? Đăng ký.</p>
            <button className="login-btn" onClick={handleLogin}>Đăng Nhập</button>
        </LoginField>
    )
}

const LoginField = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: rgb(24, 144, 255);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        color:white;
        @media (max-width:767px){
            font-size:5vmin;
            margin-bottom:3vh;
        } 
    }
    .login-btn{
        width: 20%;
        height: 10vh;
        color: rgb(24, 144, 255);
        background-color: white;
        border-radius: 20px;
        font-size: 1.2vmax;
        :hover{
            cursor: pointer;
        }
        @media (max-width:1023px) and (min-width:768px){
            width:20%;
            font-size:1.5vmax;
        }
        @media (max-width:767px){
            width:40%;
            font-size:3.5vmin;
        }  
    }
    p{
        color: white;
        margin-bottom:3vh;
        :hover{
            cursor:pointer;
        }
    }
`
const LoginForm = styled.div`
    width:20%;
    height: 15vh;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    margin-bottom:5vh;
    input{
        width:100%;
        height: 40%;
        border-bottom:1px solid white;
        outline: none ;
        padding:0 5%;
        background-color: transparent;
        color:white;
        ::placeholder{
            color: white;
        }
    }
    @media (max-width:1023px) and (min-width:768px){
            width:35%;
    }
    @media (max-width:767px){
            width:70%;
    }    
`
