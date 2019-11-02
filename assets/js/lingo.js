// Variabelen defineren
var arrayWoorden = [
    "Ander","Abuis","Baard","Bench","Bende","Boord","Braaf","Braam","Brood","Check","Drank","Draag","Drugs","Faalt","Fabel","Fiets","Files","Graaf","Graan","Graat","Groen","Groot","Hallo",
    "Hecht","Jacht","Jemig","Nooit","Paard","Paars","Plaag","Quota","Schop","Schot","Tabak","Trein","Trouw","Vrouw","Waard","Wagen","Water","Woord","Zagen","Zomer","Zucht","Zwart"
],
    gekozenWoord = [], // Woord om te raden
    invoerPositie = 1, // Bijhouden welk invoerveld actief is
    maximalePogingen = 1, // Maximaal aantal beurten voor het raden van het woord
    aantalPogingen = 1, // Aantal pogingen bijhouden
    lettersGoed = 0; // Aantal letters goed

    
//Kiezen willekeurig woord
var tijdelijkWoord = woordKiezer(); //Standaard routine
// var tijdelijkWoord="woord" //Alternatieve routine voor testen
for(var i=0;i<tijdelijkWoord.length;i++){
    gekozenWoord.push(tijdelijkWoord.split("")[i].toUpperCase());
}

// Eerste letter toevoegen aan speelbord
document.getElementsByTagName("input")[0].value=gekozenWoord[0];

// Toepassen css op eerste letter
document.getElementsByTagName("input")[0].classList.add("letterGoed");

//Focus naar volgende invoer element
document.getElementsByTagName("input")[invoerPositie].focus();

// Woord controleren
function controleWoord(){
    // Gekozen letters naar array
    var ingevoerdWoord = [];
    for(i=0;i<5;i++) {
        ingevoerdWoord.push(document.getElementsByTagName("input")[i].value.toUpperCase());
    };

    // Contole loop
    lettersGoed = 0;
    for(i=0;i<5;i++){
        var ingevoerdeLetter = ingevoerdWoord[i];
        verwijderClasses(i); // Dank je Thirza voor het vinden van de bug!!!
        if(ingevoerdeLetter == gekozenWoord[i]){
            letterGoed(i);
        } else {
            // Letter op de juiste plaats
            letterFout(i);
        };
    };
    // Controle aantal speelbeurten
    if(aantalPogingen=maximalePogingen) {
        if(lettersGoed<5){
            document.getElementById("resultaat").innerText="Helaas het juiste woord is " + tijdelijkWoord.toUpperCase();
        } else {
            document.getElementById("resultaat").innerText="Perfect u heeft het woord geraden!";
        };
    };
};

// Naar de volgende letter gaan.
$("input").keyup(function () {
    var index = $(this).index("input");		 	
    $("input:eq(" + (invoerPositie +1) + ")").focus();
    invoerPositie ++;
 });

 // Woordkiezer uit de array
function woordKiezer()  {
    return arrayWoorden[Math.floor(Math.random()*arrayWoorden.length)];
    // Bronvermelding Marten Blaauw's Galgje (https://github.com/mcblaauw/Galgje)
};

function letterCorrectie() {
    document.getElementsByTagName("input")[invoerPositie - 1].value="";
    invoerPositie --;
};

function verwijderClasses(num) {
    document.getElementsByTagName("input")[num].classList.remove("letterInWoord");
    document.getElementsByTagName("input")[num].classList.remove("letterGoed");
    document.getElementsByTagName("input")[num].classList.remove("letterFout");
};

function letterGoed(positie) {
    document.getElementsByTagName("input")[positie].classList.add("letterGoed");
    lettersGoed ++;
};

function letterFout(positie) {
    document.getElementsByTagName("input")[positie].classList.add("letterFout");
};