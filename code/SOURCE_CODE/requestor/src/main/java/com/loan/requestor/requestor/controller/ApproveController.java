package com.loan.requestor.requestor.controller;

import com.loan.requestor.requestor.EmploymentStatus;
import com.loan.requestor.requestor.LoanStatus;
import com.loan.requestor.requestor.entity.LoanRequest;
import com.loan.requestor.requestor.repository.LoanRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/approveLoan")
public class ApproveController {

    @Autowired
    private LoanRequestRepository loanRequestRepository;

    @PutMapping("/{id}")
    public ResponseEntity<LoanRequest> updateLoanStatus(@PathVariable Long id, @RequestParam LoanStatus status) {
        Optional<LoanRequest> optionalLoanRequest = loanRequestRepository.findById(id);

        if (optionalLoanRequest.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        LoanRequest loanRequest = optionalLoanRequest.get();

        if (status == LoanStatus.APPROVED) {
            // Logic to analyze and approve
            if (!canApprove(loanRequest)) {
                loanRequest.setLoanStatus(LoanStatus.REJECTED.toString());
                loanRequestRepository.save(loanRequest);
                return new ResponseEntity<>(loanRequest, HttpStatus.OK);
            }
        }

        loanRequest.setLoanStatus(status.toString());
        LoanRequest updatedLoanRequest = loanRequestRepository.save(loanRequest);
        return new ResponseEntity<>(updatedLoanRequest, HttpStatus.OK);
    }

    private boolean canApprove(LoanRequest loanRequest) {

        List<LoanRequest> existingLoans = loanRequestRepository.findByCustomerId(loanRequest.getCustomerId());

        for(LoanRequest existingLoan : existingLoans){
            if(existingLoan.getLoanStatus().equals(LoanStatus.APPROVED.toString()) && !existingLoan.getLoanId().equals(loanRequest.getLoanId())){
                return false; // Customer already has an approved loan.
            }
        }
        if (loanRequest.getDebtToIncomeRatio() > 0.4) {
            return false; // High debt-to-income ratio.
        }

        if (loanRequest.getCreditScore() < 600) {
            return false; // Low credit score.
        }

        if (loanRequest.getLoanAmount() > 10000 && (loanRequest.getEmploymentStatus().equals(EmploymentStatus.RETIRED)
                || loanRequest.getEmploymentStatus().equals(EmploymentStatus.UNEMPLOYED)
                || loanRequest.getEmploymentStatus().equals(EmploymentStatus.STUDENT))) {
            return false; // High loan amount for unemployed.
        }

        if (loanRequest.getLoanAmount() > 100000) {
            if(loanRequest.getCreditScore() < 750){
                return false; //High loan amount and low credit score.
            }
        }

        return true; // All checks passed.
    }

}
