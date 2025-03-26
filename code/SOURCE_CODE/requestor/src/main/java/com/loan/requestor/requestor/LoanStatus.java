package com.loan.requestor.requestor;

public enum LoanStatus {
    APPROVED("APPROVED"),
    REJECTED("REJECTED"),
    PROCESSING("PROCESSING");

    private final String displayName;

    LoanStatus(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }

    @Override
    public String toString() {
        return displayName;
    }
}