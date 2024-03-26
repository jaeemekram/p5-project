import { useState } from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";

function AuthPage({setShowAuth, setCurrentUser }){

    const navigate = useNavigate()

    const [firstName, setFirstName]= useState(null)
    const [lastName, setLastName]= useState(null)
    const [username, setUsername]= useState(null)
    const [email, setEmail]= useState(null)
    const [password, setPassword]= useState(null)
    const [dobMonth, setDobMonth]= useState(null)
    const [dobDay, setDobDay]= useState(null)
    const [dobYear, setDobYear]= useState(null)
    const [gender, setGender]= useState(null)
    const [weight, setWeight]= useState(null)
    const [about, setAbout]= useState(null)
    const [imageOne, setImageOne]= useState(null)
    const [city, setCity]= useState(null)


    const [error, setError]= useState(null)

    

    const handleClick = () => {
        setShowAuth(false)
    }

    async function handleRegister(e){
        e.preventDefault()
        const new_client = {firstName, lastName, username, email, password, dobMonth, dobDay, dobYear, gender, weight, about, imageOne, city}
        const res = await fetch('/api/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
                body: JSON.stringify(new_client)
            })
            if (res.ok) {
                const data = await res.json()
                setCurrentUser(data)
                navigate("/dashboard")
            } else {
                alert('Invalid sign up')
             }
                console.log("posted" + new_client)
            }
            
            
    
    function handleLogout() {
        setCurrentUser(null)
        fetch('/logout', { method: 'DELETE' })
    }

   

    const isSignUp =  true

    return (
        <div className="auth-page" >
            <div className="close-icon"  onClick={handleClick} >🅧</div>
            <h2>{isSignUp ? 'CREATE CLIENT ACCOUNT' : 'LOG IN'}</h2>
            <form onSubmit={handleRegister} >
            <input 
                type="text"
                id="first-name"
                name="first-name"
                placeholder="first-name"
                required={true}
                onChange={(e) => setFirstName(e.target.value)}
                />  
            <input 
                type="text"
                id="last-name"
                name="last-name"
                placeholder="last-name"
                required={true}
                onChange={(e) => setLastName(e.target.value)}
                />  
            <input 
                type="text"
                id="username"
                name="username"
                placeholder="username"
                required={true}
                onChange={(e) => setUsername(e.target.value)}
                />  
                <input 
                type="email"
                id="email"
                name="email"
                placeholder="email"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                />  
                 <input 
                type="password"
                id="password"
                name="password"
                placeholder="password"
                required={true}
                onChange={(e) => setPassword(e.target.value)}
                />    
                <input 
                type="number"
                id="dob_month"
                name="dob_month"
                placeholder="mm"
                required={true}
                onChange={(e) => setDobMonth(e.target.value)}
                />
                <input 
                type="number"
                id="dob_day"
                name="dob_day"
                placeholder="dd"
                required={true}
                onChange={(e) => setDobDay(e.target.value)}
                />
                <input 
                type="number"
                id="dob_year"
                name="dob_year"
                placeholder="yyyy"
                required={true}
                onChange={(e) => setDobYear(e.target.value)}
                />
                <input 
                type="text"
                id="city"
                name="city"
                placeholder="city"
                required={true}
                onChange={(e) => setCity(e.target.value)}
                />
                <input 
                type="text"
                id="gender"
                name="gender"
                placeholder="gender"
                required={true}
                onChange={(e) => setGender(e.target.value)}
                />
                 <input 
                type="number"
                id="weight"
                name="weight"
                placeholder="weight"
                required={true}
                onChange={(e) => setWeight(e.target.value)}
                />
                 <input 
                type="text"
                id="about"
                name="about"
                placeholder="about"
                required={true}
                onChange={(e) => setAbout(e.target.value)}
                />
                 <input 
                type="text"
                id="image"
                name="image-one"
                placeholder="image"
                required={true}
                onChange={(e) => setImageOne(e.target.value)}
                />
                <input className="secondary-button" type="submit"/>
                <p>{error}</p>                        
            </form>
        </div>
        )
    }

export default AuthPage;