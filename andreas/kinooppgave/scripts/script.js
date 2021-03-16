let input = document.querySelectorAll("input");
let select = document.querySelector("select");
let form = document.querySelector("form");
let slett = document.querySelector(".slettBestilling")
const table = document.querySelector("#tableShit");
let bestillinger = []

form.addEventListener("submit", (e) => {
    e.preventDefault ();
    let bestilling = {
        film: select.value,
        antall: input[0].value,
        fornavn: input[1].value,
        etternavn: input[2].value,
        telefonNummer: input[3].value,
        Epost: input[4].value
    }  
    bestillinger.push(bestilling);
    input[0].value = "" 
    input[1].value = ""
    input[2].value = ""
    input[3].value = ""
    input[4].value = ""
    select.value = ""
    let th = "";
    let content = `<tr>${th}</tr>`;
    bestillinger.forEach((ticket) => {
        let row = "";
        for (let key in ticket) {
            row += `<td>${ticket[key]}</td>`;
        }
        content += `<tr>${row}</tr>`;
    });
    table.innerHTML = content;
});

slett.addEventListener("click", () => {
    bestillinger = []    
    table.innerHTML = "";
});
