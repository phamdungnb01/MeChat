import { Routes,Route} from 'react-router-dom'
import styled from "styled-components";
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import  UserAuthContextProvider  from './Components/Login/UserAuthContext';
import Contactlist from './Components/ChatRoom/Contactlist';
import ChatRoom from './Components/ChatRoom/ChatRoom';
import UpdateUser from './Components/Login/UpdateUser';

export default function App() {
  return(
      <HomeField>
        <Contactlist/>
        <ChatRoom/>
        {/* <Routes>
          <Route path='chatroom:idRoom' element={<ChatRoom/>}/>
        </Routes> */}
      </HomeField>
  )  
}

const HomeField = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

