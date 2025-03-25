namespace LoanCreditRiskAssessment.Models
{
    public class Loan
    {
        public int LoanId { get; set; }
        public int CustomerId { get; set; }
        public double LoanAmount { get; set; }
        public int? CreditScore { get; set; }
        public string? EmploymentStatus { get; set; }
        public double? DebtToIncomeRatio { get; set; }
        public string? ApprovalStatus { get; set; }
        public string? LoanResult { get; set; }
        public double? InterestRate { get; set; }
        public string? ExpectedResult { get; set; }
    }
}
