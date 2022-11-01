import React from 'react'
import './css/payment.css'
import close from "../../images/close.svg"
import { useNavigate } from 'react-router-dom'

function Payment() {
  const navigate = useNavigate()
  const submitInvestingAmmount=(e)=>{
    e.preventDefault();
    closePayment()
    navigate("/myInvestments")

  }
  const closePayment=()=>{
    document.getElementById("payment-modal-container").style.display="none"
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
              <input type="number" id='plan-payment-price' className="form-control amountInput" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="please enter an amount" required />
            </div>
            <button type="submit" className="btn btn-light payment-modal-btn">Buy Plan</button>
            </form>
            
        </div>
    </div>
  )
}

export default Payment