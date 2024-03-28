import TinderCard from 'react-tinder-card'
import { useState } from 'react'
import ChatContainer from './ChatContainer'
import Instructions from './Instructions'

function Dashboard({currentUser, trainers, matches, setMatches, setCurrentUser}){

  const [lastDirection, setLastDirection] = useState()
  const [trainerId, setTrainerId] = useState('')
  const[showInstructions, setShowInstructions] = useState(false)

  async function updateMatches(trainerId) {
    const new_match = {client_id: currentUser.id, trainerId}
    const res = await fetch('/api/matches', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(new_match)
        })
        if (res.ok) {
          const data = await res.json()
          setMatches([...matches, data])
        }
        console.log("posted" + new_match)
      }

  const swiped = (direction, swipedUserID) => {
    if(direction === 'right') {
      updateMatches(swipedUserID)
      setTrainerId(swipedUserID)
    }
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  function shuffle(trainers) {
    let currentIndex = trainers.length,  randomIndex;
    while (currentIndex > 0) {  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--; 
      [trainers[currentIndex], trainers[randomIndex]] = [
        trainers[randomIndex], trainers[currentIndex]];
    }
    return trainers;
  }
  
  const shuffledTrainers = shuffle(trainers)
  
  const goLeft = () => {
    console.log('left')
  }

  const goRight = () => {
    console.log('right')
  }


    return (
      <div className="dashboard">
        <ChatContainer matches={matches} currentUser={currentUser} setCurrentUser={setCurrentUser} showInstructions={showInstructions} setShowInstructions={setShowInstructions} />
        <div className="swipe-container">
          
          <div className="card-container">

            {showInstructions==true ? <Instructions setShowInstructions={setShowInstructions} /> : null}

            {/* <div className='click-left' onClick= {goLeft} >←</div> */}

            { showInstructions == false ? shuffledTrainers.map((trainer) => (
              <TinderCard
                className="swipe"
                key={trainer.username}
                onSwipe={(dir) => swiped(dir, trainer.id)}
                onCardLeftScreen={() => outOfFrame(trainer.name)}
              >
                <div
                  style={{ backgroundImage: "url(" + trainer.img1 + ")" }}
                  className="card"
                >
                  <h3>{trainer.first_name}</h3>
                  <h3>Username:  {trainer.username}</h3>
                  <h3>Specialty:  {trainer.trainer_specialties[0].specialty.specialty}</h3>
                </div>
              </TinderCard>
            )): null} 

            <div className='swipe-info' >
              {lastDirection ? <p>You  swiped {lastDirection}</p> : <p></p>}
            </div>
          </div>
          {/* <div className='click-right' onClick={goRight} >→</div> */}
        </div>
      </div>
    );
}

export default Dashboard;


