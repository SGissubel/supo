$(document).ready(function(){
    var scroll_start = 0;
    var jumbotron = $('.jumbotron');
    var offset = jumbotron.offset();
    var budgetHead = $(".youAreLoggedAs");
    var budgetOffset = budgetHead.offset();
    var yourRezults = $(".yourRezults");
    var yourRezultsOffSet = yourRezults.offset();
    var debtGradeDiv = $(".debtGradeDiv");
    var debtGradeDivOffSet = debtGradeDiv.offset();
    var topSignIn = $(".signinDiv");
    var topSignInOffset = topSignIn.offset();
    var topSignup = $(".signupDiv");
    var topSignupOffset = topSignup.offset();
    var dashHead = $(".dashHead");
    var dashHeadOffSet = dashHead.offset();

    if (jumbotron.length){
        $(document).scroll(function(){
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $(".container-fluid").css('background-color', '#292b2c').css('padding', '0');
            } else {
                $(".container-fluid").css('background-color', 'rgba(41, 43, 44, .1)').css('padding', '1em');                
            }
        });
    }

    if (budgetHead.length){
        $(document).scroll(function(){
            scroll_start = $(this).scrollTop();
            if(scroll_start > budgetOffset.top) {
                $(".container-fluid").css('background-color', '#292b2c').css('padding', '0');
            } else {
                $(".container-fluid").css('background-color', 'rgba(8, 99, 145, 0.3)').css('padding', '1em');                
            }
        });
    }

    if (yourRezults.length){
        $(document).scroll(function(){
            scroll_start = $(this).scrollTop();
            if(scroll_start > yourRezultsOffSet.top) {
                $(".container-fluid").css('background-color', '#292b2c').css('padding', '0');
            } else {
                $(".container-fluid").css('background-color', 'rgba(41, 43, 44, .1)').css('padding', '1em');                
            }
        });
    }

    if (debtGradeDiv.length){
        $(document).scroll(function(){
            scroll_start = $(this).scrollTop();
            if(scroll_start > debtGradeDivOffSet.top) {
                $(".container-fluid").css('background-color', '#292b2c').css('padding', '0');
            } else {
                $(".container-fluid").css('background-color', 'rgba(8, 99, 145, 0.3)').css('padding', '1em');                
            }
        });
    }
    
    if (topSignIn.length){
        $(document).scroll(function(){
            scroll_start = $(this).scrollTop();
            if(scroll_start > topSignInOffset.top) {
                $(".container-fluid").css('background-color', '#292b2c').css('padding', '0');
            } else {
                $(".container-fluid").css('background-color', 'rgba(41, 43, 44, .1)').css('padding', '1em');                
            }
        });
    }
    
    if (topSignup.length){
    $(document).scroll(function(){
        scroll_start = $(this).scrollTop();
        if(scroll_start > topSignupOffset.top) {
            $(".container-fluid").css('background-color', '#292b2c').css('padding', '0');
        } else {
            $(".container-fluid").css('background-color', 'rgba(41, 43, 44, .1)').css('padding', '1em');                
        }
    });
    }
    
    if (dashHead.length){
    $(document).scroll(function(){
        scroll_start = $(this).scrollTop();
        if(scroll_start > dashHeadOffSet.top) {
            $(".container-fluid").css('background-color', '#292b2c').css('padding', '0');
        } else {
            $(".container-fluid").css('background-color', 'rgba(41, 43, 44, .1)').css('padding', '1em');                
        }
    });
    }




});

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    $('.greeting').prepend('<b>' + greet + '</b>,' + " ");
    console.log(greet);


window.onscroll = function() {
    $('.container-fluid').css('padding', '0 !important');
}
