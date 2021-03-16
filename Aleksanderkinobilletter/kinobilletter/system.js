let liste = document.querySelectorAll(".inputfrabruker");
let feilmeldingliste = document.querySelectorAll(".feilmelding");
let bekreftet= document.querySelector(".kjøp");
const valg = document.querySelector("select");
const billett= document.querySelector("Billett");
const ticket=document.getElementById("konfirmert");

console.log(valg);
function funk(){

    for(let i = 0; i < liste.length; i++){
        console.log(liste[i].value)
    }
}

function tøm(){
      window.location.reload();
}

function feilmelding(){
    ticket.classList.add("background");
    for(let i = 0; i< feilmeldingliste.length; i++){
        if(liste[i].value===""){
            feilmeldingliste[i].innerText = "Fyll ut" 
    }
  }
}


function order(){
    valg.innerHTML
    
}
       
function hovedfunksjon(){
    funk();
    feilmelding();
    order();
    filmvalg();
    shopshow();
  
    }

function filmvalg() {
    
    Billett.addEventListener("click", (e) => {
        bekreftet.innerHTML = valg.value 
        console.log(valg.value)
        
    });
}

const storage = [];

const input = document.querySelectorAll("input");

function shopshow(){
   
    input.forEach((inputs)=>{
        storage.push(inputs.value)
        inputs.value="";
        document.getElementById("konstabel").innerHTML = JSON.stringify(storage,null,4) 
        
    }
    )
  
}

