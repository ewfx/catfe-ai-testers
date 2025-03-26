// src/App.js

import React, { useState, useEffect } from 'react';
import LoanRequestForm from './components/LoanRequestForm';
import LoanRequestTable from './components/LoanRequestTable';
import ApprovalRequests from './components/ApprovalRequests';
import ErrorPopup from './components/ErrorPopup';
import './App.css';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import axios from 'axios'; // Import Axios

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [loanRequests, setLoanRequests] = useState([]);
  const [approvalRequests, setApprovalRequests] = useState([]);
  const [value, setValue] = useState(0);
  const [requestLoan, setRequestLoan] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch('http://localhost:8080/requestLoan/allRequests')
      .then((response) => response.json())
      .then((data) => {
        setLoanRequests(data);
        setApprovalRequests(data.filter(x => x['loanStatus'] == "PROCESSING"));
      });
  }, [loanRequests, approvalRequests]);

  const handleLoanRequestSubmit = (loanRequest) => {
    axios.post('http://localhost:8080/requestLoan', loanRequest)
      .then((response) => {
        setLoanRequests([...loanRequests, response.data]);
        setApprovalRequests([...approvalRequests, response.data]);
        setRequestLoan(false);
      }).catch(e => setError(e))
  };

  const handleApprove = (loanId) => {
    fetch(`http://localhost:8080/approveLoan/${loanId}?status=APPROVED`, { method: 'PUT' })
      .then(() => {
        setLoanRequests(loanRequests.map((req) => (req.loanId === loanId ? { ...req, requestStatus: 'APPROVED' } : req)));
        setApprovalRequests(approvalRequests.filter((req) => req.loanId !== loanId));
      });
  };

  const handleReject = (loanId) => {
    fetch(`http://localhost:8080/approveLoan/${loanId}?status=REJECTED`, { method: 'PUT' })
      .then(() => {
        setLoanRequests(loanRequests.map((req) => (req.loanId === loanId ? { ...req, requestStatus: 'REJECTED' } : req)));
        setApprovalRequests(approvalRequests.filter((req) => req.loanId !== loanId));
      });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <h1>Loan Request Management</h1>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="loan-tabs">
            <Tab label="Loan Requests" {...a11yProps(0)} />
            <Tab label="Approval Requests" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div>
            {requestLoan ? <LoanRequestForm onLoanRequestSubmit={handleLoanRequestSubmit} /> : <LoanRequestTable loanRequests={loanRequests} />}
            <div> {requestLoan ? <button onClick={() => setRequestLoan(false)}>View Loans</button> : <button onClick={() => setRequestLoan(true)}>Request Loan</button>} </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ApprovalRequests approvalRequests={approvalRequests} onApprove={handleApprove} onReject={handleReject} />
        </CustomTabPanel>
      </Box>
      {error != null && <ErrorPopup error={error} onClose={() => setError(null)} /> }
    </div>
  );
}

export default App;