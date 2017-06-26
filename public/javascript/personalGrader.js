$(document).ready(function() {
    $('#collapseAdvice').collapse("hide");


    var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
    console.log("budgetForm", budgetForm);

    var totalPay = parseInt(budgetForm.totalPay);
    console.log("totalPay", totalPay);

    var budgetForm10 = JSON.parse(localStorage.getItem("budgetForm10"));
    console.log("budgetForm10", budgetForm10);

    var personalBudget = parseInt(budgetForm10.personalTotal);
    console.log("personalBudget", personalBudget);

    var personalBudgetPercent = ((personalBudget * 100) / totalPay).toFixed(2);

    var totalPersonalBudget = $("<h2 class='budgetNumPercGrade'>Your total personal budget is: <span>$" + personalBudget + "</span></h2>");
    var percentOfBudget = $("<h2 class='budgetNumPercGrade'>Your personal budget is <span>" + personalBudgetPercent + "%</span> of your total budget.</h2>");

    var suggestedBudgetPercent = 7;

    var percentDiff = personalBudgetPercent - suggestedBudgetPercent;
    console.log(percentDiff);

    var grade = getGrade(percentDiff);
    console.log(grade);
    var personalGrade = $("<h3 class='budgetNumPercGrade'>Your grade is: <span>" + grade + "</span></h3>");
    localStorage.setItem("personalGrade", grade);

    let personalAdvice;

    if (grade === "A+") {
        personalAdvice = advice.personal[1];
    } else if (grade === "A-") {
        personalAdvice = advice.personal[2].slice(0, 0);
    } else if (grade === "B+") {
        personalAdvice = advice.personal[2].slice(0, 1);
    } else if (grade === "B-") {
        personalAdvice = advice.personal[2].slice(0, 2);
    } else if (grade === "C+") {
        personalAdvice = advice.personal[2].slice(0, 3);
    } else if (grade === "C-") {
        personalAdvice = advice.personal[2].slice(0, 3);
    } else if (grade === "D") {
        personalAdvice = advice.personal[2].slice(0, 4);
    } else if (grade === "D-") {
        personalAdvice = advice.personal[2].slice(0, 4);
    } else {
        personalAdvice = advice.personal[2];
    }

    $("#budgetTotal").append(totalPersonalBudget);
    $("#budgetPercent").append(percentOfBudget);
    $("#budgetGrade").append(personalGrade);

    if (grade == 'A+') {
        $("#advice").hide();
        $("#aplus").append(personalAdvice);

    } else{
        for(var i = 0; i < personalAdvice.length; i++){
            $(".list-group").append("<li class='list-group-item'>" + personalAdvice[i] + "</li>");

        }
    }
});

$("#personalGraderBack").on("click", function() {
    window.location.href = "/budgetForm/10";
});

$("#personalGraderNext").on("click", function() {
    window.location.href = "/budgetForm/11";
});