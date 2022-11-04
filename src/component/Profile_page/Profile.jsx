/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './css/profile.css'
import close from "../../images/close.svg"
import { ProgressBar } from 'react-loader-spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Profile = ({ signupDetails, setsignupDetails, updateItem, setUpdateItem,fetchprofile }) => {

    useEffect(()=>{
        if(localStorage.getItem("token")){
            fetchprofile()
            setIsLoading(false)
        }

        
        
    },[])

    const url = "https://growpital.herokuapp.com/auth/profile"


    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    const [IsEditProfileOpen, setIsEditProfileOpen] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target

        setUpdateItem({
            ...updateItem,//spread operator 
            [name]: value
        })
    }

    const setValues = (e) => {
        e.preventDefault();
        // updateProfile(updateItem);
         setIsLoading(true)
        axios.patch(url,
            {
                Name:updateItem.Name,
                Email:updateItem.Email,
                Password:updateItem.Password,
                Phone:updateItem.Phone,
                Balance: "1000",
                Aadhaar_Number:updateItem.Aadhaar_Number,
                Account_No:updateItem.Account_No,
                IFSC_Code:updateItem.IFSC_Code,
            }
            , { headers: { token: localStorage.getItem("token") } })
            .then(response => {
                // If request is good...
                // console.log(response);
                setsignupDetails(response.data.message)
                setUpdateItem(response.data.message)
                setIsLoading(false)
                // navigate("/profile")
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false)

            });
    }


    const updateProfile=(updateItem)=> {
        setIsLoading(true)
        axios.patch(url,
            {
                Name:updateItem.Name,
                Email:updateItem.Email,
                Password:updateItem.Password,
                Phone:updateItem.Phone,
                Balance: "1000",
                Aadhaar_Number:updateItem.Aadhaar_Number,
                Account_No:updateItem.Account_No,
                IFSC_Code:updateItem.IFSC_Code,
            }
            , { headers: { token: localStorage.getItem("token") } })
            .then(response => {
                // If request is good...
                console.log(response);
                setsignupDetails(response.data.message)
                setUpdateItem(response.data.message)
                setIsLoading(false)
                // navigate("/profile")
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false)

            });
    }

    return (
        <div>
            {
                isLoading ? (<div className="loader">
                    <ProgressBar
                        height="80"
                        width="80"
                        ariaLabel="progress-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass="progress-bar-wrapper"
                        borderColor='#FFA217'
                        barColor='#CCA15F'
                    />
                </div>) :

                    (<div className='profile-sec'>
                        <div className="edit-profile-sec" style={IsEditProfileOpen ? { display: "flex" } : { display: "none" }} >
                            <div className="edit-profile-modal">
                                <img src={close} alt="" className='close-edit-profile' onClick={() => { setIsEditProfileOpen(false) }} />
                                <center>
                                    <h1>Edit Profile</h1>
                                </center>
                                <div className="edit-modal-container" >
                                    <form onSubmit={setValues}>
                                        <div className="edit-profile-sec-container">

                                            <div className="edit-profile-inputs">
                                                <div className="left-edit-inputs">
                                                    <div className="edit-input-grp">
                                                        <label htmlFor="edit-name">Name</label>
                                                        <input type="text" id='edit-name' name='Name' defaultValue={updateItem.Name || ""} onChange={handleChange} />
                                                    </div>
                                                    <div className="edit-input-grp">
                                                        <label htmlFor="edit-email">Email</label>
                                                        <input type="text" id='edit-email' readOnly name='Email' defaultValue={updateItem.Email || ""} onChange={handleChange} />
                                                    </div>
                                                    <div className="edit-input-grp">
                                                        <label htmlFor="edit-contact">Contact number</label>
                                                        <input  pattern="[0-9]{10}" maxLength={10} type="text" id='edit-contact' name='Phone' defaultValue={updateItem.Phone || ""} onChange={handleChange} />
                                                    </div>
                                                   

                                                </div>
                                               
                                                <div className="right-edits-inputs">
                                                    <div className="edit-input-grp">
                                                        <label htmlFor="edit-ifsc">IFSC</label>
                                                        <input type="text" id='edit-ifsc' readOnly name='IFSC_Code' defaultValue={updateItem.IFSC_Code || ""} onChange={handleChange} />
                                                    </div>
                                                    <div className="edit-input-grp">
                                                        <label htmlFor="edit-account">Account number</label>
                                                        <input type="text" id='edit-account' readOnly name='edit-account' defaultValue={updateItem.Account_No || ""} onChange={handleChange} />
                                                    </div>
                                                    <div className="edit-input-grp">
                                                        <label htmlFor="edit-adhaar">Adhaar number</label>
                                                        <input type="text" id='edit-adhaar' name='edit-adhaar' readOnly defaultValue={updateItem.Aadhaar_Number || ""} onChange={handleChange} />
                                                    </div>
                                                    
                                                </div>

                                            </div>
                                            <input type="submit" value="Submit" className='edit-profile-submit' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/*/////////////////////////////////// profile page /////////////////////////////////////////////*/}

                        <div className="profile-head">
                            <h1>Profile</h1>
                            <button className='edit-profile-btn' onClick={() => { setIsEditProfileOpen(true) }}>Edit Profile</button>
                        </div>
                        <div className="profile-sec-container">
                            <div className="profile-avatar-container">
                                <div className="profile-avatar" id='profile-avatar'></div>
                                <p className="avatar-name">{updateItem.Name || ""}</p>
                            </div>
                            <div className="user-data-container">
                                <div className="profile-data-grp">
                                    <div className="user-name user-detail-box">
                                        <p>Name</p>
                                        <p className="profile-data-value">{updateItem.Name || ""}</p>
                                    </div>
                                    <div className="user-email user-detail-box">
                                        <p>Email</p>
                                        <p className="profile-data-value">{updateItem.Email || ""}</p>
                                    </div>
                                    <div className="user-contact user-detail-box">
                                        <p>Contact</p>
                                        <p className="profile-data-value">{updateItem.Phone || ""}</p>
                                    </div>
                                    <div className="user-ifsc user-detail-box">
                                        <p>IFSC Code</p>
                                        <p className="profile-data-value">{updateItem.IFSC_Code || ""}</p>
                                    </div>
                                    <div className="user-account-num user-detail-box">
                                        <p>Account Number</p>
                                        <p className="profile-data-value">{updateItem.Account_No || ""}</p>
                                    </div>
                                    <div className="user-adhaar-num user-detail-box">
                                        <p>Adhaar Number</p>
                                        <p className="profile-data-value">{updateItem.Aadhaar_Number || ""}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default Profile