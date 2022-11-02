import React, {useState,useEffect} from 'react'
import "./css/newInvestment.css"
import { ProgressBar } from  'react-loader-spinner'

import PlanCards from './Plan_cards'
import Payment from '../Payment/Payment'

const NewInvestment = ({signupDetails}) => {
    // eslint-disable-next-line no-unused-vars
    // const [IsPlanSelected, setIsPlanSelected] = useState(false)

    const [PlanName , setPlanName] = useState("")

    const [Roi , setRoi] = useState("")

    const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])


  return (
    <div>
        {isLoading? (<div className="loader">
            <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor='#FFA217'
                barColor='#CCA15F'
            />
        </div>):(<><div className="new-investment-sec">
        <h1 className='new-investment-heading'>
            Hey {signupDetails.Name},<br />
           Multiplying your money isn't as difficult as you think.
        </h1>
        <div className='new-investment-plans'>
            <p className='landing-para landing-plan-para'>We Currently have three plans avialable  <br />
            Choose wisely as per your needs and investment capacity</p><br />
            <div className="investment-plans">
                <PlanCards setPlanName={setPlanName} Roi={Roi} setRoi={setRoi}/>
            </div>
        </div>
        
    </div>
       
        <Payment Roi={Roi} PlanName={PlanName} setIsLoading={setIsLoading}/></>)}
    </div>
  )}
    

export default NewInvestment;