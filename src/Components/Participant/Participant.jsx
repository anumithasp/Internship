import React, { useState } from 'react';
import './Participant.css';
import Rating from '@mui/material/Rating';
import Textarea from '@mui/joy/Textarea';
import axios from 'axios';

const Participant = () => {
    const [question1, setQuestion1] = useState(null);
    const [question2, setQuestion2] = useState(null);
    const [question3, setQuestion3] = useState(null);
    const [question4, setQuestion4] = useState(null);
    const [comments, setComments] = useState('');
    const [suggestions, setSuggestions] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async () => {
        const feedback = {
            question1Rating: question1,
            question2Rating: question2,
            question3Rating: question3,
            question4Rating: question4,
            comments: comments,
            suggestions: suggestions
        };

        try {
            
            setSuccessMessage('Feedback submitted successfully!');
            clearForm();
        } catch (error) {
            console.error('There was an error submitting the feedback!', error);
        }
    };

    const clearForm = () => {
        setQuestion1(null);
        setQuestion2(null);
        setQuestion3(null);
        setQuestion4(null);
        setComments('');
        setSuggestions('');
    };

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

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-start mt-4" id="feedback">
                        Share your feedback with us..<br/><br/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 text-center mt-1"></div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center text-center">
                        <form id="form" className=''>
                            <div className="text-center mt-3">
                                <h3>Feedback form</h3>
                            </div>
                            <div className="text-center mt-3">
                                <img src="feedimg.png" alt="feedback" height="100px" width="200px" />
                            </div>

                            <div className="mt-3 ms-3 mx-3 text-light" id="qstn1">1. The training course was relevant and helpful for me to relate.</div><br />
                            <div>
                                <Rating

                                    required
                                    name="question1"
                                    value={question1}
                                    onChange={(event, newValue) => {
                                        setQuestion1(newValue);
                                    }}
                                />
                            </div>

                            <div className="mt-3 ms-3 text-light" id="qstn2">2. Delivery of the content was clear and understandable.</div><br />
                            <div>
                                <Rating
                                    name="question2"
                                    required
                                    value={question2}
                                    onChange={(event, newValue) => {
                                        setQuestion2(newValue);
                                    }}
                                />
                            </div>

                            <div className="mt-3 ms-3 text-light" id="qstn3">3. I am confident in applying the learnings into practice.</div><br />
                            <div>
                                <Rating
                                    name="question3"
                                    required
                                    value={question3}
                                    onChange={(event, newValue) => {
                                        setQuestion3(newValue);
                                    }}
                                />
                            </div>

                            <div className="mt-3 ms-3 text-light" id="qstn4">4. Delivery of the content was clear and understandable.</div><br />
                            <div>
                                <Rating
                                    name="question4"
                                    required
                                    value={question4}
                                    onChange={(event, newValue) => {
                                        setQuestion4(newValue);
                                    }}
                                />
                            </div>

                            <div className="mt-3 ms-3 text-light" id="qstn5">5. What did you enjoy the most about the training session?</div><br />
                            <div className='m-3'>
                                <Textarea
                                    name="comments"
                                    required
                                    placeholder="Type in here…"
                                    variant="outlined"
                                    color="warning"
                                    value={comments}
                                    onChange={(e) => setComments(e.target.value)}
                                />
                            </div><br />

                            <div className="mt-3 ms-3 text-light" id="qstn6">6. Any additional comments/suggestions</div><br />
                            <div className='m-3'>
                                <Textarea
                                    name="suggestions"
                                    required
                                    placeholder="Type in here…"
                                    variant="outlined"
                                    color="warning"
                                    value={suggestions}
                                    onChange={(e) => setSuggestions(e.target.value)}
                                />
                            </div><br />

                            <button className='m-2 p-3 ' id ="feedbacksubmit" type="button" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                        {successMessage && <div className="alert alert-success">{successMessage}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Participant;
