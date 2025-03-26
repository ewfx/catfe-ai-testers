// src/components/ApprovalRequests.js

import React from 'react';
import '../App.css'; // Import the shared CSS

function ApprovalRequests({ approvalRequests, onApprove, onReject }) {
  return (
    <div className="table-container">
      <h2>Approval Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Loan ID</th>
            <th>Customer ID</th>
            <th>Loan Amount (USD)</th>
            <th>Debt Ratio</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {approvalRequests.map((request) => (
            <tr key={request.loanId}>
              <td>{request.loanId}</td>
              <td>{request.customerId}</td>
              <td>{request.loanAmount}</td>
              <td>{request.debtToIncomeRatio}</td>
              <td>
                <button className="approve-button" onClick={() => onApprove(request.loanId)}>Approve</button>
              </td>
              <td>
                <button className="reject-button" onClick={() => onReject(request.loanId)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApprovalRequests;