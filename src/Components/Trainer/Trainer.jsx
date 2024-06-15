import React from 'react'
import './Trainer.css'
import AddCourse from '../AddNewCourse/AddNewCourse'

const Trainer = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light " id="navbart">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="images.jpg"></img>
            <h6 className='d-flex text-light'>ICT Academy</h6>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              
            </ul>
            <a href="/login"><button className="d-flex " id="buttonmessage" >Sign Out</button></a>




          </div>
        </div>
      </nav>

      
      <div  id="trainer_image">
        <div id="welcome_message">
        < h1 className="mt-5  p-3" id="welcome_message">Welcome Youu..</h1>
        </div>
        
      </div><br/><br/>
      <AddCourse/>
    
    </div>
  )
}

export default Trainer