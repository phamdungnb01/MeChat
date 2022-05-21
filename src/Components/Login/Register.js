// import api from "../api/api";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import Loading from '../../Loading';

export default function Register(){
    const navigate = useNavigate()
    const id = uuidv4()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [matchPassword,setMatchPassword] = useState('') 
    const [loading,setLoading] = useState(false)
    const ValidateEmail = (mail) =>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
         {
           return (true)
         }
           return (false)
    } 
    const handleSubmit = async(e)=>{
            // if(!ValidateEmail(email)){
            //     alert('Email không hợp lệ')
            //     return
            // }
            // else if(password.length < 6){
            //     alert('Mật khẩu tối thiểu 6 ký tự')
            //     return
            // }
            // else if(matchPassword != password){
            //     alert('Mật khẩu xác nhận không trùng khớp')
            //     return
            // }else{
            //     try {
            //         setLoading(true)
            //         await api.post("register",{id:id, name:name, email:email, password:password})
            //         await api.post("create-cart",{id:id})
            //         setLoading(false)
            //         navigate('/')
            //     }
            //     catch(err) {
            //         setLoading(false)
            //         alert(err.response.data.message)
                    
            //     }
                
            // }
    }

    if(loading){
        return(<Loading></Loading>)
    }
    return(
        <RegisterField>
            <h1 to='/' style={{color:'white',textDecoration:'none',fontFamily:'Kaushan Script, cursive',fontSize:'5vmax'}}>MeChat</h1>
            <h1>Đăng Ký</h1>
            <RegisterForm>
                <input 
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                ></input>
                <input 
                    placeholder="Mật khẩu"
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                ></input>
                <input 
                    placeholder="Xác nhận mật khẩu"
                    type='password'
                    onChange={(e) => setMatchPassword(e.target.value)}
                    value={matchPassword}
                >          
                </input>
            </RegisterForm>
            <p onClick={()=>{navigate('/')}}>Đã có tài khoản? Đăng nhập.</p>
            <button className="login-btn" onClick={handleSubmit}>Đăng Ký</button>
        </RegisterField>
    )}
const RegisterField = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color:rgb(24, 144, 255);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        color:white;
        @media (max-width:767px){
            font-size:5vmin;
        } 
    }
    .login-btn{
        width: 20%;
        height: 10vh;
        color:rgb(24, 144, 255);
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
const RegisterForm = styled.div`
    width:25%;
    min-height: 21vh;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    margin-bottom:5vh;
    input{
        width:100%;
        height: 25%;
        border-bottom:1px solid white;
        outline: none ;
        padding:0 5%;
        background-color:transparent;
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