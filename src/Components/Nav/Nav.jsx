import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="images.jpg"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a id="a1" className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a id="a2" className="nav-link" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a id="a3" className="nav-link" aria-current="page" href="#">Contact</a>
                            </li>
                        </ul>
                        <a href="/login"><button id="loginbutton" className="d-flex mx-3" >Sign In</button></a>
                        <a href="/signup"><button id="signupbutton" className="d-flex" >Sign Up</button></a>
                        



                    </div>
                </div>
            </nav>
            <div className="container m-5 p-5">
                <div className="row ms-4">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <h1 id="home_heading">Build your Career with ICTAK</h1>
                        <br /><br/>
                        <h5 id="home_description">ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of
                            June, 2014. The organization had a humble beginning providing skill training programs to
                            selected academic institutions. Over the years, ICTAK has grown to a prime service provider of all ICT and innovation-related training and capacity-building programs in the state.</h5>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ps-5">
                        <img width="500px" src="GRA_Home-Header-Overlay.png"></img>

                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4">

                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4">
                            
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4">
                            
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Nav