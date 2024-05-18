import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">Ict Academy</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav" id="navbar">
                            <li className="nav-item">
                                <a className="nav-link active " aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active  " aria-current="page" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Pricing</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container  justify-content-center align-items-center mt-5" id="user">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-3 text-center">
                        <a href="/participant">I am a participant</a>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-3 text-center">
                        <a href="/participant">I am a trainer</a>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-3 text-center">
                        <a href="/participant">I am a cordinator</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home