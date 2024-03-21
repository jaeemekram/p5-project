import { Navigate, useNavigate } from "react-router-dom"

function ChatHeader({ currentUser ,setCurrentUser}){

    const navigate = useNavigate()

    const handleClick = () => {
        setCurrentUser({})
        fetch('/api/logout', { method: 'DELETE' })
        navigate('/')
    }

    return(
        <div className="chat-container-header" >
            <div className="profile" >
                <div className="img-container" >
                    <img src="" />
                </div>
                <h3>{currentUser.username}</h3>
            </div>
            <i className="log-out-icon" onClick={handleClick} >⬅</i>
        </div>
    )
}

export default ChatHeader;