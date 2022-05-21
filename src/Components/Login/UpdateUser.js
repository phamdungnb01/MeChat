import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { FaCamera } from "react-icons/fa";

export default function UpdateUser(){
    const navigate = useNavigate()
    const handleGoToHome = () =>{
        navigate('/home')
    }
    return(
        <UpdateField>
            <h1 to='/' style={{color:'white',textDecoration:'none',fontFamily:'Kaushan Script, cursive',fontSize:'5vmax'}}>MeChat</h1>
            <UpdateInfo>
                <FaCamera style={{color:'white',fontSize:'2.5vw',cursor:'pointer'}}/>
                <p  style={{color:'white'}}>Chọn Avatar(có thể bỏ qua)</p>
                <input placeholder="Nhập tên của bạn"></input>
            </UpdateInfo>
            <button className="update-btn" onClick={handleGoToHome}>Vào trò chuyện thôi nào :D</button>
        </UpdateField>
    )
}
const UpdateField = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color:rgb(24, 144, 255);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .update-btn{
        width: 20%;
        height: 10vh;
        color: rgb(24, 144, 255);
        background-color: white;
        border-radius: 20px;
        font-size: 1.2vmax;
        margin-top:5vh;
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

`
const UpdateInfo = styled.div`
    width: 20%;
    height: 22vh;
    display: flex;
    background-color:rgb(24, 144, 255);
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
`


