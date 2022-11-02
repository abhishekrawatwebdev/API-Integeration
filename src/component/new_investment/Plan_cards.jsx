import React from 'react'
import plans from '../../PlansData/plansData'
import "./css/newInvestment.css"

const PlanCards = ({setPlanName, setRoi}) => {


  const submitSelectedPlan=(e)=>{
    e.preventDefault()
    console.log(e.target)
    document.getElementById("payment-modal-container").style.display="flex";
  }
  return (
    <>
      {plans.map((plan, index)=>{
      
                    return(
                        <div className="investment-plan" key={index} >
                            <form onSubmit={submitSelectedPlan}>
                              <h1>{plan.plan_name}</h1>
                              <br />
                          {plan.min_limit !== ""?  <input contentEditable={false} readOnly type="text" value={"Deposit ₹" + plan.min_limit + "- ₹"+ plan.max_limit } />: <input readOnly type="text" value={"Deposit ₹" + plan.max_limit }/> }
                            <br />
                            <input readOnly type="text" value={"Lock-in Period" + plan.lockin_period}/>
                            <br />
                            <input readOnly type="text" value={"Rate of Interest" + plan.ROI + "p.a."}/>
                            <br />
                            <input readOnly type="text" value={plan.maturity_period + "maturity period"}/>
                            <button className='select-plan-btn' type='submit' value={plan.plan_name}  onClick={ ()=>{ setPlanName(plan.plan_name); setRoi(plan.ROI)}}>Select</button>
                            </form>
                        </div>
                    )
                })}
    </>
  )
}

export default PlanCards