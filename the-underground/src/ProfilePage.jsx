import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

function ProfilePage({currentUser}){

    const navigate = useNavigate()

    const [fn,setFn] = useState(currentUser.first_name)
    const [dobd,setDobd] = useState(currentUser.dob_day)
    const [doby,setDoby] = useState(currentUser.dob_year)
    const [dobm,setDobm] = useState(currentUser.dob_month)
    const [about, setAbout] = useState(currentUser.about)
    const [img, setImg] = useState(currentUser.img)

    const handleSubmit = () => {
        console.log(yay)
    }

    const handleClick = () => {
        navigate('/dashboard')
    }


    return (
      <>
        <nav className="profile-nav">
          <h2>{currentUser.first_name}'s Profile</h2>
          <button onClick={handleClick}>Back</button>
        </nav>

        <div className="profile-page">
          <form onSubmit={handleSubmit}>
            <section>
              <label htmlFor="first_name">First Name</label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                placeholder="First Name"
                required={true}
                value={fn}
                onChange={(e) => setFn(e.target.value)}
              />
           

              <div className="multiple-input-container">
              <label>Birthday</label>
                <input
                  id="dob_month"
                  type="number"
                  name="dob_month"
                  placeholder="MM"
                  required={true}
                  value={dobm}
                  onChange={(e) => setDobm(e.target.value)}
                />

                <input
                  id="dob_day"
                  type="number"
                  name="dob_day"
                  placeholder="DD"
                  required={true}
                  value={dobd}
                  onChange={(e) => setDobd(e.target.value)}
                />

                <input
                  id="dob_year"
                  type="number"
                  name="dob_year"
                  placeholder="YYYY"
                  required={true}
                  value={doby}
                  onChange={(e) => setDoby(e.target.value)}
                />
              </div>

              <label htmlFor="about">About me</label>
              <input
                id="about"
                type="text"
                name="about"
                required={true}
                placeholder="I like long walks..."
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />

              <input type="submit" />
            </section>

            <section>
              <label htmlFor="url">Profile Photo</label>
              <input
                type="url"
                name="url"
                id="url"
                onChange={(e) => setImg(e.target.value)}
                required={true}
              />
              <div className="photo-container">
                {currentUser.id && (
                  <img src={currentUser.img1} alt="profile pic preview" />
                )}
              </div>
            </section>
          </form>
        </div>
      </>
    );
}

export default ProfilePage;