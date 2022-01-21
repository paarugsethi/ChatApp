import './App.css';
import {ChatEngine} from 'react-chat-engine';
import { ChatFeed } from './Components/ChatFeed';
import { LoginForm } from './Components/LoginForm';

function App() {

  { if (!localStorage.getItem("username")) return (
    <LoginForm/>
  )}

  return (
    <div className="App">
      <ChatEngine
        height = "100vh"
        projectID = "ca9c532c-238b-4805-918f-e13997dcd61f"
        userName = {localStorage.getItem("username")}
        userSecret = {localStorage.getItem("password")}
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      />

    </div>
  );
}

export default App;
