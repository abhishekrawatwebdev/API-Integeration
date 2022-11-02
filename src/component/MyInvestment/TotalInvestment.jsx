import React from "react";
import './css/totalInvestment.css'
import redWoman1 from '../../images/redSuitWoman.png'


const TotalInvestment = ({Investment}) => {

    return(
        <>
        <div className="container">
        <img src={redWoman1} alt="" className="redWoman"/>
        <div className="amount">
        <h2>Total Investments</h2>
            <p id="moneyInvested" className="totalMoney">&#8377; {Investment}</p>
        </div>
        </div>
        
        </>
    )
}

export default TotalInvestment