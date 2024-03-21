import { useState } from 'react'
import Home from './Home'
import Dashboard from './Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import AuthPage from './AuthPage'
import LogPage from './LogPage'
import { useEffect } from 'react'
import MatchesDisplay from './MatchesDisplay'


function App() {

  const [currentUser, setCurrentUser] = useState({})
  const [trainers, setTrainers]= useState([])
  const [matches, setMatches]= useState([])
  
  useEffect(() => {
    fetch('/api/check_session')
    .then(res => {
      if (res.ok) {
        res.json()
        .then( data => setCurrentUser(data) )
        }
      })
  }, [])

  useEffect(() => {
    fetch('/api/trainers')
    .then(res => res.json())
    .then(data => setTrainers(data))
  }, []);

  useEffect(() => {
    fetch('/api/matches')
    .then(res => res.json())
    .then(data => setMatches(data))
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/dashboard" element={<Dashboard currentUser={currentUser} setCurrentUser={setCurrentUser} trainers={trainers} matches={matches} setMatches={setMatches} />} />
        <Route path="/authpage" element={<AuthPage setCurrentUser={setCurrentUser} />} />
        <Route path="/logpage" element={<LogPage />} />
        <Route path="/matches-display" element={<MatchesDisplay />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
