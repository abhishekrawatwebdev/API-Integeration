import React from "react";
import './css/investmentTable.css';
import Table from 'react-bootstrap/Table';




const ActiveInvestments = ({ InvestArr }) => {

 
  function returnROI(el){

    if(el.Plan_Type==='Basic'){
      return 10/100
    }else if(el.Plan_Type==='Medium'){
      return 15/100
    }else{
      return 18/100
    }
  }

  return (
    <>
      <br />
      <h3 className="table-heading">Active Transactions</h3>
      <div>
        <Table striped bordered variant="dark" >
          <thead>
            <tr>
              <th>Type </th>
              <th>Principal</th>
              <th>ROI</th>
              <th>Profit</th>
            </tr>
          </thead>

          <tbody >

            {InvestArr.map((el, index) => {

              let  profit = el.Principal*returnROI(el)


              return (
                <tr key={index}>
                  <td>{el.Plan_Type}</td>
                  <td>{el.Principal}</td>
                  <td>{el.Roi}</td>
                  <td >{profit.toFixed()}</td>
                </tr>
              )
            })}

          </tbody>


        </Table>
      </div>
    </>
  )
}

export default ActiveInvestments;