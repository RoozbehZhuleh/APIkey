const username = document.querySelector("#username");
const apiKey = document.querySelector("#api--key");
const apiSecret = document.querySelector("#api--secret");
const table = document.querySelector("table");
const buttons = document.querySelector("btn__secondary");

document.querySelector("#submit__btn").addEventListener("click", runSubmit);

function runSubmit(){
    console.log("hello!");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML = "1";
    cell2.innerHTML = username.value;
    cell3.innerHTML = apiKey.value;
    cell4.innerHTML = apiSecret.value;
    cell5.innerHTML = buttons.innerHTML;

}





swal("Welcome to API Key manager");