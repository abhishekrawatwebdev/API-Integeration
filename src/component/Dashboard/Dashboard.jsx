import React, { useEffect, useState } from 'react'
import "./css/dashboard.css"
import girlBudget from "../../images/girlBudget.png"
import businessMan from "../../images/businessMan.png"
import cashCoin from "../../images/cashCoin.png"
import { ProgressBar } from 'react-loader-spinner'
import axios from 'axios'



const Dasboard = ({signupDetails}) => {
  const investurl = "https://growpital.herokuapp.com/invest/investment";

  // total amount invest
  const [Investment, setInvestment] = useState("");
  const [Profit, setProfit] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const dashboardData = [
    {
      cardName: "Total Investment",
      cardValue: Investment,
      cardImg: girlBudget
    },
    {
      cardName: "Total Payout",
      cardValue: Number(Investment) + Number(Profit),
      cardImg: cashCoin
    },
    {
      cardName: "Total Profit",
      cardValue: Profit,
      cardImg: businessMan
    }
  ]



  useEffect(() => {
    getinvest(investurl)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  // api call function
  function getinvest(url) {

    setIsLoading(true)
    axios.get(url
      , { headers: { token: localStorage.getItem("token") } })
      .then(response => {

        // console.log(response);

        let investArray = response.data.data;
        let sum = 0;
        // total amount ivested
        investArray.forEach(element => {
          sum += element.Principal;
        });

        calProfit(response)

        setInvestment(sum)

        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false)

      });
  }

  function calProfit(response){

    let arr = response.data.data
    let profit = 0;

    // calculating profit
    arr.forEach((el)=>{
      // removing & sign from string
      let roi = el.Roi.replace('%','')

       profit = profit + el.Principal * (roi/100)
    
    })

    setProfit(profit.toFixed())
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
        </div>) : (<div className="dashboard">
          <div className="dashboard-header">
            <h1>
              {signupDetails.Name}, congratulations! <br />
              You now have access to your very own Dashboard.
            </h1>
            <div>
              <button className='dasboard-newInvest'>New Investment</button>
            </div>
          </div>
          <div className="dashboard-main-sec">
            <div className="dashboard-cards">
              {dashboardData.map((cardData, index) => {
                return (
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