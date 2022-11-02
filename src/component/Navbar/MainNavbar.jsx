import React, {useState} from 'react'
import './css/navbar.css'
import Logo from '../../images/Logo.png'
import hamburger from "../../images/hamburger.svg"
import close from "../../images/close.svg"
import { useNavigate, NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const MainNavbar = ({isLoggedIn, setIsLoggedIn,signupDetails}) => {
    const[IsnavOpen, setIsnavOpen]=useState(false);
    
    const navigate = useNavigate()
    
  return (
    <div>
        <nav className="mobile-navlinks" id={IsnavOpen? "openNav":"closedNav"}  >
            <img src={close} alt="" id='close'  onClick={()=>setIsnavOpen(false)}/>
           
            
            <ul>
                    <li onClick={()=>{navigate("/dashboard");setIsnavOpen(false)}}>Dashboard</li>
                    <li onClick={()=>{navigate("/newInvestment");setIsnavOpen(false)}}>New Investment</li>
                    <li onClick={()=>{navigate("/myInvestments");setIsnavOpen(false)}}>My Investments</li>
                    <li onClick={()=>{navigate("/wallet");setIsnavOpen(false)}}>Wallet</li>
                    <li onClick={()=>{navigate("/contactUs");setIsnavOpen(false)}}>Contact Us</li>
                    <li onClick={()=>{navigate("/profile");setIsnavOpen(false)}}>Profile</li>
                    <li className='mobile-logout' onClick={()=>{localStorage.clear(); setIsLoggedIn(""); navigate("/login");setIsnavOpen(false)}}>Logout</li>
                </ul>
        </nav>
       <nav className='main-navbar'>
            <div className='nav-logo'>
                <img src={Logo} alt=""  onClick={()=>{navigate("/login")}}/>
            </div>
            <div className='nav-links'>
                <ul>
                    <li  className="nav-link">
                        <NavLink id='nav-link-a' className={({isActive})=> isActive? "active-nav-link": ""} to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink id='nav-link-a' className={({isActive})=> isActive? "active-nav-link": ""} to="/newInvestment">New Investment</NavLink> 
                    </li>
                    <li className="nav-link" ><NavLink id='nav-link-a' className={({isActive})=> isActive? "active-nav-link": ""} to="/myInvestments">My Investments</NavLink></li>
                    <li className="nav-link">
                        <NavLink id='nav-link-a' className={({isActive})=> isActive? "active-nav-link": ""} to="/wallet">Wallet</NavLink> 
                    </li>

                    <li className='ms-5'>
                        {
                            isLoggedIn ? <Dropdown>
                                            <Dropdown.Toggle  id="dropdown-basic">
                                                <div className="avatar"></div> {signupDetails.Name}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item id='dropdown-link' ><NavLink  to="/profile">Profile</NavLink> </Dropdown.Item>
                                                <Dropdown.Item id='dropdown-link'> <NavLink  to="/contactUs">Contact Us</NavLink></Dropdown.Item>
                                                <Dropdown.Item id='dropdown-link'><NavLink onClick={()=>{localStorage.clear(); setIsLoggedIn(""); navigate("/login");}}>Logout</NavLink></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>: (<div className="button-grp">
                                                        <button onClick={()=>navigate('/login')} className='login-btn'>Login</button>
                                                        <button onClick={()=>navigate('/signup')}  className='signup-btn'>Signup</button>
                                                      </div>)
                        }
                    </li>

                    

                </ul>
            </div>
            {
                isLoggedIn!=="" || null? (<div className="hamburger">
                <img src={hamburger} alt="" onClick={()=>setIsnavOpen(true)}  />
            </div>):(<div className="button-grp button-grp-mobile">
          <button onClick={()=>navigate('/login')} className='login-btn'>Login</button>
          <button onClick={()=>navigate('/signup')}  className='signup-btn'>Signup</button>
        </div>)
            }
       </nav>
    </div>
  )
}

export default MainNavbar
