const inputs = document.querySelectorAll("input")
const menu = document.getElementById("mySelector")
let tickets = []

function kjøp() {
    let obj = {}
    inputs.forEach((input) => {
        obj[input.id] = input.value;
        document.getElementById("demo").innerText += input.value + "\n"
    })
    tickets.push(obj)
    document.getElementById("demo2").innerText = menu.value
    limits();
}

function fjern() {
    inputs.length = 0;
    document.getElementById("demo").innerText = ""
    document.getElementById("demo2").innerText = ""
}

document.querySelector("form").addEventListener("submit", (e) => e.preventDefault());



const antall = document.getElementById("antall")
const fornavn = document.getElementById("fornavn")
const etternavn = document.getElementById("etternavn")
const number = document.getElementById("tlf")
const epost = document.getElementById("epost")

function limits() {
    if (antall.value.length == 0) {
        document.getElementById("antallP").innerText = "Du må skrive in tall"
        clear();
        fjern();
    } else if (fornavn.value.length == 0) {
        document.getElementById("fornavnP").innerText = "Du må skrive in fornavn"
        clear();
        fjern();
        console.log("I love Hentai!");
    } else if (etternavn.value.length == 0) {
        document.getElementById("etternavnP").innerText = "Du må skrive in etternavn"
        clear();
        fjern();
    } else if (number.value.length == 0) {
        document.getElementById("numberP").innerText = "Du må skrive in number"
        clear();
        fjern();
    } else if (epost.value.length == 0) {
        document.getElementById("epostP").innerText = "Du må skrive in E-post"
        clear();
        fjern();
    }
}

function clear() {
    antall.value = "";
    fornavn.value = "";
    etternavn.value = "";
    number.value = "";
    epost.value = "";
}