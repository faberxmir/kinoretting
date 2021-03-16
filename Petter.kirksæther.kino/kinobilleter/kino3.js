var filmer = ["the motion picture","the wrath of khan","the search for spock","the voyage home","the final frontier","the undiscovered country","generations","first contact","insurrection","nemisis","2009","into darkness","beyond"]

function kinofilutvalg(Array){
    for(var i = 0; i< filmer.length; ++i){
      console.log(filmer[i]);
    }
  }

kinofilutvalg();



let inputListe = document.querySelectorAll(".userinput")
let theSelectedMovie = document.getElementById("themovies")
function theTicket (){
    for(var i = 0; i< bestillingliste.length; ++i){
      console.log(bestillingliste[i]);
    }
 }
 




let bestillingliste = []

function buy(){
  let obj={
    film: theSelectedMovie.value,
    antall: inputListe[0].value,
    fornavn: inputListe[1].value,
     etternavn: inputListe[2].value,
      telefonnummer: inputListe[3].value,
      epost: inputListe[4].value
      }
      bestillingliste.push(obj)
      
      theTicket();
      
      
}






