import React,{useState} from "react";
import "./css/profileVerification.css"
import Verification from "./Verification";

const ProfileVerification = ({ signupDetails, setsignupDetails, isLoggedIn, setIsLoggedIn }) => {
     

    return (
        <div className="bigContainer">
            <div className="verificationComponent">
                <p className="greeting">
                    User,<br />
                    Please complete your profile for a smooth investing experience.
                </p>
                <Verification
                 signupDetails={signupDetails} 
                 setsignupDetails={setsignupDetails} 
                 isLoggedIn={isLoggedIn}
                 setIsLoggedIn={setIsLoggedIn}
                 />
            </div>
        </div>
    )
}

export default ProfileVerification
