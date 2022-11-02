import React from "react";
import './css/totalInvestment.css'
import redWoman2 from '../../images/redSuitWoman2.png'


const TotalProfit = ({Profit}) => {
    return(
        <>
        <div className="container">
        <img src={redWoman2} alt="" className="redWoman"/>
        <div className="amount">
            <h2>Total Profit</h2>
            <p id="moneyProfited" className="totalMoney">&#8377;{Profit}</p>
        </div>
        </div>
        
        </>
    )
}

export default TotalProfit