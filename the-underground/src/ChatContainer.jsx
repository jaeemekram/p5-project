import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";
import ChatDisplay from "./ChatDisplay";

function ChatContainer({matches, currentUser, setCurrentUser }){
    return(
        <div className="chat-container" >
            <ChatHeader currentUser={currentUser} setCurrentUser={setCurrentUser}/>

            <div>
                <button className="option" >Matches</button>
                {/* <button className="option" >Chat</button> */}

                <MatchesDisplay matches={matches} currentUser={currentUser}  />

                <ChatDisplay/>
            </div>
        </div>
    )
}

export default ChatContainer;