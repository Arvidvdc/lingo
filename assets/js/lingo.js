//variabelen defineren
var gekozenWoord = "A";
var opgegevenWoord;

//eventlistners
document.getElementById("ctrlLetter").addEventListener("click",function(){
    // letter naar variabele
    var opgegevenWoord = document.getElementsByTagName("input")[0].value.toUpperCase();
    // letter contoleren
    if(opgegevenWoord!=gekozenWoord) {
        // letter fout 
        console.log("Letter is fout.");
    } else {
        console.log("Letter is goed.");
        // letter in woord
        // letter op de juiste plaats
    };
});
