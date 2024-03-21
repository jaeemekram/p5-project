import TinderCard from 'react-tinder-card'
import { useState } from 'react'
import ChatContainer from './ChatContainer'

function Dashboard({currentUser, trainers, matches, setMatches, setCurrentUser}){

  const [lastDirection, setLastDirection] = useState()
  const [trainerId, setTrainerId] = useState('')

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

  console.log(trainers)

  function shuffle(trainers) {
    let currentIndex = trainers.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [trainers[currentIndex], trainers[randomIndex]] = [
        trainers[randomIndex], trainers[currentIndex]];
    }
  
    return trainers;
  }

  const shuffledTrainers = shuffle(trainers)

  console.log(shuffledTrainers)

    return (
      <div className="dashboard">
        <ChatContainer matches={matches} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <div className="swipe-container">
          <div className="card-container">

            {shuffledTrainers.map((trainer) => (
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
                </div>
              </TinderCard>
            ))}

            <div className='swipe-info' >
              {lastDirection ? <p>You  swiped {lastDirection}</p> : <p></p>}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;


// const trainers = [
  //   {
  //     name: 'Richard Hendricks',
  //     url: 'https://pics.craiyon.com/2023-10-18/68713ca622b64f2d8c0f875543db05ce.webp'
  //   },
  //   {
  //     name: 'Erlich Bachman',
  //     url: 'https://pics.craiyon.com/2023-10-18/68713ca622b64f2d8c0f875543db05ce.webp'
  //   },
  //   {
  //     name: 'Monica Hall',
  //     url: 'https://pics.craiyon.com/2023-10-18/68713ca622b64f2d8c0f875543db05ce.webp'
  //   },
  //   {
  //     name: 'Jared Dunn',
  //     url: 'https://pics.craiyon.com/2023-10-18/68713ca622b64f2d8c0f875543db05ce.webp'
  //   },
  //   {
  //     name: 'Dinesh Chugtai',
  //     url: 'https://pics.craiyon.com/2023-10-18/68713ca622b64f2d8c0f875543db05ce.webp'
  //   }
  // ]