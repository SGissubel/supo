$(document).ready(function() {


    $('#collapseAdvice').collapse("hide");


    var budgetForm7 = JSON.parse(localStorage.getItem("budgetForm7"));
    console.log("budgetForm7", budgetForm7);

    var otherMedical1;
    var otherMedical2;
    var otherMedical3;

    if (budgetForm7.otherMedical1 === undefined) {
        otherMedical1 = 0;
    } else otherMedical1 = parseInt(budgetForm7.otherMedical1);

    if (budgetForm7.otherMedical2 === undefined) {
        otherMedical2 = 0;
    } else otherMedical2 = parseInt(budgetForm7.otherMedical2);

    if (budgetForm7.otherMedical3 === undefined) {
        otherMedical3 = 0;
    } else otherMedical3 = parseInt(budgetForm7.otherMedical3);

    var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
    console.log("budgetForm", budgetForm);

    var totalPay = parseInt(budgetForm.totalPay);
    console.log("totalPay", totalPay);

    var budgetForm7 = JSON.parse(localStorage.getItem("budgetForm7"));
    console.log("budgetForm7", budgetForm7);

    var medicalBudget = parseInt(budgetForm7.medications) + parseInt(budgetForm7.doctorBills) + parseInt(budgetForm7.hospitalBills) + otherMedical1 + otherMedical2 + otherMedical3;

    console.log("medicalBudget", medicalBudget);

    var medicalBudgetPercent = ((medicalBudget * 100) / totalPay).toFixed(2);

	var totalMedicalBudget = $("<h3 class='budgetNumPercGrade'>Your total medical budget is: <span>$" + medicalBudget + "</span></h3>");
	var percentOfBudget = $("<h3 class='budgetNumPercGrade'>Your medical budget is <span>" + medicalBudgetPercent + "%</span> of your total budget.</h3>");


    var suggestedBudgetPercent = 10;

    var percentDiff = medicalBudgetPercent - suggestedBudgetPercent;
    console.log(percentDiff);

    var grade = getGrade(percentDiff);
    console.log(grade);
	var medicalGrade = $("<h3 class='budgetNumPercGrade'>Your grade is: <span>" + grade + "</span></h3>");
    localStorage.setItem("medicalGrade", grade);

    let medicalAdvice;


    if (grade === "A+") {
        medicalAdvice = advice.medical[1];
    } else if (grade === "A-") {
        medicalAdvice = advice.medical[2].slice(0, 2);
    } else if (grade === "B+") {
        medicalAdvice = advice.medical[2].slice(0, 4);
    } else if (grade === "B-") {
        medicalAdvice = advice.medical[2].slice(0, 6);
    } else if (grade === "C+") {
        medicalAdvice = advice.medical[2].slice(0, 8);
    } else if (grade === "C-") {
        medicalAdvice = advice.medical[2].slice(0, 10);
    } else if (grade === "D") {
        medicalAdvice = advice.medical[2].slice(0, 12);
    } else if (grade === "D-") {
        medicalAdvice = advice.medical[2].slice(0, 14);
    } else {
        medicalAdvice = advice.medical[2];
    }

    $("#budgetTotal").append(totalMedicalBudget);
    $("#budgetPercent").append(percentOfBudget);
    $("#budgetGrade").append(medicalGrade);

    if (grade == 'A+') {
        $("#advice").hide();
        $("#aplus").append(medicalAdvice);
    } else {
        for (var i = 0; i < medicalAdvice.length; i++) {
            $(".list-group").append("<li class='list-group-item'>" + medicalAdvice[i] + "</li>");
        }
    }

});

$("#medicalGraderBack").on("click", function() {
    window.location.href = "/budgetForm/7";
});

$("#medicalGraderNext").on("click", function() {
    window.location.href = "/budgetForm/8";
});