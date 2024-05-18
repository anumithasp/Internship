import React, { useState } from 'react'
import './Participant.css'
import TextField from '@mui/material/TextField';
import { Rating, colors } from '@mui/material';


const Participant = () => {

    const [value, setValue] = useState();

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-start mt-3 " id="feedback">

                        Share your feedback with us..
                    </div>
                    <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 text-center mt-1">

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex justify-content-center align-items-center text-center">
                        <form id="form" className=''>
                            <div className="text-center mt-3" >
                                <h3>Feedback form</h3>
                            </div>
                            <div className="text-center mt-3" >
                                <img src="feedimg.png" height="100px" width="200px" />
                            </div>

                            <div className=" mt-3 ms-3 mx-3 " id="qstn1">1. The training course was relevant and helpful for me to relate.</div><br />
                            <div className=" ">
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </div>
                          

                            <div className=" mt-3 ms-3  " id="qstn2">2. Delivery of the content was clear and understandable.</div><br />
                            <div className=" ">
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                                </div>

                            <div className=" mt-3 ms-3  " id="qstn3">3. I am confident in applying the learnings into practice..</div><br />
                            <div className=" ">
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                                </div>


                            <div className=" mt-3 ms-3  " id="qstn5">4. Delivery of the content was clear and understandable.</div><br />
                            <div className=" ">
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                                </div>


                            <div className=" mt-3 ms-3   " id="qstn6">5. What did you enjoy the most about the training session?</div><br />
                            <div>
                                <TextField
                                />

                            </div><br />
                        </form>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Participant