
function InfoModal({setShowInfo}){

    const handleClick = () => {
        setShowInfo(false)
    }

    return(
       <div className="info-modal" > 
       <div className="train-close-icon"  onClick={handleClick} >🅧</div>
       <p>INFO</p>
       
       </div>
    )
}
export default InfoModal;