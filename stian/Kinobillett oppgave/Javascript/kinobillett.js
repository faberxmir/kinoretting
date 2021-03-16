var array=[]

function buy(){
    let order = {
        film: document.getElementById("velgfilm").value,
        navn: document.getElementById("fornavn").value,
        etternavn: document.getElementById("etternavn").value,
        antall: document.getElementById("velgantall").value,
        telefonnummer: document.getElementById("tlfnummer").value,
        epost: document.getElementById("epost").value,

    }

array.push(order);
   for(var i =0; i < array.length; i++) {
    document.getElementById("data").innerText+=" \n \n"+array[i].film+" \n "+array[i].antall+" "+array[i].navn+" "+array[i].etternavn+" "+array[i].telefonnummer+" \n "+array[i].epost
      
   }

  
   

    
// console.log(order);
let jsonString = JSON.stringify(order);

}