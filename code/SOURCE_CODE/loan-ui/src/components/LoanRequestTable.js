// src/components/LoanRequestTable.js

import React from 'react';
import '../App.css'; // Import the shared CSS

function LoanRequestTable({ loanRequests }) {
  return (
    <div className="table-container">
      <h2>Loan Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Loan ID</th>
            <th>Customer ID</th>
            <th>Loan Amount (USD)</th>
            <th>Credit Score</th>
            <th>Debt Ratio</th>
            <th>Status</th>
            <th>Employment</th>
          </tr>
        </thead>
        <tbody>
          {loanRequests.map((request) => (
            <tr key={request.loanId}>
              <td>{request.loanId}</td>
              <td>{request.customerId}</td>
              <td>{request.loanAmount}</td>
              <td>{request.creditScore}</td>
              <td>{request.debtToIncomeRatio}</td>
              <td>{request.loanStatus}</td>
              <td>{request.employmentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LoanRequestTable;