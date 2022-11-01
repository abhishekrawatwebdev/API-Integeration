import React,{useEffect, useState} from 'react'
import "./css/dashboard.css"
import girlBudget from "../../images/girlBudget.png"
import businessMan from "../../images/businessMan.png"
import cashCoin from "../../images/cashCoin.png"
import { ProgressBar } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'



const Dasboard = () => {
  const navigate = useNavigate()
  const dashboardData = [
    {
      cardName: "Total Investment",
      cardValue: "₹5000",
      cardImg: girlBudget
    },
    {
      cardName: "Total Payout",
      cardValue: "₹7000",
      cardImg: cashCoin
    },
    {
      cardName: "Total Profit",
      cardValue: "₹2000",
      cardImg: businessMan
    }
  ]

  const [isLoading, setIsLoading]= useState(false)

 useEffect(()=>{
setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
 },[])
    
  


  
return (
  
      <div>
        {
          isLoading ?(<div className="loader">
            <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor='#FFA217'
                barColor='#CCA15F'
            />
        </div>):(<div className="dashboard">
          <div className="dashboard-header">
            <h1>
            USERNAME, congratulations! <br /> 
            You now have access to your very own Dashboard.
            </h1>
          <div>
            <button onClick={()=>navigate("/newInvestment")} className='dasboard-newInvest'>New Investment</button>
          </div>
        </div>
        <div className="dashboard-main-sec">
          <div className="dashboard-cards">
            {dashboardData.map((cardData, index) => {
              return(
                <div className="dashboard-card" key={index}>
              <div className="dashboard-card-inner">
                <img src={cardData.cardImg} alt="" />
                <h1>{cardData.cardName}</h1>
                <p>{cardData.cardValue}</p>
              </div>
            </div>
              )
          })}  
          </div>

        </div>
        </div>)
        }
       
        
        
      </div>
    );
  }
export default Dasboard