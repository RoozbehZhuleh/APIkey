const username = document.querySelector("#username");
const apiKey = document.querySelector("#api--key");
const apiSecret = document.querySelector("#api--secret");
const table = document.querySelector("table");

document.querySelector("#submit__btn").addEventListener("click", runSubmit);

function runSubmit(){
    console.log("hello!");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML = "CELL 1";
    cell2.innerHTML = "CELL 2";
    cell3.innerHTML = "CELL 3";
    cell4.innerHTML = "CELL 4";
    cell5.innerHTML = "CELL 5";

}





// swal("hello");