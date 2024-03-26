function MatchesDisplay({matches, currentUser}){
    
    const filteredMatches = matches.filter((match) => match.client_id == currentUser.id )

    
    console.log(filteredMatches)

    const handleClick = () => {
        console.log(matches[0].trainer)
    }

    const showInfo = () => {
      
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
              <img src={match.trainer.img1} alt={match.trainer.first_name + " profile"} onClick={showInfo} />
            </div>
            <h3>{match.trainer.first_name}</h3>
          </div>
        ))} 
      </div>
    );
}

export default MatchesDisplay;