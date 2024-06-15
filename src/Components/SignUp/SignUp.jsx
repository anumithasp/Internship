import React, { useState } from 'react';
import { Button, InputLabel, MenuItem, TextField } from '@mui/material';
import Select from '@mui/material/Select';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSignUp = () => {
        axios.post('http://localhost:8080/signup', {
            name: name,
            dob: dob,
            mobile: mobile,
            email: email,
            password: password,
            role: role
        })
        .then(response => {
            alert('Sign Up successful');
            // Optionally, redirect to another page or perform other actions upon successful signup
        })
        .catch(error => {
            alert('Sign Up failed');
        });
    };

    return (
        <div id="rootpage">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5" id="signupform">
                        <br/>
                        <h3>Sign Up</h3>
                        <br/><br/>
                        <TextField
                            required
                            id="name"
                            label="Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            fullWidth
                        />
                        <br/><br/>
                        <TextField
                            required
                            id="dob"
                            label="Date of Birth"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={dob}
                            onChange={e => setDob(e.target.value)}
                            fullWidth
                        />
                        <br/><br/>
                        <TextField
                            required
                            id="mobile"
                            label="Mobile Number"
                            value={mobile}
                            onChange={e => setMobile(e.target.value)}
                            fullWidth
                        />
                        <br/><br/>
                        <TextField
                            required
                            id="email"
                            label="Email ID"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            fullWidth
                        />
                        <br/><br/>
                        <TextField
                            required
                            id="password"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            fullWidth
                        />
                        <br/><br/>
                        <div>
                            <InputLabel id="role-select-label">Role</InputLabel>
                            <Select 
                                labelId="role-select-label"
                                id="role-select"
                                value={role}
                                onChange={e => setRole(e.target.value)}
                                fullWidth
                                label="Role"
                            >
                                <MenuItem value="participant">I am a participant</MenuItem>
                                <MenuItem value="trainer">I am a Trainer</MenuItem>
                                <MenuItem value="coordinator">I am a Coordinator</MenuItem>
                            </Select>
                        </div>
                        <br/>
                        <div className='text-center'>
                            <Button id="signupbtn" variant="contained" onClick={handleSignUp}>Sign Up</Button>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
