import { Navigate, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function ChatHeader({ currentUser ,setCurrentUser, showInstructions, setShowInstructions }){

    const navigate = useNavigate()

    const handleClick = () => {
        setCurrentUser({})
        fetch('/api/logout', { method: 'DELETE' })
        navigate('/')
    }
    
    const handleInstructs = () => {
        setShowInstructions(true)
    }

    const handleProfile = () => {
        navigate('/profile-page')
    }

    return(
        <div className="chat-container-header" >
            <div className="profile" >
                <div className="img-container" >
                    <img src="" />
                </div>
                <h3>{currentUser.username}</h3>
            </div >
            <i className="log-out-icon" onClick={handleProfile} >👤 Profile </i>
            <i className="log-out-icon" onClick={handleInstructs} >📝 Instructions </i>
            <i className="log-out-icon" onClick={handleClick} >🚫 Logout</i>
        </div>
    )
}

export default ChatHeader;