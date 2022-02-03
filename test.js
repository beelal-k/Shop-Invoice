function newtable(){
    let tableref = document.getElementById("table");

    let newrow = tableref.insertRow(-1);
    let newcell = newrow.insertCell(0);
    let newtext = document.createTextNode()
}


function lipton(){
    var amount;
    document.getElementById("price").innerText = 100;
    amount = Number(document.getElementById("quant").innerText);
    document.getElementById("price").innerText = "100";
    document.getElementById("price").readOnly = true;

}


function test(){
    alert("working");
    document.getElementById("price").readOnly = true;
}


