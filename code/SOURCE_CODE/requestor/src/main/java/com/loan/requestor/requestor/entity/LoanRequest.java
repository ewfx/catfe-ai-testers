package com.loan.requestor.requestor.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "loan_request")
public class LoanRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "loan_id")
    private Long loanId;

    @Column(name = "customer_id")
    private Long customerId;

    @Column(name = "loan_amount")
    private int loanAmount;

    @Column(name = "credit_score")
    private int creditScore;

    @Column(name = "employment_status")
    private String employmentStatus;

    @Column(name = "debt_to_income_ratio")
    private double debtToIncomeRatio;

    @Column(name = "loan_status")
    private String loanStatus;

    // Constructors, getters, setters
    public LoanRequest() {

    }

    public LoanRequest(Long customerId, int loanAmount, int creditScore, String employmentStatus, double debtToIncomeRatio, String loanStatus) {
        this.customerId = customerId;
        this.loanAmount = loanAmount;
        this.creditScore = creditScore;
        this.employmentStatus = employmentStatus;
        this.debtToIncomeRatio = debtToIncomeRatio;
        this.loanStatus = loanStatus;
    }

    public Long getLoanId() {
        return loanId;
    }

    public void setLoanId(Long loanId) {
        this.loanId = loanId;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public int getLoanAmount() {
        return loanAmount;
    }

    public void setLoanAmount(int loanAmount) {
        this.loanAmount = loanAmount;
    }

    public int getCreditScore() {
        return creditScore;
    }

    public void setCreditScore(int creditScore) {
        this.creditScore = creditScore;
    }

    public String getEmploymentStatus() {
        return employmentStatus;
    }

    public void setEmploymentStatus(String employmentStatus) {
        this.employmentStatus = employmentStatus;
    }

    public double getDebtToIncomeRatio() {
        return debtToIncomeRatio;
    }

    public void setDebtToIncomeRatio(double debtToIncomeRatio) {
        this.debtToIncomeRatio = debtToIncomeRatio;
    }

    public String getLoanStatus() {
        return loanStatus;
    }

    public void setLoanStatus(String loanStatus) {
        this.loanStatus = loanStatus;
    }
}