import { useState } from "react"
import InfoModal from "./InfoModal"

function MatchesDisplay({matches, currentUser}){

  const [showInfo, setShowInfo] = useState(false)
    
    const filteredMatches = matches.filter((match) => match.client_id == currentUser.id )

    
    console.log(filteredMatches)

    const handleClick = () => {
        console.log(matches[0].trainer)
    }

    const handleInfo = () => {
      setShowInfo(true)
    }
    
    return (
      <div className="matches-display">
        {filteredMatches.map((match, _index) => (
          <div
            key={_index}
            className="match-card"
            onClick={handleClick}
          >
            <div className="img-container">
              <img src={match.trainer.img1} alt={match.trainer.first_name + " profile"} onClick={handleInfo} />
            </div>
            <h3>{match.trainer.first_name}</h3>
          </div>
        ))} 
        {showInfo ? <InfoModal setShowInfo={setShowInfo} /> : null }
      </div>
    );
}

export default MatchesDisplay;