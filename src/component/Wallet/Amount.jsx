import React from "react";
import './css/amount.css'
import walletLogo from "../../images/fluency-wallet.png"

 const Amount = ({signupDetails}) => {
     const openWithdrawModal =()=>{
        document.getElementById("withdrawal-modal-container").style.display="flex"
    }
    const openAddMoneyModal=()=>{
        document.getElementById("addMoney-modal-container").style.display="flex"
    }
return(
    <>
    <div className="amountComponent">
        <img src={walletLogo} alt="wallet" className="walletLogo"/>
        <div className="walletContent">
            <p className="wallet-balance">₹ 9642</p>
            <div className="wallet-btn-grp">
                <button className="wallet-add-money-btn" onClick={openAddMoneyModal} >Add Money</button>
                <button className="wallet-withdraw-money-btn" onClick={openWithdrawModal}>Withdraw</button>
            </div>
        </div>
    </div>
    </>
)
}

export default Amount