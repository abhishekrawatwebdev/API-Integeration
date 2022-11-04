import React from 'react'
import './css/payment.css'
import close from "../../images/close.svg"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Payment({ setIsLoading, PlanName, Roi,setMinimumPrice,setMaximumPrice,minimumPrice,maximumPrice }) {
  const [amount, setAmount] = useState();

  const navigate = useNavigate()

  const url = 'https://growpital.herokuapp.com/invest/investment'

  const submitInvestingAmount = () => {
      closePayment()
    setIsLoading(true)

    // console.log(amount, PlanName, Roi);

    axios.post(url,
      {
        "Plan_Type": PlanName,
        "Principal": amount,
        "Roi":Roi
      }
      , { headers: { token: localStorage.getItem("token") } })
      .then(response => {

        // console.log(response);
        setIsLoading(false)
        navigate("/myInvestments")
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false)

      });
    
    


    // navigate("/myInvestments")

  }

  const checkAmount=()=>{
    // console.log(amount);
    // console.log(typeof(minimumPrice));
    if(amount < minimumPrice || amount > maximumPrice){
      // alert("limits exceeded")
      document.getElementById('payment-warning').style.display="block"
    }
    else{
      // console.log("invested");
      submitInvestingAmount()
    }

  }
  const closePayment = () => {
    document.getElementById("payment-modal-container").style.display = "none"
    setMinimumPrice(0)
    setMaximumPrice(0)
    setAmount("")
    document.getElementById('payment-warning').style.display="none"
  }

  // const Handle_setAmount = (e)=>{
  //   setAmount(e.target.value)

  // }
  // console.log(minimumPrice,maximumPrice);




  return (
    <div className='payment-modal-container' id='payment-modal-container'>
      <div className="payment-modal">
        <div className="top">
          <h2>Buy Plan</h2>
          <img src={close} alt="close" className="close" onClick={closePayment} />
        </div>
        {/* <form onSubmit={(e)=>e.preventDefault()}> */}
          <div className="label">
            <label htmlFor="amount">Amount</label><br />
            <input type="number" className="form-control amountInput" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="please enter an amount" required name="amount" value={amount || ""} onChange={(e)=>setAmount(e.target.value)} />
            <p id='payment-warning'>Please enter an amount between {minimumPrice} to {maximumPrice}</p>
          </div>
          <button type="" onClick={checkAmount} className="btn btn-light payment-modal-btn">Buy Plan</button>
        {/* </form> */}

      </div>
    </div>
  )
}

export default Payment