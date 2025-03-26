// src/components/LoanRequestForm.js

import React, { useState } from 'react';
import './LoanRequestForm.css'; // Import the shared CSS

function LoanRequestForm({ onLoanRequestSubmit }) {
  const [loanRequest, setLoanRequest] = useState({
    customerId: '',
    loanAmount: '',
    creditScore: '',
    debtToIncomeRatio: '',
    requestStatus: 'PROCESSING',
    employmentStatus: 'EMPLOYED',
  });

  const handleChange = (e) => {
    setLoanRequest({ ...loanRequest, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoanRequestSubmit(loanRequest);
    setLoanRequest({
      customerId: '',
      loanAmount: '',
      creditScore: '',
      debtToIncomeRatio: '',
      requestStatus: 'PROCESSING',
      employmentStatus: 'EMPLOYED',
    });
  };

  return (
    <div className="form-container">
      <h2>Submit Loan Request</h2>
      <fieldset>
      <form onSubmit={handleSubmit}>
      <label htmlFor="customerId">Customer ID*</label>
      <input
          type="number"
          name="customerId"
          id="customerId"
          value={loanRequest.customerId}
          onChange={handleChange}
          placeholder="Customer ID"
          required
      />
      <label htmlFor="loanAmount">Loan Amount (USD)*</label>
            <input
                type="number"
                name="loanAmount"
                id="loanAmount"
                value={loanRequest.loanAmount}
                onChange={handleChange}
                placeholder="Loan Amount (USD)"
                required
            />
        <label htmlFor="creditScore">Credit Score*</label>
        <input type="number" name="creditScore" id="creditScore" placeholder="Credit Score" value={loanRequest.creditScore} onChange={handleChange} required />
        <label htmlFor="debtToIncomeRatio">Debt to Income Ratio*</label>
        <input type="number" name="debtToIncomeRatio" id="debtToIncomeRatio" placeholder="Debt to Income Ratio" value={loanRequest.debtToIncomeRatio} onChange={handleChange} required />
        <label htmlFor="employmentStatus">Employment Status*</label>
        <select name="employmentStatus" id="employmentStatus" value={loanRequest.employmentStatus} onChange={handleChange}>
          <option value="EMPLOYED">EMPLOYED</option>
          <option value="SELF_EMPLOYED">SELF EMPLOYED</option>
          <option value="UNEMPLOYED">UNEMPLOYED</option>
          <option value="RETIRED">RETIRED</option>
          <option value="PART_TIME">PART TIME</option>
          <option value="CONTRACT">CONTRACT</option>
          <option value="STUDENT">STUDENT</option>
        </select>
        <button type="submit">Request Loan</button>
      </form>
      </fieldset>
    </div>
  );
}

export default LoanRequestForm;