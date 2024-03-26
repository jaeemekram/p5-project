import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";

function LogPage({showLog, setShowLog, setCurrentUser}){

    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        setShowLog(false)
    }

    async function handleLogin(e) {
        e.preventDefault()
        const userInfo = {username, password}
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(userInfo)
        })
        if (res.ok) {
          const data = await res.json()
          setCurrentUser(data)
         navigate("/dashboard")
     
        } else {
          alert('Invalid log in')
        }
    }

    const [error, setError]= useState(null)

    return(
        <div className="log-page" >
          <h1>Log In</h1>
        <div className="close-icon"  onClick={handleClick} >🅧</div>
        <form onSubmit={handleLogin} >
        <input 
            type="text"
            id="username"
            name="username"
            placeholder="username"
            required={true}
            onChange={(e) => setUsername(e.target.value)}
            />  
        <input 
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required={true}
            onChange={(e) => setPassword(e.target.value)}
            />  
            <input className="secondary-button" type="submit"/>
            <p>{error}</p>                        
        </form>
    </div>

    )
}

export default LogPage;