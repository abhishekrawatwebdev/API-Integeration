import React, {useState,useEffect} from 'react'
import './css/wallet.css'
import Amount from './Amount'
import Transactions from './Transactions'
import Withdrawal from './Withdrawal'
import AddMoney from './AddMoney'
import { ProgressBar } from  'react-loader-spinner'



const Wallet = ({signupDetails}) => {

    const [isloading, setIsLoading] = useState(false)

  useEffect(()=>{
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])


    return(
       <div>
       {
        isloading? (<div className="loader">
            <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor='#FFA217'
                barColor='#CCA15F'
            />
        </div>):( <div className="walletContainer">
            <Withdrawal/>
            <AddMoney />
        <div className="upperComponent">
        <h3 className='greeting'>Hey User! <br />
       You can check your <br />
       wallet and transactions here.
       </h3>
       <Amount signupDetails={signupDetails}/>
       </div>
       <div className="transactions">
       <h4 className='trans-heading'>All Transactions</h4>
       <Transactions />
       </div>
        </div>)
       }
       </div>
    )
}

export default Wallet