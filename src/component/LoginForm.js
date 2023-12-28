import React,{useState} from 'react';
import axios from 'axios';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const authObject = {'Project-Id': "e1332d24-c460-4cb3-82a3-038b85e40553", "User-Name": username, 'User-Secret': password}

        try {
            // username / password =. chatengine -. give messages
            await axios.get('https://api.chatengine.io/chats',{
                headers:authObject
            });
            
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();


        } catch (error) {
            setError('Oops, incorrect credentials.');
        }
        
        // works out ->logged in
        // error -. try with new username...
    }

  return (
    <div className='wrapper'>
        <div className='form'>
            <h1 className='title'>
                chat application
            </h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value= {username}
                    onChange={(e)=>setUsername(e.target.value)}
                    className="input"
                    placeholder="Username"
                    required
                />
                <input type="password"
                    value= {password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="input"
                    placeholder="password"
                    required
                />
                <div align= "center" >
                    <button type='submit' className='button'>
                        <span> Start Chatting</span>
                    </button>
                </div>
                <h2 className='error'>{error}</h2>
            </form>
        </div>
    </div>
  )
}

export default LoginForm ;