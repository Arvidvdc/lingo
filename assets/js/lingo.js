// Variabelen defineren
var arrayWoorden = [
    "Ander","Abuis","Baard","Bench","Bende","Boord","Braaf","Braam","Brood","Check","Drank","Draag","Drugs","Faalt","Fabel","Fiets","Files","Graaf","Graan","Graat","Groen","Groot","Hallo",
    "Hecht","Jacht","Jemig","Nooit","Paard","Paars","Plaag","Quota","Schop","Schot","Tabak","Trein","Trouw","Vrouw","Waard","Wagen","Water","Woord","Zagen","Zomer","Zucht","Zwart"
],
    gekozenWoord = [], // Woord om te raden
    invoerPositie = 1, // Bijhouden welk invoerveld actief is
    maximalePogingen = 5, // Maximaal aantal beurten voor het raden van het woord
    aantalPogingen = 1, // Aantal pogingen bijhouden
    lettersGoed = 0; // Aantal letters goed

    
//Kiezen willekeurig woord
var tijdelijkWoord = woordKiezer(); //Standaard routine
// var tijdelijkWoord="woord" //Alternatieve routine voor testen

for(var i=0;i<tijdelijkWoord.length;i++){
    gekozenWoord.push(tijdelijkWoord.split("")[i].toUpperCase());
};

// Eerste letter toevoegen aan speelbord
document.getElementsByClassName("huidigeInvoer")[0].value=gekozenWoord[0];

// Toepassen css op eerste letter
document.getElementsByClassName("huidigeInvoer")[0].classList.add("letterGoed");

//Focus naar volgende invoer element
document.getElementsByClassName("huidigeInvoer")[invoerPositie].focus();

// Woord controleren
function controleWoord(){
    // Gekozen letters naar array
    var ingevoerdWoord = [];
    for(i=0;i<5;i++) {
        ingevoerdWoord.push(document.getElementsByClassName("huidigeInvoer")[i].value.toUpperCase());
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
    if(lettersGoed<5){
        if(aantalPogingen<maximalePogingen) {
            nieuweBeurt();
            aantalPogingen++;
        } else {
            document.getElementById("resultaat").innerText="Helaas het juiste woord is " + tijdelijkWoord.toUpperCase();
            document.getElementById("reload").disabled=false;
        }
    } else {
        document.getElementById("resultaat").innerText="Perfect u heeft het woord geraden!";
        document.getElementById("reload").disabled=false;
    };
};

// Naar de volgende letter gaan.
$("input").keyup(function () {
    var index = $(this).index("input");		 	
    $("input:eq(" + (index +1) + ")").focus().select();
    invoerPositie=index+1
 });


 // Woordkiezer uit de array
function woordKiezer()  {
    return arrayWoorden[Math.floor(Math.random()*arrayWoorden.length)];
    // Bronvermelding Marten Blaauw's Galgje (https://github.com/mcblaauw/Galgje)
};

function letterCorrectie() {
    document.getElementsByClassName("huidigeInvoer")[ invoerPositie- 1].value="";
    $("input:eq(" + (invoerPositie - 1) + ")").focus().select();
    invoerPositie --;
};

function verwijderClasses(num) {
    document.getElementsByClassName("huidigeInvoer")[num].classList.remove("letterInWoord");
    document.getElementsByClassName("huidigeInvoer")[num].classList.remove("letterGoed");
    document.getElementsByClassName("huidigeInvoer")[num].classList.remove("letterFout");
};

function letterGoed(positie) {
    document.getElementsByClassName("huidigeInvoer")[positie].classList.add("letterGoed");
    lettersGoed ++;
};

function letterFout(positie) {
    document.getElementsByClassName("huidigeInvoer")[positie].classList.add("letterFout");
};

function nieuweBeurt() {
    // Rij en kolommen opmaken
    let row = document.createElement("div");
    let colom = document.createElement("div")
    row.classList.add("justify-content-center");
    colom.classList.add("col-md-12", "align-self-center", "text-center");
    
    // Letters overzetten
    for(var i=0;i<5;i++){
        let oudeBeurt=document.createElement('input');
        let actieveLetter=document.getElementsByClassName("huidigeInvoer")[i]
        oudeBeurt.classList.add("letterNormaal");
        oudeBeurt.disabled=true;
        oudeBeurt.maxLength=1;
        oudeBeurt.type="text";
        oudeBeurt.value=actieveLetter.value;
        oudeBeurt.classList=actieveLetter.classList;
        oudeBeurt.classList.remove("huidigeInvoer");
        colom.appendChild(oudeBeurt);
        row.appendChild(colom);
        if(actieveLetter.classList.contains("letterGoed")==false){
            verwijderClasses(i);
            actieveLetter.value="";
            actieveLetter.classList.add("letterNormaal")
        };
    };

    // Nieuwe div toevoegen
    document.getElementById("speelbord").appendChild(row);
    
    // Naar de juiste invoer gaan
    document.getElementsByClassName("huidigeInvoer")[1].focus().select();
}