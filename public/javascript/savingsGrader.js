$(document).ready(function() {
    $('#collapseAdvice').collapse("hide");


    var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
    console.log("budgetForm", budgetForm);

    var totalPay = parseInt(budgetForm.totalPay);
    console.log("totalPay", totalPay);

    var budgetForm6 = JSON.parse(localStorage.getItem("budgetForm6"));
    console.log("budgetForm6", budgetForm6);

    var savingsBudget = parseInt(budgetForm6.emergencyFund) + parseInt(budgetForm6.retirementFund) + parseInt(budgetForm6.collegeFund);
    console.log("savingsBudget", savingsBudget);

    var savingsBudgetPercent = ((savingsBudget * 100) / totalPay).toFixed(2);

    var totalSavingsBudget = $("<h3 class='budgetNumPercGrade'>Your total savings budget is: <span>$" + savingsBudget + "</span></h3>");
    var percentOfBudget = $("<h3 class='budgetNumPercGrade'>Your savings budget is <span>" + savingsBudgetPercent + "%</span> of your total budget.</h3>");

    var suggestedBudgetPercent = 15;

    var grade = getGrade(savingsBudgetPercent, "savings");
    console.log(grade);
    var savingsGrade = $("<h3 class='budgetNumPercGrade'>Your grade is: <span>" + grade + "</span></h3>");
    localStorage.setItem("savingsGrade", grade);

    let savingsAdvice;

    if (grade === "A+") {
        savingsAdvice = advice.savings[1];
    } else if (grade === "A-") {
        savingsAdvice = advice.savings[2].slice(0, 1);
    } else if (grade === "B+") {
        savingsAdvice = advice.savings[2].slice(0, 2);
    } else if (grade === "B-") {
        savingsAdvice = advice.savings[2].slice(0, 3);
    } else if (grade === "C+") {
        savingsAdvice = advice.savings[2].slice(0, 4);
    } else if (grade === "C-") {
        savingsAdvice = advice.savings[2].slice(0, 5);
    } else if (grade === "D") {
        savingsAdvice = advice.savings[2].slice(0, 6);
    } else if (grade === "D-") {
        savingsAdvice = advice.savings[2].slice(0, 7);
    } else {
        savingsAdvice = advice.savings[2];
    }

    $("#budgetTotal").append(totalSavingsBudget);
    $("#budgetPercent").append(percentOfBudget);
    $("#budgetGrade").append(savingsGrade);
  
  if(grade == 'A+'){
      $("#advice").hide();
      $("#aplus").append(savingsAdvice);
  } else{
      for(var i = 0; i < savingsAdvice.length; i++){
          $(".list-group").append("<li class='list-group-item'>" + savingsAdvice[i] + "</li>");
      }
  }


});

$("#savingsGraderBack").on("click", function() {
    window.location.href = "/budgetForm/6";
});

$("#savingsGraderNext").on("click", function() {
    window.location.href = "/budgetForm/7";
});