import React, { useState } from 'react';
import { Button, InputLabel, MenuItem, TextField } from '@mui/material';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        axios.post('http://localhost:8080/login', {
            email: email,
            password: password,
            role: role
        })
        .then(response => {
            if (response.data.status === 'success') {
                alert('Login successful: ' + response.data.role);
                if (response.data.role === 'participant') {
                    navigate('/participant');
                } else if (response.data.role === 'trainer') {
                    navigate('/trainer');
                } else if (response.data.role === 'coordinator') {
                    navigate('/coordinator');
                }
            } else {
                alert('Login failed: ' + response.data.message);
            }
        })
        .catch(error => {
            console.error('Login failed:', error);
            alert('Login failed: Please try again later');
        });
    };

    return (
        <div id="rootpage">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5" id="loginform">
                        <br/>
                        <h3>Login</h3>
                        <br/><br/>
                        <TextField
                            required
                            id="email"
                            label="Email"
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
                            <Button id="loginbtn" variant="contained" onClick={handleLogin}>Log In</Button>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
