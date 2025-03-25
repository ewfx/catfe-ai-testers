using System.Diagnostics;
using LoanCreditRiskAssessment.Models;
using Microsoft.AspNetCore.Mvc;
using Web.Models;

namespace Web.Controllers
{
    public class LoanAssessmentController : Controller
    {
        private readonly ILogger<LoanAssessmentController> _logger;

        public LoanAssessmentController(ILogger<LoanAssessmentController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            var loans = new List<Loan>
                {
                    new Loan
                    {
                        LoanId = 1,
                        CustomerId = 123,
                        LoanAmount = 500,
                        CreditScore = 20,
                        EmploymentStatus = "Active",
                        DebtToIncomeRatio = 5.5,
                        ApprovalStatus = "Approved",
                        LoanResult = "Denied",
                        InterestRate = 5.5,
                        ExpectedResult = "Approved"
                    }
                };

            return View(loans);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
