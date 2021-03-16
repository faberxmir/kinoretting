const form = document.querySelector("form");
let orders = [];
const table = document.querySelector("#tableShit");
let slett = document.querySelector(".delete");

form.addEventListener("submit", (e) => {
    e.preventDefault ();
        let order = {
            film: document.getElementById("film").value,
            quantity: document.getElementById("quantity").value,
            forename: document.getElementById("forename").value,
            surname: document.getElementById("surname").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value
        }
        orders.push(order);
        document.getElementById("film").value = ""
        document.getElementById("quantity").value = "";
        document.getElementById("forename").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        let th = "";
        let content = `<tr>${th}</tr>`;
        orders.forEach((ticket) => {
            let row = "";
            for (let key in ticket) {
                row += `<td>${ticket[key]}</td>`;
            }
            content += `<tr>${row}</tr>`;
        });
        table.innerHTML = content;
        slett.addEventListener("click", ()=>{
            table.innerHTML = " "
            orders = [];
            console.log(orders);
        });
    });