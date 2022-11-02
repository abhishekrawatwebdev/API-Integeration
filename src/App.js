import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard"
import Login from "./component/Login-signup/Login"
import Signup from "./component/Login-signup/Signup"
import Landing from "./component/Landing_Page/Landing";
import FullContactUs from "./component/contactUs/fullContactUs";
import NewInvestment from "./component/new_investment/NewInvestment";
import Profile from "./component/Profile_page/Profile";
import Protected from "./component/Protected/Protected";
import Wallet from "./component/Wallet/Wallet";
import ProfileVerification from "./component/ProfileVerification/ProfileVerification";
import MyInvestment from "./component/MyInvestment/MyInvestment";
import MainNavbar from './component/Navbar/MainNavbar'
import axios from "axios";



function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));


  // props for profile section
  const [signupDetails, setsignupDetails] = useState({
    Name: "",
    Email: "",
    Password: "",
    Phone: "",
    Balance: "",
    Aadhaar_Number: "",
    Account_No: "",
    IFSC_Code: "",
  })

  // props for updating profile
  const [updateItem, setUpdateItem] = useState({
    Name: "",
    Email: "",
    Password: "",
    Phone: "",
    Balance: "",
    Aadhaar_Number: "",
    Account_No: "",
    IFSC_Code: "",
  })

  useEffect(()=>{
    fetchprofil()
  },[])

  // fetching profile details
  function fetchprofil(){
    const url ="https://growpital.herokuapp.com/auth/profile"
    axios.get(url, { headers: { token: localStorage.getItem("token")  } })
    .then(response => {
        // If request is good...
        // console.log(response);
        setsignupDetails(response.data.data)
        setUpdateItem(response.data.data)
     })
    .catch((error) => {
        console.log(error);

     });
  }




  return (
    <div className="App">

      <BrowserRouter>

        <MainNavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} signupDetails={signupDetails} />


        <Routes>
          <Route index path="/" element={<Landing isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />

          <Route path="login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="signup" element={<Signup signupDetails={signupDetails} setsignupDetails={setsignupDetails} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />

          <Route path="dashboard" element={
            <Protected isLoggedIn={isLoggedIn}>
              <Dashboard signupDetails={signupDetails}/>
            </Protected>
          } />
          <Route path="contactUs" element={
            <Protected isLoggedIn={isLoggedIn}>
              <FullContactUs />
            </Protected>} />

          <Route path="newInvestment" element={
            <Protected isLoggedIn={isLoggedIn}>
              <NewInvestment signupDetails={signupDetails}/>
            </Protected>
          } />

          <Route path="profile" element={
            <Protected isLoggedIn={isLoggedIn}>
              <Profile signupDetails={signupDetails}
                setsignupDetails={setsignupDetails} 
                updateItem={updateItem}
                setUpdateItem={setUpdateItem}
                />
            </Protected>
          } />

          <Route path="wallet" element={
            <Protected isLoggedIn={isLoggedIn}>
              <Wallet signupDetails={signupDetails}/>
            </Protected>
          } />

          <Route path="profileVerification" element={
            <Protected isLoggedIn={isLoggedIn}>
              <ProfileVerification
                signupDetails={signupDetails}
                setsignupDetails={setsignupDetails}
                setIsLoggedIn={setIsLoggedIn} />
            </Protected>
          } />

          <Route path="myInvestments" element={
            <Protected isLoggedIn={isLoggedIn}>
              <MyInvestment />
            </Protected>
          } />

        </Routes>
      </BrowserRouter>


    </div>
  );
}
export default App;
