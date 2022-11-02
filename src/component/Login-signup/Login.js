import React, { useState } from 'react'
import './css/Register.css';
// import userCredentials from '../../userCredentials/userCredentials';
import { useNavigate } from "react-router-dom";
import { ProgressBar } from 'react-loader-spinner'

import axios from 'axios';
var validator = require("email-validator");




function Login({ isLoggedIn, setIsLoggedIn }) {

    const url = 'https://growpital.herokuapp.com/auth/login';

    const navigate = useNavigate()

    const [IsRight, setIsRight] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [userMail, setuserMail] = useState("");
    const [password, setpassword] = useState("");

    // eslint-disable-next-line no-unused-vars

    const handleSubmit = (e) => {

        e.preventDefault();
        setIsLoading(true)
        // if email and password is present
        console.log("clicked");

        if (validator.validate(userMail)) {
            axios.post(url, {
                Email: userMail,
                Password: password
            })
                // if response is good
                .then((response) => {
                    setIsLoading(false)
                    console.log(response);
                    localStorage.setItem("token", response.data.token)
                    setIsLoggedIn(localStorage.getItem("token"))
                    navigate("/dashboard")
                })
                // if some error occured
                .catch((err) => {
                    setIsLoading(false)
                    console.log(err);
                    // setIsLoggedIn(false)
                    alert(err.response.data.error)
                })

        } else {
            setIsLoading(false)
            alert("Invalid email")
        }
    };

    if (isLoading) {
        return (<div className="loader">
            <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor='#FFA217'
                barColor='#CCA15F'
            />
        </div>)
    }
    return (
        <>
            {/* <nav>
                <NavRegister />
            </nav> */}
            <div className='login register'>
                <p className="greet">Welcome Back!</p>
                <div className="login-component register-component">
                    <h1>Login</h1>
                    <form onSubmit={(e) => { handleSubmit(e) }} >
                        <div className="login-input register-input">
                            <label htmlFor="email">Email</label><br />
                            <input placeholder='Email here' type="email" id='login-email' required value={userMail}
                                onChange={(e) => setuserMail(e.target.value)} />
                        </div>
                        <div className="login-input register-input">
                            <label htmlFor="password">Password</label><br />
                            <input placeholder='Enter your password' type="password" minLength="8" maxLength="16" value={password} id='login-password' required onChange={(e) => setpassword(e.target.value)} />
                            <span id='incorrect-creds' style={{ display: IsRight ? 'none' : 'block' }}>Email id or password is incorrect</span>
                        </div>
                        <input className='btn login-Btn' id='btn-login' value="Login" type="submit" />
                    </form>
                </div>
                <p className='logOrSign' onClick={() => {
                    navigate("/signup")
                }}>Want to register? Signup</p>
            </div>
        </>

    )

}

export default Login;