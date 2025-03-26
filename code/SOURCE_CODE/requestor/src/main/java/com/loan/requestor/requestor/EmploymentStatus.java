package com.loan.requestor.requestor;

public enum EmploymentStatus {
    EMPLOYED("EMPLOYED"),
    CONTRACT("CONTRACT"),
    SELF_EMPLOYED("SELF_EMPLOYED"),
    PART_TIME("PART_TIME"),
    RETIRED("RETIRED"),
    STUDENT("STUDENT"),
    UNEMPLOYED("UNEMPLOYED");

    private final String displayName;

    EmploymentStatus(String displayName) {
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