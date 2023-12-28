import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './component/ChatFeed';

import './App.css';
import LoginForm from './component/LoginForm';

const App = ()=>{
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height = '100vh'
            projectID="e1332d24-c460-4cb3-82a3-038b85e40553"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}

        />
    )
}

export default App;