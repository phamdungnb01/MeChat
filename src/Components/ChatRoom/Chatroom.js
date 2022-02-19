import './Chatroom.css'
import { useUserAuth } from "../Login/UserAuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getConfirmLocale } from 'antd/lib/modal/locale';
export default function Chatroom(){
    let {user} = useUserAuth()
    var userName
    const {logOut} = useUserAuth()
    const [error,setError] = useState()
    if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        userName = user.displayName;
        
      }
    const [loading,setLoading] = useState(true)
    let navigate = useNavigate()
    const handleLogOut = async() =>{
        try{
            navigate('/');
        } 
        catch(err){
            setError(err.message)
        }
    }
    const getFile = async(url) =>{
        const response = await fetch(url)
        const data = await response.blob()
        return new File([data],'userPhoto.jpg',{type:'image/jpeg'})
    }
    useEffect(
        ()=>{
            axios.get('https://api.chatengine.io/users/me',{
                headers:{
                    "project-id":"619270a1-3033-4ffb-9672-28db5320723e",
                    "user-name":userName,
                    "user-secret":user.uid,
                }
            }).then(
                ()=>{setLoading(false)}
            )
            .catch(()=>{
                let formdata = new FormData();
                formdata.append('email',user.email)
                formdata.append('username',userName)
                formdata.append('secret',user.uid)
                getFile(user.photoURL)
                    .then((avatar)=>{
                    formdata.append('avatar',avatar,avatar.name)
                    axios.post('https://api.chatengine.io/users',
                    formdata,
                    {headers:{"private-key":"a8d815f6-96f2-45e1-9f2b-00855a9053b6",
                }}
                    )
                    .then(()=>setLoading(false))
                    .catch((error)=>(console.log(error)))
                })
            })
        },[]
    )
        
    if(!user){
        return <Navigate to='/'/>
    } else{
        return <div>
            <div className="room-header">
                <h2><i className="fa-solid fa-comments"></i> MeChat</h2>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
            <ChatEngine
            height='90vh'
            projectID='619270a1-3033-4ffb-9672-28db5320723e'
            userName={userName}
            userSecret={user.uid}
        />
        </div>
    }
}