//variabelen defineren
var gekozenWoord = ["A","B","C","D","E"];
var opgegevenWoord = [];
var arrayWoorden = ["Water","Woord","Groen","Jacht","Graaf","Fiets","Trein","Wagen","Boord","Braam","Vrouw","Nooit","Groot","Brood","Drank","Braaf","Draag","Liefde","Paars","Waard","Plaag","Paard","Baard","Drugs","Bende","Zwart","Schot","Schop","Bench","Trouw","Ander","Check"]

// Bij laden van de pagina direct focus naar eerste input element.
document.getElementsByTagName("input")[0].focus();

//eventlistners

//controle letter
document.getElementById("ctrlLetter").addEventListener("click",function(){
    // letters naar array
    for(i=0;i<5;i++) {
        opgegevenWoord.push(document.getElementsByTagName("input")[i].value.toUpperCase());
    };

    // woord contoleren
    for(i=0;i<5;i++){
        if(opgegevenWoord[i]!=gekozenWoord[i]){
            // Als letter in woord, dan class toekennen anders niets doen
            console.log(gekozenWoord)
            if(gekozenWoord.indexOf(opgegevenWoord[i]==-1)){
                console.log("Letter NIET in het woord.");
                document.getElementsByTagName("input")[i].classList.add("letterNormaal");
            } else {
                console.log("Letter in het woord.");
                document.getElementsByTagName("input")[i].classList.add("letterInWoord");
            }
        } else if(opgegevenWoord[i]==gekozenWoord[i]){
            // letter in woord
            console.log("Letter op de juiste plaats.");
            document.getElementsByTagName("input")[i].classList.add("letterGoed");
        } else {
            // letter op de juiste plaats
            console/log("ELSE")
        };
    };
});

// naar de tweede letter gaan.
document.getElementsByTagName("input")[0].addEventListener("input",function(){
    document.getElementsByTagName("input")[1].focus();
});