package com.loan.requestor.requestor.controller;

import com.loan.requestor.requestor.LoanStatus;
import com.loan.requestor.requestor.entity.LoanRequest;
import com.loan.requestor.requestor.repository.LoanRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/requestLoan")
public class RequestController {

    @Autowired
    private LoanRequestRepository loanRequestRepository;

    @GetMapping("/allRequests")
    public List<LoanRequest> getProcessingLoans() {
        return loanRequestRepository.findAll().stream()
                .collect(Collectors.toList());
    }

    @PostMapping
    public ResponseEntity<LoanRequest> createLoanRequest(@RequestBody LoanRequest loanRequest) {
        String status = loanRequest.getEmploymentStatus();
        if (loanRequest.getCreditScore() < 300 || loanRequest.getCreditScore() > 850 || status == null
                || loanRequest.getCustomerId() < 1 || loanRequest.getLoanAmount() < 500 || loanRequest.getDebtToIncomeRatio() < 0) {
            throw new IllegalStateException("Invalid Data");
        }

        loanRequest.setLoanStatus(LoanStatus.PROCESSING.toString());
        LoanRequest savedLoanRequest = loanRequestRepository.save(loanRequest);
        return new ResponseEntity<>(savedLoanRequest, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LoanRequest> getLoanRequest(@PathVariable Long id){
        return loanRequestRepository.findById(id).map(loanRequest -> new ResponseEntity<>(loanRequest, HttpStatus.OK)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
