import styled from "styled-components";
import { Avatar } from "antd";
import { AiOutlineUser } from "react-icons/ai";


export default function ChatRoom(){
    return(
        <ChatField>
            <div className="header">
                <Avatar size="large" icon={<AiOutlineUser />} style={{backgroundColor:'rgb(24, 144, 255)',color:'white'}}/>
                <h3>UserName</h3>
            </div>
        </ChatField>
    )
}

const ChatField = styled.div`
    width:75vw;
    height:100vh;
    display: flex;
    flex-direction:column;
    .header{
        width: 100%;
        height:10vh;
        display: flex;
        align-items:center;
        padding:0 1.5vw;
        border-bottom: 1px solid #ccc;
        h3{
            color:rgb(24, 144, 255);
            margin:0 1vw;
        }
    }
`