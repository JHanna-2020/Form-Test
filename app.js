var newEntry=document.getElementById("submitBtn");
newEntry.addEventListener("click", run);
var row= 1 ;
function run(){
    var dateInput=document.getElementById("dateInput").value;
    var nameInput=document.getElementById("nameInput").value;
    var ageInput=document.getElementById("ageInput").value;

    if(!nameInput || !dateInput || !ageInput){
        alert("Please Fill in all textboxes");
        return;
    }

    var display= document.getElementById("myTable");
    var newRow=display.insertRow(row);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);

    cell1.innerHTML=dateInput;
    cell2.innerHTML=nameInput;
    cell3.innerHTML=ageInput;
};
console.log("test");