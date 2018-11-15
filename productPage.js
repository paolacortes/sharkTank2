$("#homeBTN").on("click", function(){
document.querySelector("#homeContainer").scrollIntoView({
  behavior: "smooth"
});
});

$("#aboutBTN").on("click", function(){
document.querySelector("#aboutContainer").scrollIntoView({
  behavior: "smooth"
});
});

$("#productBTN").on("click", function(){
document.querySelector("#productContainer").scrollIntoView({
  behavior: "smooth"
});
});;

$("#demoBTN").on("click", function(){
document.querySelector("#demoContainer").scrollIntoView({
  behavior: "smooth"
});
});

// Code for demo

$(document).ready(function() {
    console.log( "Loaded." );
});
var dat;
var res;
var per;
var mea;
var con;
var totalValue;
var collection = [dat, res, per, mea, con];

$('#submit').click(function() {
    dat = $('#management').val();
    res = $('#resilience').val();
    per = $('#performance').val();
    mea = $('#measurement').val();
    con = $('#continuous').val();

    complete();
});

function dswitch() {
    dat = dat.toString();
    switch (dat) {//data
        case "1":
            document.getElementById("data").innerHTML = "Your A.I.'s infrastructure is a train wreck.";
            console.log("Worked!");
            break;
        case "2":
            document.getElementById("data").innerHTML = "Your A.I.'s infrastructure looks like a preschooler made it.";
            console.log("Worked!");
            break;
        case "3":
            document.getElementById("data").innerHTML = "Your A.I.'s infrastructure is that of an amateur coder's.";
            console.log("Worked!");
            break;
        case "4":
            document.getElementById("data").innerHTML = "Your A.I.'s infrastructure is pretty well thought out.";
            console.log("Worked!");
            break;
        case "5":
            document.getElementById("data").innerHTML = "Your A.I.'s infrastructure is so organized, you can easily make modifications without breaking anything.";
            console.log("Worked!");
            break;
    };
};
function rswitch() {
    res = res.toString();
    switch (res) {//resilience
        case "1":
            document.getElementById("resilient").innerHTML = "Your A.I. relies on data models that don't deserve to be called models.";
            console.log("Worked!");
            break;
        case "2":
            document.getElementById("resilient").innerHTML = "Your A.I. requires you to search for specific data models.";
            console.log("Worked!");
            break;
        case "3":
            document.getElementById("resilient").innerHTML = "Your A.I. can search for models when given specific inputs.";
            console.log("Worked!");
            break;
        case "4":
            document.getElementById("resilient").innerHTML = "Your A.I. can search for the latest data models when necessary.";
            console.log("Worked!");
            break;
        case "5":
            document.getElementById("resilient").innerHTML = "Your A.I. can design new accurate data models for itself.";
            console.log("Worked!");
            break;
    };
};
function pswitch() {
    per = per.toString();
    switch (per) {//performance
        case "1":
            document.getElementById("perform").innerHTML = "Your A.I. would take an eternity to compute a simple math problem and still get it wrong.";
            console.log("Worked!");
            break;
        case "2":
            document.getElementById("perform").innerHTML = "Your A.I. wasn't always the fastest, but it could still get the job done.";
            console.log("Worked!");
            break;
        case "3":
            document.getElementById("perform").innerHTML = "Your A.I. can perform at a reasonable pace.";
            console.log("Worked!");
            break;
        case "4":
            document.getElementById("perform").innerHTML = "Your A.I. is quite fast at computing.";
            console.log("Worked!");
            break;
        case "5":
            document.getElementById("perform").innerHTML = "Your A.I. can solve even the most complicated formulas in a manner of nanoseconds.";
            console.log("Worked!");
            break;
    };
};
function mswitch() {
    measure = mea.toString();
    switch (mea) {//measurement
        case "1":
            document.getElementById("measure").innerHTML = "Your A.I. isn't accustomed to handling data at all.";
            console.log("Worked!");
            break;
        case "2":
            document.getElementById("measure").innerHTML = "Your A.I. can only handle a few bytes of data.";
            console.log("Worked!");
            break;
        case "3":
            document.getElementById("measure").innerHTML = "Your A.I. can handle a few megabytes of data.";
            console.log("Worked!");
            break;
        case "4":
            document.getElementById("measure").innerHTML = "Your A.I. can handle very sophisticated data.";
            console.log("Worked!");
            break;
        case "5":
            document.getElementById("measure").innerHTML = "Your A.I. can handle big data with no problem.";
            console.log("Worked!");
            break;
    };
};
 function cswitch() {
     con = con.toString();
     switch (con) {//continuous
         case "1":
             document.getElementById("continue").innerHTML = "Your A.I. would break at the sight of new data";
             console.log("Worked!");
             break;
         case "2":
             document.getElementById("continue").innerHTML = "Your A.I. requires significant changes to handle new data";
             console.log("Worked!");
             break;
         case "3":
             document.getElementById("continue").innerHTML = "Your A.I. can handle new data with a few changes.";
             console.log("Worked!");
             break;
         case "4":
             document.getElementById("continue").innerHTML = "Your A.I. can handle new data quite well.";
             console.log("Worked!");
             break;
         case "5":
             document.getElementById("continue").innerHTML = "Your A.I. would have already found a way to integrate that new data before you.";
             console.log("Worked!");
             break;
     };
 };

function switchFunctions() {
    dswitch();
    rswitch();
    pswitch();
    mswitch();
    cswitch();
};

function complete() {
    totalValue = Number(dat) + Number(res) + Number(per) + Number(mea) + Number(con);
    console.log(totalValue);
    if (totalValue > 20) {
        alert("It looks like you overspent your resources, spend less.")
    } else {
        switchFunctions();
        $('#result-texts').animate({opacity: "1.0"}, 1500, "swing");
    };
};
