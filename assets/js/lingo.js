// Variabelen defineren
var arrayWoorden = [
    "Ander","Abuis","Baard","Bench","Bende","Boord","Braaf","Braam","Brood","Check","Drank","Draag","Drugs","Faalt","Fabel","Fiets","Files","Graaf","Graan","Graat","Groen","Groot","Hallo",
    "Hecht","Jacht","Jemig","Nooit","Paard","Paars","Plaag","Quota","Schop","Schot","Tabak","Trein","Trouw","Vrouw","Waard","Wagen","Water","Woord","Zagen","Zomer","Zucht","Zwart"
],
    gekozenWoord = [],
    invoerPositie = 1;
    
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
    for(i=0;i<5;i++){
        var ingevoerdeLetter = ingevoerdWoord[i]
        verwijderClasses(i); // Dank je Thirza voor het vinden van de bug!!!
        if(ingevoerdeLetter != gekozenWoord[i]){
            // Letter niet overeenkomend. Verdere controle
            for(var j=1;j<5;j++) {
                if(ingevoerdeLetter == gekozenWoord[j]) {
                    // Letter wel in het woord, niet de juiste plaats
                    document.getElementsByTagName("input")[i].classList.add("letterInWoord");
                    // Letter wel in het woord maar letter reeds goed gegeven: gekozenWoord=groen / ingevoerdWoord= grEep (1e E)
                    // Letter wel in het woord maar letter komt vaker voor: gekozenWoord=woord / ingevoerdWoord= bOten ?????
                } else {
                    // Letter niet in het woord
                    document.getElementsByTagName("input")[i].classList.add("letterFout");
                };
            };
        } else if(ingevoerdeLetter == gekozenWoord[i]){
            // Letter op de juiste plaats
            document.getElementsByTagName("input")[i].classList.add("letterGoed");
        };
    };
};

// Naar de volgende letter gaan.
$("input").keyup(function () {
    var index = $(this).index("input");		 	
    $("input:eq(" + (invoerPositie +1) + ")").focus();
    invoerPositie ++;
 });

 //Random word generator for Hangman
function woordKiezer()  {
    return arrayWoorden[Math.floor(Math.random()*arrayWoorden.length)];
};

// Toetsenbord
function letterInvoeren(str){
    document.getElementsByTagName("input")[invoerPositie].value=str;
    invoerPositie ++;
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