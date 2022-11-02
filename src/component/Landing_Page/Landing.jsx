import React,{useState,useEffect} from 'react'
import './css/landing.css';
import backVideo from '../../images/backVideo.mp4'
import { useNavigate } from 'react-router-dom';
import easyWallet from '../../images/easyWallet.png'
import businessGirl from '../../images/businessGirl.png'
import plans from "../../PlansData/plansData"
import { ProgressBar } from  'react-loader-spinner'
import ContactUs from '../contactUs/ContactUs';

const Landing = ({isLoggedIn,setIsLoggedIn}) => {
   
    const navigate = useNavigate()
     const [isLoading, setIsLoading]= useState(false)
    
 

    

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
             (<>
             <section className='hero-section'>
            <div className="hero-text">
                <div>
                    <h1>Invest and Grow With Us</h1><br />
                <p>We invest your capital in an efficient way <br />
                to return you the maximum profit. <br />
                Invest and Multiply your money to <br />
                make your future life good.
                </p>
                <button onClick={()=>{navigate('/login')}} className='hero-btn'>Let's Invest</button>
                </div>
            </div>

            <video src={backVideo} autoPlay='0' muted className='hero-video'></video>
            
        </section>
        <section className='landing-wallet-sec'>
            <div>
                <h1 className="landing-heading easy-withdrawal">Easy Withdrawals</h1>
                <p className="easy-para landing-para">
                    Secure Wallet transactions. <br />
                    No transactions associated to your account. <br />
                    Enjoy safe & secure payments with no <br />
                    hassle of entering an OTP.
                </p>
            </div>
            <div>
                <img src={easyWallet} alt="" className='easy-img' />
            </div>
        </section>
        <section className="first-withdrawing">
            <div>
                <h1 className='landing-heading withdraw-first'>
                    Withdrawing Your first <br />
                    investment is just <br />
                    simple as this.
                </h1> <br />
                <p className="landing-para businessGirlPara">
                    1. Create an acccount. <br />
                    2. Get verified. <br />
                    3. Invest in Plans. <br />
                    4. Withdraw directly in your bank account.
                </p> <br />
                <button onClick={()=>{navigate('/login')}} className='businessGirl-btn' >Let's Go</button>
            </div>
            <div>
                <img src={businessGirl} alt="" className='businessGirl' />
            </div>
        </section>
        <section className='landing-plans-sec'>
            <p className='landing-para landing-plan-para'>We Currently have three plans avialable  <br />
            Choose wisely as per your needs and investment capacity</p><br />
            <div className="landing-plans">
                {plans.map((plan, index)=>{
                    return(
                        <div className="landing-plan" key={index}>
                            <h1>{plan.plan_name}</h1><br />
                          {plan.min_limit !== ""?  <p>Deposit ₹ {plan.min_limit} - ₹{plan.max_limit} </p>: <p>Deposit ₹{plan.max_limit} </p>}
                            <br /><p>Lock-in Period {plan.lockin_period}</p><br />
                            <p>Rate of Interest {plan.ROI} p.a.</p><br />
                            <p>{plan.maturity_period} maturity period</p>
                        </div>
                    )
                })}
            </div>
        </section>
        <section className="landing-contact">
            <ContactUs/>
        </section>
             </>)
        }
    </div>
  )
}

export default Landing;