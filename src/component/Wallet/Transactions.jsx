/* eslint-disable no-unused-vars */
import React from "react";
import './css/transactions.css'
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




const Transactions = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [transactions, setTransaction] = useState([]);

  const navigate = useNavigate();
  const url = 'https://growpital.herokuapp.com/invest/transaction'

  useEffect(() => {
    axios.get(url, { headers: { token: localStorage.getItem("token") } })
      .then(response => {
        // If request is good...
        setTransaction(response.data.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false)

      });
  }, [])



  return (
    <>
      <div className="transaction-table-container">
        <Table striped bordered variant="dark">
          <thead>
            <tr>
              <th>Sender </th>
              <th>Amount</th>
              <th>Receiver</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody >

            {transactions.map((transaction, index) => {
              return (
                <tr key={index}>
                  <td>{transaction.Sender}</td>
                  <td>{transaction.Amount}</td>
                  <td>{transaction.Receiver}</td>
                  <td  style={{"color":"green"}}>{transaction.Status}</td>
                </tr>
              )
            })}

          </tbody>


        </Table>
      </div>
    </>
  )
}

export default Transactions;
