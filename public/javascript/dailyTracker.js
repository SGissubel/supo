var month;

$(document).ready(function() {
    var currentBudget = 0;
    var currentDataBudgetID;
    var expenses;

    var monthArray = new Array();
    monthArray[0] = "January";
    monthArray[1] = "February";
    monthArray[2] = "March";
    monthArray[3] = "April";
    monthArray[4] = "May";
    monthArray[5] = "June";
    monthArray[6] = "July";
    monthArray[7] = "August";
    monthArray[8] = "September";
    monthArray[9] = "October";
    monthArray[10] = "November";
    monthArray[11] = "December";

    var date = new Date();
    month = monthArray[date.getMonth()];

    $('#monthToday').html(month);

    $.get("/expensedata", function(budgetData) {
        console.log(budgetData)
        var budgetSelect = $('<select class="form-control budgetCompareSelector">');
        budgetSelect.append("<option>Choose One Of Your Budgets</option");
        for (var i = 0; i < budgetData.length; i++) {
            budgetSelect.append($("<option></option>", {
                value: budgetData[i].id,
                text: budgetData[i].name
            }));
            // $("#foodBudget").html(budgetData[i].foodTotal);
        }
        $("#currentBudgetName").append(budgetSelect);
    });

    $(document).on('change', '.budgetCompareSelector', function() {
        //use value below (budget id) - to store all of the data from that budget into currentBudget variable;

        var budgetDataHolder;
        var subBudgetTotals = {};

        //-----------! IMPORTANT !-----------//
        $("#foodCategory").empty();
        $("#foodBudgetRemainder").empty();
        $("#clothingCategory").empty();
        $("#clothingBudgetRemainder").empty();
        $("#utilitiesCategory").empty();
        $("#utilitiesBudgetRemainder").empty();
        $("#housingCategory").empty();
        $("#housingBudgetRemainder").empty();
        $("#savingsCategory").empty();
        $("#savingsBudgetRemainder").empty();
        $("#medicalCategory").empty();
        $("#medicalBudgetRemainder").empty();
        $("#insuranceCategory").empty();
        $("#insuranceBudgetRemainder").empty();
        $("#transportationCategory").empty();
        $("#transportationBudgetRemainder").empty();
        $("#personalCategory").empty();
        $("#personalBudgetRemainder").empty();
        $("#entertainmentCategory").empty();
        $("#entertainmentBudgetRemainder").empty();
        $("#debtCategory").empty();
        $("#debtBudgetRemainder").empty();
        //We need to empty the accordian here so on change it refreshes the html//
        //Otherwise you can change budgets and it'll just keep adding to the drop down and mush things together//

        console.log($('.budgetCompareSelector').val());
        $.get("/expensedata", function(budgetData) {
            var budgetId = $('.budgetCompareSelector').val();
            console.log("BUDGETID: ", budgetId);
            currentDataBudgetID = budgetId;
            budgetDataHolder = budgetData;
            console.log("CurrentB: " + currentBudget);

            for (var i = 0; i < budgetData.length; i++) {
                if (budgetData[i].id == budgetId) {
                    console.log(budgetData[i]);
                    currentBudget = budgetData[i];
                    $("#foodBudget").html(currentBudget.foodTotal);
                    subBudgetTotals.foodTotal = currentBudget.foodTotal;
                    $("#clothingBudget").html(currentBudget.clothingTotal);
                    subBudgetTotals.clothingTotal = currentBudget.clothingTotal;
                    $("#utilitiesBudget").html(currentBudget.utilitiesTotal);
                    subBudgetTotals.utilitiesTotal = currentBudget.utilitiesTotal;
                    $("#housingBudget").html(currentBudget.housingTotal);
                    subBudgetTotals.housingTotal = currentBudget.housingTotal;
                    $("#savingsBudget").html(currentBudget.savingsTotal);
                    subBudgetTotals.savingsTotal = currentBudget.savingsTotal;
                    $("#medicalBudget").html(currentBudget.medicalTotal);
                    subBudgetTotals.medicalTotal = currentBudget.medicalTotal;
                    $("#insuranceBudget").html(currentBudget.InsuranceTotal);
                    subBudgetTotals.insuranceTotal = currentBudget.InsuranceTotal;
                    $("#transportationBudget").html(currentBudget.transportationTotal);
                    subBudgetTotals.transportationTotal = currentBudget.transportationTotal;
                    $("#personalBudget").html(currentBudget.personalTotal);
                    subBudgetTotals.personalTotal = currentBudget.personalTotal;
                    $("#entertainmentBudget").html(currentBudget.entertainmentTotal);
                    subBudgetTotals.entertainmentTotal = currentBudget.entertainmentTotal;
                    $("#debtBudget").html(currentBudget.debtTotal);
                    subBudgetTotals.debtTotal = currentBudget.debtTotal;
                }
            }
        });

        $.get("/allexpenseresults", function(expenses) {
            console.log("Current Budget ID: " + currentDataBudgetID);
            console.log("BUDGET DATA JEFF: ", budgetDataHolder);
            console.log("SUBBUDGET TOTALS JEFF: ", subBudgetTotals);

            var foodExpenseTotal = 0;
            var foodBudget = subBudgetTotals.foodTotal;
            var clothingExpenseTotal = 0;
            var clothingBudget = subBudgetTotals.clothingTotal;
            var utilitiesExpenseTotal = 0;
            var utilitiesBudget = subBudgetTotals.utilitiesTotal;
            var housingExpenseTotal = 0;
            var housingBudget = subBudgetTotals.housingTotal;
            var savingsExpenseTotal = 0;
            var savingsBudget = subBudgetTotals.savingsTotal;
            var medicalExpenseTotal = 0;
            var medicalBudget = subBudgetTotals.medicalTotal;
            var insuranceExpenseTotal = 0;
            var insuranceBudget = subBudgetTotals.insuranceTotal;
            var transportationExpenseTotal = 0;
            var transportationBudget = subBudgetTotals.transportationTotal;
            var personalExpenseTotal = 0;
            var personalBudget = subBudgetTotals.personalTotal;
            var entertainmentExpenseTotal = 0;
            var entertainmentBudget = subBudgetTotals.entertainmentTotal;
            var debtExpenseTotal = 0;
            var debtBudget = subBudgetTotals.debtTotal;

            var dateObj = new Date();
            var month = dateObj.getMonth() + 1; //months from 1-12
            var day = dateObj.getDate();
            var year = dateObj.getFullYear();

            newdate = month + "/" + day + "/" + year ;

            for (var i = 0; i < expenses.length; i++) {
                console.log("Expense Loop: " + expenses[i]);
                console.log("EXPENSES: " + expenses[i].BudgetId);
                console.log("Current Budget ID: " + currentDataBudgetID);

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "food") {
                    foodExpenseTotal += expenses[i].expenseAmount;

                    $("#foodCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": $" + expenses[i].expenseAmount + ".00 " + newdate + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "clothing") {
                    clothingExpenseTotal += expenses[i].expenseAmount;

                    $("#clothingCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": $" + expenses[i].expenseAmount + ".00 " + newdate + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "utilities") {
                    utilitiesExpenseTotal += expenses[i].expenseAmount;

                    $("#utiltiesCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": $" + expenses[i].expenseAmount + ".00 " + newdate + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "housing") {
                    housingExpenseTotal += expenses[i].expenseAmount;

                    $("#housingCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": $" + expenses[i].expenseAmount + ".00 " + newdate + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "savings") {
                    savingsExpenseTotal += expenses[i].expenseAmount;

                    $("#savingsCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": $" + expenses[i].expenseAmount + ".00 " + newdate + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "medical") {
                    medicalExpenseTotal += expenses[i].expenseAmount;

                    $("#medicalCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": $" + expenses[i].expenseAmount + ".00 " + newdate + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "insurance") {
                    insuranceExpenseTotal += expenses[i].expenseAmount;

                    $("#insuranceCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": $" + expenses[i].expenseAmount + ".00 " + newdate + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "transportation") {
                    clothingExpenseTotal += expenses[i].expenseAmount;

                    $("#transportationCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": $" + expenses[i].expenseAmount + ".00 " + newdate + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "personal") {
                    personalExpenseTotal += expenses[i].expenseAmount;

                    $("#personalCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": $" + expenses[i].expenseAmount + ".00 " + newdate + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "entertainment") {
                    entertainmentExpenseTotal += expenses[i].expenseAmount;

                    $("#entertainmentCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": $" + expenses[i].expenseAmount + ".00 " + newdate + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "debt") {
                    debtExpenseTotal += expenses[i].expenseAmount;

                    $("#debtCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": $" + expenses[i].expenseAmount + ".00 " + newdate + "</li>");
                }
            };

            var foodRemainder = foodBudget - foodExpenseTotal;
            $("#foodBudgetRemainder").append(foodRemainder);
            console.log(foodRemainder/foodBudget);
            if (((foodRemainder/foodBudget) >= .80) && ((foodRemainder/foodBudget) < 1))  {
                $("#foodPanelHeading").css("background-color", "yellow");
            }else if ((foodRemainder/foodBudget) <= .79) {
                $("#foodPanelHeading").css("background-color", "red");
            }else {
                $("#foodPanelHeading").css("background-color", "#23ABF");
            }

            var clothingRemainder = clothingBudget - clothingExpenseTotal;
            $("#clothingBudgetRemainder").append(clothingRemainder);
            if (((clothingRemainder/clothingBudget) >= .80) && ((clothingRemainder/clothingBudget) < 1))  {
                $("#clothingPanelHeading").css("background-color", "yellow");
            }else if ((clothingRemainder/clothingBudget) <= .79) {
                $("#clothingPanelHeading").css("background-color", "red");
            }else {
                $("#clothingPanelHeading").css("background-color", "#23ABF");
            }

            var utilitiesRemainder = utilitiesBudget - utilitiesExpenseTotal;
            $("#utilitiesBudgetRemainder").append(utilitiesRemainder);
            if (((utilitiesRemainder/utilitiesBudget) >= .80) && ((utilitiesRemainder/utilitiesBudget) < 1))  {
                $("#utilitiesPanelHeading").css("background-color", "yellow");
            }else if ((utilitiesRemainder/utilitiesBudget) <= .79) {
                $("#utilitiesPanelHeading").css("background-color", "red");
            }else {
                $("#utilitiesPanelHeading").css("background-color", "#23ABF");
            }

            var housingRemainder = housingBudget - housingExpenseTotal;
            $("#housingBudgetRemainder").append(housingRemainder);
           if (((housingRemainder/housingBudget) >= .80) && ((housingRemainder/housingBudget) < 1))  {
                $("#housingPanelHeading").css("background-color", "yellow");
            }else if ((housingRemainder/housingBudget) <= .79) {
                $("#housingPanelHeading").css("background-color", "red");
            }else {
                $("#housingPanelHeading").css("background-color", "#23ABF");
            }

            var savingsRemainder = savingsBudget - savingsExpenseTotal;
            $("#savingsBudgetRemainder").append(savingsRemainder);
           if (((savingsRemainder/savingsBudget) >= .80) && ((savingsRemainder/savingsBudget) < 1))  {
                $("#savingsPanelHeading").css("background-color", "yellow");
            }else if ((savingsRemainder/savingsBudget) <= .79) {
                $("#savingsPanelHeading").css("background-color", "red");
            }else {
                $("#savingsPanelHeading").css("background-color", "#23ABF");
            }

            var medicalRemainder = medicalBudget - medicalExpenseTotal;
            $("#medicalBudgetRemainder").append(medicalRemainder);
            if (((medicalRemainder/medicalBudget) >= .80) && ((medicalRemainder/medicalBudget) < 1))  {
                $("#medicalPanelHeading").css("background-color", "yellow");
            }else if ((medicalRemainder/medicalBudget) <= .79) {
                $("#medicalPanelHeading").css("background-color", "red");
            }else {
                $("#medicalPanelHeading").css("background-color", "#23ABF");
            }

            var insuranceRemainder = insuranceBudget - insuranceExpenseTotal;
            $("#insuranceBudgetRemainder").append(insuranceRemainder);
            if (((insuranceRemainder/insuranceBudget) >= .80) && ((insuranceRemainder/insuranceBudget) < 1))  {
                $("#insurancePanelHeading").css("background-color", "yellow");
            }else if ((insuranceRemainder/insuranceBudget) <= .79) {
                $("#insurancePanelHeading").css("background-color", "red");
            }else {
                $("#insurancePanelHeading").css("background-color", "#23ABF");
            }

            var transportationRemainder = transportationBudget - transportationExpenseTotal;
            $("#transportationBudgetRemainder").append(transportationRemainder);
            if (((transportationRemainder/transportationBudget) >= .80) && ((transportationRemainder/transportationBudget) < 1))  {
                $("#transportationPanelHeading").css("background-color", "yellow");
            }else if ((transportationRemainder/transportationBudget) <= .79) {
                $("#transportationPanelHeading").css("background-color", "red");
            }else {
                $("#transportationPanelHeading").css("background-color", "#23ABF");
            }

            var personalRemainder = personalBudget - personalExpenseTotal;
            $("#personalBudgetRemainder").append(personalRemainder);
            if (((personalRemainder/personalBudget) >= .80) && ((personalRemainder/personalBudget) < 1))  {
                $("#personalPanelHeading").css("background-color", "yellow");
            }else if ((personalRemainder/personalBudget) <= .79) {
                $("#personalPanelHeading").css("background-color", "red");
            }else {
                $("#personalPanelHeading").css("background-color", "#23ABF");
            }

            var entertainmentRemainder = entertainmentBudget - entertainmentExpenseTotal;
            $("#entertainmentBudgetRemainder").append(entertainmentRemainder);
            if (((entertainmentRemainder/entertainmentBudget) >= .80) && ((entertainmentRemainder/entertainmentBudget) < 1))  {
                $("#entertainmentPanelHeading").css("background-color", "yellow");
            }else if ((entertainmentRemainder/entertainmentBudget) <= .79) {
                $("#entertainmentPanelHeading").css("background-color", "red");
            }else {
                $("#entertainmentPanelHeading").css("background-color", "#23ABF");
            }

            var debtRemainder = debtBudget - debtExpenseTotal;
            $("#debtBudgetRemainder").append(debtRemainder);
            if (((debtRemainder/debtBudget) >= .80) && ((debtRemainder/debtBudget) < 1))  {
                $("#debtPanelHeading").css("background-color", "yellow");
            }else if ((debtRemainder/debtBudget) <= .79) {
                $("#debtPanelHeading").css("background-color", "red");
            }else {
                $("#debtPanelHeading").css("background-color", "#23ABF");
            }
        });
    });
});

$("#expenseSubmit").on("click", function() {
    var expenseData = {
        month: month,
        category: $("#category").val(),
        expenseName: $("#expenseName").val(),
        expenseAmount: $("#expenseAmount").val()
    };

    console.log("expenseData", expenseData);

    $.post("/expenseData", expenseData).then(function(response) {
        console.log("POSTED");
    });
    window.location.reload(false);

    $.get("/allexpenseresults", function(expenseResults) {
        console.log(expenseResults);
    });
});