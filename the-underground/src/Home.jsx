import Nav from "./Nav"
import { useState } from "react"
import AuthPage from "./AuthPage"
import TrainAuthPage from "./TrainAuthPage"
import LogPage from "./LogPage"




function Home({ currentUser, setCurrentUser}){
    
    const [showAuth, setShowAuth] = useState(false)
    const [showTrainAuth, setShowTrainAuth]= useState(false)
    const [showLog, setShowLog]=useState(false)

    

    const handleClick = () => {
        setShowAuth(true)
    }

    const handleTrainClick = () => {
        // setShowTrainAuth(true)
        alert('🪚UNDER CONSTRUCTION🔨')
    }
    


    return (
        <div className="overlay">
            <Nav  showAuth={showAuth} currentUser={currentUser} setShowLog={setShowLog} setCurrentUser={setCurrentUser} ></Nav>
            <div className="home">
                <h1>The new home for Gym Rats 🐁</h1>
                <h3>It's time to swipe for gainz 💪🏽, not dates 💔</h3>
                <h2>⬇ - GET STARTED - ⬇</h2>
                
                <div> <button className="primary-button" onClick={handleClick}>Sign up as Client</button> <button className="primary-button" onClick={handleTrainClick}>Sign up as Trainer</button>  </div>
                
                {showAuth && <AuthPage setShowAuth={setShowAuth} setCurrentUser={setCurrentUser} />  }
                {showTrainAuth && <TrainAuthPage setShowTrainAuth={setShowTrainAuth} setCurrentUser={setCurrentUser}/>}
                {showLog && <LogPage showLog={showLog} setShowLog={setShowLog} setCurrentUser={setCurrentUser} />}
                


            </div>
        </div>
        )
}

export default Home;

// <button className="primary-button" onClick={handleClick}>
//                     {authToken ? 'Signout' : 'Sign up as a Client'}
//                 </button>

 