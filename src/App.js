import './App.css';
import Home from './Pages/Home';
import ChatPage from './Pages/Chat/ChatPage/ChatPage';
import Messages from './Contexts/Messages';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [messages, setMessages] = useState([]);
  

  return (
    <div className="App">
      <Router>
        <Messages.Provider 
        value={{
          messages,
          setMessages
        }} 
        >
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/ChatPage' element={<ChatPage/>}/>
            {/* <Home/> */}
            {/* <ChatPage/> */}
          </Routes>
        </Messages.Provider>
      </Router>
    </div>
  );
}

export default App;
