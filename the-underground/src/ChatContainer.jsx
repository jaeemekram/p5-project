import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";
import ChatDisplay from "./ChatDisplay";
import { useState } from "react";

function ChatContainer({matches, currentUser, setCurrentUser, showInstructions, setShowInstructions }){

    const[showChat, setShowChat] = useState(false)
    const[showMatch, setShowMatch] = useState(true)

    const handleChat = () => {
        setShowChat(true)
        setShowMatch(false)
    }
    
    const handleMatch = () => {
        setShowMatch(true)
        setShowChat(false)
    }
    


    return(
        <div className="chat-container" >
            <ChatHeader currentUser={currentUser} setCurrentUser={setCurrentUser} showInstructions={showInstructions} setShowInstructions={setShowInstructions}/>

            <div>
                <button className="option" onClick={handleMatch}>Matches</button>
                <button className="option" onClick={handleChat} >Chat</button>

                {showMatch ? <MatchesDisplay matches={matches} currentUser={currentUser}/> : null}

                {showChat ? <ChatDisplay/> : null}
            </div>
        </div>
    )
}

export default ChatContainer;