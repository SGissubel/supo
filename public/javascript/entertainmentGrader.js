$(document).ready(function() {

    $('#collapseAdvice').collapse("hide");


    var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
    console.log("budgetForm", budgetForm);

    var totalPay = parseInt(budgetForm.totalPay);
    console.log("totalPay", totalPay);

    var budgetForm11 = JSON.parse(localStorage.getItem("budgetForm11"));
    console.log("budgetForm11", budgetForm11);

    var entertainmentBudget = parseInt(budgetForm11.entertainment) + parseInt(budgetForm11.vacation);
    console.log("entertainmentBudget", entertainmentBudget);

    var entertainmentBudgetPercent = ((entertainmentBudget * 100) / totalPay).toFixed(2);

    var totalEntertainmentBudget = $("<h3 class ='budgetNumPercGrade'>Your total entertainment budget is: <span>$" + entertainmentBudget + "</span></h3>");
    var percentOfBudget = $("<h3 class ='budgetNumPercGrade'>Your entertainment budget is <span>" + entertainmentBudgetPercent + "%</span> of your total budget.</h3>");


    var suggestedBudgetPercent = 3;

    var percentDiff = entertainmentBudgetPercent - suggestedBudgetPercent;
    console.log(percentDiff);

    var grade = getGrade(percentDiff);
    console.log(grade);
    var entertainmentGrade = $("<h3 class ='budgetNumPercGrade'>Your grade is: <span>" + grade + "</span></h3>");

    localStorage.setItem("entertainmentGrade", grade);

    let entertainmentAdvice;

    if (grade === "A+") {
        entertainmentAdvice = advice.entertainment[1];
    } else if (grade === "A-") {
        entertainmentAdvice = advice.entertainment[2].slice(0, 0);
    } else if (grade === "B+") {
        entertainmentAdvice = advice.entertainment[2].slice(0, 1);
    } else if (grade === "B-") {
        entertainmentAdvice = advice.entertainment[2].slice(0, 2);
    } else if (grade === "C+") {
        entertainmentAdvice = advice.entertainment[2].slice(0, 3);
    } else if (grade === "C-") {
        entertainmentAdvice = advice.entertainment[2].slice(0, 4);
    } else if (grade === "D") {
        entertainmentAdvice = advice.entertainment[2].slice(0, 5);
    } else if (grade === "D-") {
        entertainmentAdvice = advice.entertainment[2].slice(0, 6);
    } else {
        entertainmentAdvice = advice.entertainment[2];
    }


    $("#budgetTotal").append(totalEntertainmentBudget);
    $("#budgetPercent").append(percentOfBudget);
    $("#budgetGrade").append(entertainmentGrade);

    if (grade == 'A+') {
        $("#advice").hide();
        $("#aplus").append(entertainmentAdvice);
    } else {
        for (var i = 0; i < entertainmentAdvice.length; i++) {
            $(".list-group").append("<li class='list-group-item'>" + entertainmentAdvice[i] + "</li>");
        }
    }

});

$("#entertainmentGraderBack").on("click", function() {
    window.location.href = "/budgetForm/11";
});

$("#entertainmentGraderNext").on("click", function() {
    window.location.href = "/budgetForm/12";
});