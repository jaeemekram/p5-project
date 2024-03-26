function Nav({ showAuth, setShowAuth, currentUser, setShowLog, setCurrentUser}){

    const handleClick = () => {
        setShowLog(true)
    }

function handleLogOut() {
    setCurrentUser({})
    fetch('/api/logout', { method: 'DELETE' })
      }

    return (
        <nav>
            <div className= "logo-container" > 
                <img className= "logo"  />
                <h2 className="nav-title">🚧THE UNDERGROUND🚧</h2>
            </div>

            {!currentUser.id ? <p></p> : <p>Welcome {currentUser.username} </p>}

            {currentUser.id ? <button className="nav-button" onClick={handleLogOut} disabled={showAuth} >Log out</button> : <button className="nav-button" onClick={handleClick} disabled={showAuth} >Log in</button>}
           
                
        </nav>
        )
}

export default Nav;