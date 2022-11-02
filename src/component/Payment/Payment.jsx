import React from 'react'
import './css/payment.css'
import close from "../../images/close.svg"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Payment({ setIsLoading, PlanName, Roi }) {
  const [amount, setAmount] = useState(0);

  const navigate = useNavigate()

  const url = 'https://growpital.herokuapp.com/invest/investment'

  const submitInvestingAmmount = (e) => {
    e.preventDefault();
    closePayment()
    setIsLoading(true)

    console.log(amount, PlanName, Roi);

    axios.post(url,
      {
        "Plan_Type": PlanName,
        "Principal": amount,
        "Roi":Roi
      }
      , { headers: { token: localStorage.getItem("token") } })
      .then(response => {

        console.log(response);
        setIsLoading(false)
        navigate("/dashboard")
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false)

      });


    // navigate("/myInvestments")

  }
  const closePayment = () => {
    document.getElementById("payment-modal-container").style.display = "none"
  }




  return (
    <div className='payment-modal-container' id='payment-modal-container'>
      <div className="payment-modal">
        <div className="top">
          <h2>Buy Plan</h2>
          <img src={close} alt="close" className="close" onClick={closePayment} />
        </div>


        <form onSubmit={submitInvestingAmmount}>
          <div className="label">
            <label htmlFor="amount">Amount</label><br />
            <input type="number" className="form-control amountInput" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="please enter an amount" required name="amount" value={amount || ""} onChange={(e) => setAmount(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-light payment-modal-btn">Buy Plan</button>
        </form>

      </div>
    </div>
  )
}

export default Payment