import React, { useState,useEffect } from 'react'
import './css/profile.css'
import close from "../../images/close.svg"
import { ProgressBar } from  'react-loader-spinner'
import axios  from 'axios'



const Profile = ({signupDetails,setsignupDetails}) => {
    const [isLoading, setIsLoading]= useState(false)

    // console.log(signupDetails);

  const [details, setDetails] = useState()

    const url = "https://growpital.herokuapp.com/auth/profile"

  useEffect(()=>{
   setIsLoading(true)
    axios.get(url, { headers: { token: localStorage.getItem("token")  } })
    .then(response => {
        // If request is good...
        // console.log(response);
        setsignupDetails(response.data.data)
        setIsLoading(false)
     })
    .catch((error) => {
        console.log(error);
        setIsLoading(false)

     });
  }, [])



    const setValues=(e)=>{
        
    }
    
    const [IsEditProfileOpen, setIsEditProfileOpen]= useState(false)
    // const setAvatar=(e)=>{
    //     const src=URL.createObjectURL(e.target.files[0]);
    //     const edit_avatar = document.getElementById("edit-profile-avatar");
        
    //     edit_avatar.style.backgroundImage="url("+src+")"

    // }

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
            borderColor = '#FFA217'
            barColor = '#CCA15F'
          />
        </div>):
        
        (<div className='profile-sec'>
        <div className="edit-profile-sec" style={IsEditProfileOpen?  {display:"flex"}: {display:"none"}} >
            <div className="edit-profile-modal">
                <img src={close}  alt="" className='close-edit-profile' onClick={()=>{setIsEditProfileOpen(false)}}/>
                <center>
                    <h1>Edit Profile</h1>
                </center>
                <div className="edit-modal-container" >
                   <form action="" onSubmit={setValues}>
                    <div className="edit-profile-sec-container">
              
              <div className="edit-profile-inputs">
                <div className="left-edit-inputs">
                    <div className="edit-input-grp">
                        <label htmlFor="edit-name">Name</label>
                    <input type="text" id='edit-name' name='edit-name'/>
                    </div>
                    <div className="edit-input-grp">
                        <label htmlFor="edit-email">Email</label>
                    <input type="email" id='edit-email' name='edit-email'/>
                    </div>
                    <div className="edit-input-grp">
                        <label htmlFor="edit-contact">Contact number</label>
                    <input maxLength={10} minLength={10} type="tel" id='edit-contact' name='edit-contact'/>
                    </div>
                    <div className="edit-input-grp">
                        <label htmlFor="edit-adhaar">Adhaar number</label>
                    <input maxLength={12} minLength={12} type="number" id='edit-adhaar' name='edit-adhaar' readOnly/>
                    </div>

                </div>
                <div className="center-edit-inputs">
                    <center>
                <div className="profile-avatar-container">
                <div className="profile-avatar" id='edit-profile-avatar'></div>
              </div>
              </center>
                </div>
                <div className="right-edits-inputs">
                    <div className="edit-input-grp">
                        <label htmlFor="edit-ifsc">IFSC</label>
                    <input readOnly pattern="^[A-Za-z]{4}[a-zA-Z0-9]{7}$" type="text" id='edit-ifsc' name='edit-ifsc'/>
                    </div>
                    <div className="edit-input-grp">
                        <label htmlFor="edit-account">Account number</label>
                    <input readOnly type="text" id='edit-account' name='edit-account'/>
                    </div>
                    <div className="edit-input-grp">
                        <label htmlFor="edit-password">New Password</label>
                    <input pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' type="password" id='edit-password' name='edit-password'/>
                    </div>
                    <div className="edit-input-grp">
                        <label htmlFor="edit-confirm-pass">Confirm Password</label>
                    <input pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' type="password" id='edit-confirm-pass' name='edit-confirm-pass' />
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
            <button className='edit-profile-btn' onClick={()=>{setIsEditProfileOpen(true)}}>Edit Profile</button>
        </div>
        <div className="profile-sec-container">
            <div className="profile-avatar-container">
                <div className="profile-avatar" id='profile-avatar'></div>
                <p className="avatar-name">{signupDetails.Name || ""}</p>
            </div>
            <div className="user-data-container">
                <div className="profile-data-grp">
                    <div className="user-name user-detail-box">
                        <p>Name</p>
                        <p className="profile-data-value">{signupDetails.Name || ""}</p>
                    </div>
                    <div className="user-email user-detail-box">
                        <p>Email</p>
                        <p className="profile-data-value">{signupDetails.Email || ""}</p>
                    </div>
                    <div className="user-contact user-detail-box">
                        <p>Contact</p>
                        <p className="profile-data-value">{signupDetails.Phone || ""}</p>
                    </div>
                    <div className="user-ifsc user-detail-box">
                        <p>IFSC Code</p>
                        <p className="profile-data-value">{signupDetails.IFSC_Code || ""}</p>
                    </div>
                    <div className="user-account-num user-detail-box">
                        <p>Account Number</p>
                        <p className="profile-data-value">{signupDetails.Account_No || ""}</p>
                    </div>
                    <div className="user-adhaar-num user-detail-box">
                        <p>Adhaar Number</p>
                        <p className="profile-data-value">{signupDetails.Aadhaar_Number || ""}</p>
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