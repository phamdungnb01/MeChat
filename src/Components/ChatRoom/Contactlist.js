import styled from "styled-components";
import { Avatar } from "antd";
import { AiOutlineUser } from "react-icons/ai";


export default function Contactlist(){

    return(
        <UserList>
            <div className="user-header">
                <Avatar size="large" icon={<AiOutlineUser />} style={{backgroundColor:'white',color:'rgb(24, 144, 255)'}}/>
                <h3>UserName</h3>
                <button>Đăng Xuất</button>
            </div> 
            <div className="user-list">
                <div className="user-item">
                    <Avatar icon={<AiOutlineUser />} style={{backgroundColor:'rgb(24, 144, 255)',color:'white'}}></Avatar>
                    <p>UserName</p>
                    <p className="user-status">Online</p>
                </div>
                <div className="user-item">
                    <Avatar icon={<AiOutlineUser />} style={{backgroundColor:'rgb(24, 144, 255)',color:'white'}}></Avatar>
                    <p>UserName</p>
                    <p className="user-status">Online</p>
                </div>
            </div>
        </UserList>
    )
}

const UserList = styled.div`
    width: 25vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-right:1px solid rgb(24, 144, 255);
    .user-header{
        width:100%;
        height: 10vh;
        background-color:rgb(24, 144, 255);
        padding: 0 1.5vw;
        align-items: center;
        display: flex;
        h3{
            margin: 0 0.5vw; 
            color: white;
        }
        button{
            margin-left:7vw;
            padding:0.5vh 0.5vw;
            border-radius: 20px;
            color:rgb(24, 144, 255);
            background-color:white;
            cursor:pointer;
        }
    }
    .user-list{
        width:100%;
        height: 90vh;
        display: flex;
        overflow-y:auto;
        flex-direction: column;
        .user-item{
            width:100%;
            display: flex;
            padding: 2.2vh 1.5vw;
            align-items: center;
            p{
                margin: 0 0.5vw; 
                color: rgb(24, 144, 255);
            }
            .user-status{
                margin-left:10vw;
            }
            :hover{
                transition:0.25s all ease-in-out;
                cursor: pointer;
                background-color:whitesmoke;
            }
        }
    }
`