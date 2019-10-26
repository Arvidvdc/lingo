// Variabelen defineren
var arrayWoorden = [
    "Water","Woord","Groen","Jacht","Graaf","Fiets","Trein","Wagen","Boord","Braam","Vrouw","Nooit","Groot","Brood","Drank","Braaf","Draag","Liefde","Paars",
    "Waard","Plaag","Paard","Baard","Drugs","Bende","Zwart","Schot","Schop","Bench","Trouw","Ander","Check","Graat","Graan"
];
var gekozenWoord = [];

//Kiezen willekeurig woord
var tijdelijkWoord = woordKiezer();
for(var i=0;i<tijdelijkWoord.length;i++){
    gekozenWoord.push(tijdelijkWoord.split("")[i].toUpperCase());
}
document.getElementsByTagName("input")[0].value=gekozenWoord[0];
document.getElementsByTagName("input")[1].focus();
console.log("Gekozen woord: "+gekozenWoord);

//Controle letter
document.getElementById("ctrlLetter").addEventListener("click",function(){
    // Gekozen letters naar array
    var opgegevenWoord = [];
    for(i=0;i<5;i++) {
        opgegevenWoord.push(document.getElementsByTagName("input")[i].value.toUpperCase());
    };

    // Woord contoleren
    for(i=0;i<5;i++){
        var opgegevenLetter = opgegevenWoord[i]
        if(opgegevenLetter != gekozenWoord[i]){
            // Letter niet overeenkomend. Verdere controle
            for(var j=1;j<5;j++) {
                console.log("i= " +i +" - " +"j= " +j);
                console.log(opgegevenLetter +" - " +gekozenWoord[j]);
                // console.log("Letter in het woord.");
                if(opgegevenLetter == gekozenWoord[j]) {
                    // Letter wel in het woord, niet de juiste plaats
                    document.getElementsByTagName("input")[i].classList.add("letterInWoord");
                    // Letter wel in het woord maar letter reeds goed gegeven: gekozenWoord=groen / opgegevenWoord= grEep (1e E)
                    // Letter wel in het woord maar letter komt vaker voor: gekozenWoord=woord / opgegevenWoord= bOten
                } else {
                    // Letter niet in het woord
                    document.getElementsByTagName("input")[i].classList.add("letterNormaal");
                };
                
            };
        } else if(opgegevenLetter == gekozenWoord[i]){
            // Letter op de juiste plaats
            document.getElementsByTagName("input")[i].classList.add("letterGoed");
        };
    };
});

// Naar de volgende letter gaan.
$("input").keyup(function () {
    var index = $(this).index("input");		 	
    $("input:eq(" + (index +1) + ")").focus(); 
 });

 //Random word generator for Hangman
function woordKiezer()  {
    return arrayWoorden[Math.floor(Math.random()*arrayWoorden.length)];
}
