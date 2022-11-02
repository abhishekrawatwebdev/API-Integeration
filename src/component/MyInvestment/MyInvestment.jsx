import React, { useState, useEffect } from "react";
import './css/myInvestment.css'
import { ProgressBar } from 'react-loader-spinner'
import InvestMore from "./InvestMore";
import TotalInvestment from "./TotalInvestment";
import TotalProfit from "./TotalProfit";
import axios from "axios";
import ActiveInvestments from "./ActiveInvestments"

const MyInvestment = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [InvestArr, setInvestArr] = useState([]);
  // Total profit
  const [Profit, setProfit] = useState("")

  // total amount invested 
  const [Investment , setInvestment] = useState(0);

  const url = "https://growpital.herokuapp.com/invest/investment"

  useEffect(() => {

       // api call
    axios.get(url
      , { headers: { token: localStorage.getItem("token") } })
      .then(response => {


        setInvestArr(response.data.data)

        let investArray = response.data.data;
        let sum = 0;
        investArray.forEach(element => {
          sum += element.Principal;
        });

        setInvestment(sum)

        callProfit(response)

        setIsLoading(false)
      })
      .catch((error)=>{
        setIsLoading(false)
        console.log(error);
      })
  }, [])


  function callProfit(response){

    let arr = response.data.data
    let profit = 0;

    // calculating profit
    arr.forEach((el)=>{
      // removing & sign from string
      

       profit = profit + el.Principal * returnROI(el)
    })

    setProfit(profit.toFixed())
  }

  function returnROI(el){

    if(el.Plan_Type==='Basic'){
      return 10/100
    }else if(el.Plan_Type==='Medium'){
      return 15/100
    }else{
      return 18/100
    }
  }

  return (
    <>
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
        </div>) : (
          <div className="myInvestment-container">
            <div className="upperContainer">
              <p className="greeting">Hey there! You can find about your investment here.</p>
              <InvestMore />
            </div>
            <div className="total">
              <TotalInvestment Investment={Investment} />
              <TotalProfit Profit={Profit}/>
            </div>

            <div className="active-investment-container px-5">
              <ActiveInvestments InvestArr={InvestArr}/>
            </div>
         
          </div>)
      }




    </>
  )
}

export default MyInvestment