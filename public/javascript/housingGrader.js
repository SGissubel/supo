$(document).ready(function() {


    $('#collapseAdvice').collapse("hide");


    var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
    console.log("budgetForm", budgetForm);

    var totalPay = parseInt(budgetForm.totalPay);
    console.log("totalPay", totalPay);

    var budgetForm5 = JSON.parse(localStorage.getItem("budgetForm5"));
    console.log("budgetForm5", budgetForm5);

    var housingBudget = parseInt(budgetForm5.mortgageRent) + parseInt(budgetForm5.secondMortgage) + parseInt(budgetForm5.taxes) + parseInt(budgetForm5.repairsMaint) + parseInt(budgetForm5.dues);
    console.log("housingBudget", housingBudget);

    var housingBudgetPercent = ((housingBudget * 100) / totalPay).toFixed(2);

  var totalHousingBudget = $("<h3 class'budgetNumPercGrade'>Your total housing budget is: <span>$" + housingBudget + "</span></h3>");
  var percentOfBudget = $("<h3 class'budgetNumPercGrade'>Your housing budget is <span>" + housingBudgetPercent + "%</span> of your total budget.</h3>");


    var suggestedBudgetPercent = 35;

    var percentDiff = housingBudgetPercent - suggestedBudgetPercent;
    console.log(percentDiff);

    var grade = getGrade(percentDiff);
    console.log(grade);
  var housingGrade = $("<h3 class'budgetNumPercGrade'>Your grade is: <span>" + grade + "</span></h3>");
    localStorage.setItem("housingGrade", grade);

    let housingAdvice;

    if (grade === "A+") {
        housingAdvice = advice.housing[1];
    } else if (grade === "A-") {
        housingAdvice = advice.housing[2].slice(0, 0);
    } else if (grade === "B+") {
        housingAdvice = advice.housing[2].slice(0, 1);
    } else if (grade === "B-") {
        housingAdvice = advice.housing[2].slice(0, 2);
    } else if (grade === "C+") {
        housingAdvice = advice.housing[2].slice(0, 3);
    } else if (grade === "C-") {
        housingAdvice = advice.housing[2].slice(0, 4);
    } else if (grade === "D") {
        housingAdvice = advice.housing[2].slice(0, 5);
    } else if (grade === "D-") {
        housingAdvice = advice.housing[2].slice(0, 5);
    } else {
        housingAdvice = advice.housing[2];
    }

    $("#budgetTotal").append(totalHousingBudget);
    $("#budgetPercent").append(percentOfBudget);
    $("#budgetGrade").append(housingGrade);

    if (grade == 'A+') {
        $("#advice").hide();
        $("#aplus").append(housingAdvice);
    } else {
        for (var i = 0; i < housingAdvice.length; i++) {
            $(".list-group").append("<li class='list-group-item'>" + housingAdvice[i] + "</li>");
        }
    }

});

$("#housingGraderBack").on("click", function() {
    window.location.href = "/budgetForm/5";
});

$("#housingGraderNext").on("click", function() {
    window.location.href = "/budgetForm/6";
});