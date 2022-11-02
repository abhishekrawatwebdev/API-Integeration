import React, { useState } from 'react';
import './css/Register.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ProgressBar } from 'react-loader-spinner'

var validator = require("email-validator")
// import userCredentials from '../../userCredentials/userCredentials';


function Signup({ signupDetails, setsignupDetails, setIsLoggedIn, IsLoggedIn }) {

    const [isloading, setIsLoading] = useState(false)

    const url = 'https://growpital.herokuapp.com/auth/email'
    const navigate = useNavigate()

    const handleChange = e => {
        const { name, value } = e.target

        setsignupDetails({
            ...signupDetails,//spread operator 
            [name]: value
        })
    }


    const submitSignupForm = (e) => {

        e.preventDefault();
        setIsLoading(true)
        if (validator.validate(signupDetails.Email)) {
            axios.post(url, {
                Email: signupDetails.Email,
            })
                .then((response) => {
                    console.log(response);
                    setIsLoggedIn(true)
                    setIsLoading(false)
                    navigate("/profileVerification")
                })
                .catch((err) => {

                    console.log(err);
                    alert("some error occured")
                    setIsLoading(false)
                })

        } else {
            alert("valid email required")
        }


    }
    return (
        <>
            {
                isloading ? (<div className="loader">
                    <ProgressBar
                        height="80"
                        width="80"
                        ariaLabel="progress-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass="progress-bar-wrapper"
                        borderColor='#FFA217'
                        barColor='#CCA15F'
                    />
                </div>) : (<div className='signup register'>
                    <p className='greet'>Hey!</p>
                    <div className="signup-component register-component">
                        <h1>Signup</h1>
                        <form className='signup-form' onSubmit={(e) => { submitSignupForm(e) }}>
                            <div className="signup-input register-input">
                                <label htmlFor="Email">Email</label><br />
                                <input placeholder='Your Email here' name='Email' type="email" required value={signupDetails.Email || ""}
                                    onChange={handleChange} />
                            </div>
                            <div className="signup-input register-input">
                                <label htmlFor="Password">Password</label><br />
                                <input pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' name='Password' placeholder='Password(8-16 characters) ' minLength="8" maxLength="16" type="password" required value={signupDetails.Password || ""}
                                    onChange={handleChange} />
                            </div>
                            <input className='btn signupBtn' id='btn-signup' value="submit" type='submit' />
                        </form>
                    </div>
                    <p className='logOrSign' onClick={() => {
                        navigate("/login")
                    }}>
                        Already registered? Login
                    </p>

                </div >)
            }


        </>

    )
}

export default Signup
