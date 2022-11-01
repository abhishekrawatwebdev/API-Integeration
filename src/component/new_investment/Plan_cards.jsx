import { getAllByAltText } from '@testing-library/react'
import React from 'react'
import { useState } from 'react'
import plans from '../../PlansData/plansData'
import "./css/newInvestment.css"

const PlanCards = () => {
  const [planMinValue, setPlanMinValue] = useState()
  const submitSelectedPlan=(e)=>{
    e.preventDefault()
    // console.log(e.target).getAll()
    document.getElementById("payment-modal-container").style.display="flex";
    let formData = new FormData(document.getElementById("plansDataForm"))
    console.log(formData.get('plan-value'));
  }
  return (
    <>
      {plans.map((plan, index)=>{
                    return(
                        <div className="investment-plan" key={index} >
                            <form onSubmit={submitSelectedPlan} id="plansDataForm">
                              <h1>{plan.plan_name}</h1>
                              <br />
                          {plan.min_limit !== ""?  <input name='plan-value' id='plan-value'  contentEditable={false} readOnly type="text" value={"Deposit ₹" + plan.min_limit + "- ₹"+ plan.max_limit } />: <input id='plan-value' readOnly type="text" value={"Deposit ₹" + plan.max_limit }/> }
                            <br />
                            <input readOnly name='lockin-period' type="text"  value={"Lock-in Period" + plan.lockin_period}/>
                            <br />
                            <input readOnly name='plan-roi' type="text" value={"Rate of Interest" + plan.ROI + "p.a."}/>
                            <br />
                            <input readOnly name='maturity-period' type="text" value={plan.maturity_period + "maturity period"}/>
                            <button className='select-plan-btn' type='submit' value={plan.plan_name}>Select</button>
                            </form>
                        </div>
                    )
                })}
    </>
  )
}

export default PlanCards