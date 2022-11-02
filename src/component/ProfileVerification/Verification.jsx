import React, { useEffect } from "react";
import "./css/profileVerification.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Verification = ({ signupDetails, setsignupDetails, isLoggedIn, setIsLoggedIn,setModalShow }) => {

    const url = 'https://growpital.herokuapp.com/auth/signup'
    const navigate = useNavigate()

    const submitVerificationForm = (e) => {
        setModalShow(true)
        e.preventDefault()
        console.log(signupDetails);

        axios.post(url, {
            Name: signupDetails.Name,
            Email: signupDetails.Email,
            Password: signupDetails.Password,
            Phone: signupDetails.Phone,
            Balance: "10000",
            Aadhaar_Number: signupDetails.Aadhaar_Number,
            Account_No: signupDetails.Account_No,
            IFSC_Code: signupDetails.IFSC_Code

        })
            .then((response) => {
                console.log(response);
                alert(response.data.message)
                // setsignupDetails("")
                navigate("/login")
            })
            .catch((err) => {
                console.log(err.response.data.message);
                alert("some error occured")
            })

     


        // navigate("/dashboard")

    }

    useEffect(() => {
        if (!signupDetails.Email || !signupDetails.Password) {
            navigate("/signup")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [signupDetails.Email])

    const handleChange = e => {
        const { name, value } = e.target
        setsignupDetails({
            ...signupDetails,//spread operator 
            [name]: value
        })
    }




    return (

        <div className="verifi">

            <form className="dataComponent" onSubmit={submitVerificationForm}>
                <div className="data">
                    <label htmlFor="name">Name</label><br />
                    <input required name="Name" type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Full Name"
                        value={signupDetails.Name || ""}
                        onChange={handleChange}

                    />
                </div>
                <div className="data">
                    <label htmlFor="contact">Contact No.</label><br />
                    <input required pattern="[0-9]{10}" type="tel" className="form-control" name="Phone" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="+91"
                        value={signupDetails.Phone || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="data">
                    <label htmlFor="email">Email</label><br />
                    <input required type="email" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter your email" value={signupDetails.Email || ""} readOnly />
                </div>
                <div className="data">
                    <label htmlFor="account">Account No.</label><br />
                    <input required name="Account_No"
                        value={signupDetails.Account_No || ""} type="number" maxLength={12} minLength={8} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter your acc. no." onChange={handleChange} />
                </div>
                <div className="data">
                    <label htmlFor="adhaar">Adhaar No.</label><br />
                    <input required name="Aadhaar_Number" minLength="12" maxLength={12} value={signupDetails.Aadhaar_Number || ""} type="number" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter your adhaar no." onChange={handleChange} />
                </div>
                <div className="data">
                    <label htmlFor="ifsc">IFSC Code</label><br />
                    <input required type="text" pattern="^[A-Za-z]{4}[a-zA-Z0-9]{7}$" maxLength={11}minLength={11} name="IFSC_Code" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter IFSC code" value={signupDetails.IFSC_Code||""} onChange={handleChange}  />
                </div>
                <button id="submit" type="submit" className="btn btn-light my-btn" style={{ color: "white" }} >Submit</button>
            </form>

        </div>
    )
}

export default Verification