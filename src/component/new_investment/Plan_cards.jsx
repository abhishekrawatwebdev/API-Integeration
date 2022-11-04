import React from 'react'
import plans from '../../PlansData/plansData'
import "./css/newInvestment.css"

const PlanCards = ({setPlanName, setRoi,setMinimumPrice,setMaximumPrice,minimumPrice,maximumPrice}) => {

  const submitSelectedPlan=(e)=>{
    e.preventDefault()
    document.getElementById("payment-modal-container").style.display="flex";
    // console.log(e.target);
    // var formData = new FormData(e.target);
    let minMaxValue =  e.target[0].value.replace("Deposit ","")
   if( minMaxValue.includes("k")){
     minMaxValue= minMaxValue.replace("k","000")
   }

   if(minMaxValue.includes("Lakhs")|| minMaxValue.includes("La000hs")){

     minMaxValue= minMaxValue.replace("Lakhs","00000")
     minMaxValue = minMaxValue.replace("La000hs", "00000")
   }
   minMaxValue= minMaxValue.replace("₹","")
   let minPrice = minMaxValue.split(" ",1)
   let maxPrice = minMaxValue.split(" ",3)
   maxPrice.splice(0,2)
   if(minPrice){
     minPrice = minPrice[0]
   }
  
   maxPrice= maxPrice[0].replace("₹","")
    setMaximumPrice(parseInt(maxPrice));
    setMinimumPrice(parseInt(minPrice));
    // console.log(minPrice,maxPrice);
  }
  return (
    <>
      {plans.map((plan, index)=>{
      
                    return(
                        <div className="investment-plan" key={index} >
                            <form onSubmit={submitSelectedPlan}>
                              <h1>{plan.plan_name}</h1>
                              <br />
                          {plan.min_limit !== ""?  <input contentEditable={false} readOnly type="text" name='plan-max-min' value={"Deposit ₹"+plan.min_limit + " - ₹"+ plan.max_limit } />: <input readOnly type="text" value={"Deposit ₹" + plan.max_limit }/> }
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