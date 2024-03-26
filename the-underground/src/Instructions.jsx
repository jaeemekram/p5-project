function Instructions({setShowInstructions}){

    const handleClick = (e) => {
        
        setShowInstructions(false)
    }
    return(
        <div className="instructions-page">
            <div className="train-close-icon"  onClick={handleClick} >🅧 Back to swiping</div>
            <p>--------------------------------</p>
            <p>- To Match with a trainer, click the card and while holding it swipe, right</p>
            <p>- Swipe any other way to move on to the next trainer</p>
        </div>

    )
}

export default Instructions;