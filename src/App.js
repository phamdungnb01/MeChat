import logo from './logo.svg';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './Components/Login/login';
import Chatroom from './Components/ChatRoom/Chatroom';
import { UserAuthContextProvider } from './Components/Login/UserAuthContext';
function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/chatroom' element={<Chatroom/>}/>
      </Routes>
    </UserAuthContextProvider>
  )  
}

export default App;
