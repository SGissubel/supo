var foodAdvice;

$(document).ready(function() {
    $('#collapseAdvice').collapse("hide");


    var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
    console.log("budgetForm", budgetForm);

    var totalPay = parseInt(budgetForm.totalPay);
    console.log("totalPay", totalPay);

    var budgetForm2 = JSON.parse(localStorage.getItem("budgetForm2"));
    console.log("budgetForm2", budgetForm2);

    var foodBudget = parseInt(budgetForm2.groceries) + parseInt(budgetForm2.eatingout);
    console.log("foodBudget", foodBudget);

    var foodBudgetPercent = ((foodBudget * 100) / totalPay).toFixed(2);

    var totalFoodBudget = $("<h3 class='budgetNumPercGrade'>Your total food budget is: <span>$" + foodBudget + "</span></h3>");
    var percentOfBudget = $("<h3 class='budgetNumPercGrade'>Your food budget is <span>" + foodBudgetPercent + "</span>% of your total budget.</h3>");

    var suggestedBudgetPercent = 15;
    var percentDiff = foodBudgetPercent - suggestedBudgetPercent;
    console.log(percentDiff);

    var grade = getGrade(percentDiff);
    console.log(grade);
    var foodGrade = $("<h3 class='budgetNumPercGrade'>Your grade is: <span>" + grade + "</span></h3>");


    // localStorage.setItem("foodGrade", grade);
    localStorage.setItem("foodGrade", grade);



    if (grade === "A+") {
        foodAdvice = advice.food[1];
    } else if (grade === "A-") {
        foodAdvice = advice.food[2].slice(0, 3);
    } else if (grade === "B+") {
        foodAdvice = advice.food[2].slice(0, 6);
    } else if (grade === "B-") {
        foodAdvice = advice.food[2].slice(0, 9);
    } else if (grade === "C+") {
        foodAdvice = advice.food[2].slice(0, 12);
    } else if (grade === "C-") {
        foodAdvice = advice.food[2].slice(0, 15);
    } else if (grade === "D") {
        foodAdvice = advice.food[2].slice(0, 18);
    } else if (grade === "D-") {
        foodAdvice = advice.food[2].slice(0, 21);
    } else {
        foodAdvice = advice.food[2];
    }

    $("#budgetTotal").append(totalFoodBudget);
    $("#budgetPercent").append(percentOfBudget);
    $("#budgetGrade").append(foodGrade);

    if (grade == 'A+') {
        $("#advice").hide();
        $("#aplus").append(foodAdvice);
    } else {
        for (var i = 0; i < foodAdvice.length; i++) {
            $(".list-group").append("<li class='list-group-item'>" + foodAdvice[i] + "</li>");
        }
    }
});

$("#foodGraderBack").on("click", function() {
    window.location.href = "/budgetForm/2";
});

$("#foodGraderNext").on("click", function() {
    window.location.href = "/budgetForm/3";
});