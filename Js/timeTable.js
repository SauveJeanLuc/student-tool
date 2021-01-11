

var storeValues= new Array("");



function createFillForm(numberId,tableId,cellsNumber,createdElement,yes){
document.getElementById(tableId).style.display="block";

var number= document.getElementById(numberId).value;

var input=document.createElement("input");
var table=document.getElementById(tableId);
var div=document.getElementsByClassName("dailyTimetable");
div[0].style.height="auto";


if(yes=="yes"){
var select=document.createElement("select");
for(s=0;s<storeValues.length;s++){
var option=document.createElement("option");
option.innerHTML=storeValues[s];
select.appendChild(option);
}
}






for(i=0;i<number;i++){
var row= table.insertRow(i+1);

for(o=0;o<cellsNumber;o++){
var cell=row.insertCell(o);

if(yes=="yes"){
    var select=document.createElement("select");
    for(s=0;s<storeValues.length;s++){
    var option=document.createElement("option");
    option.innerHTML=storeValues[s];
    select.appendChild(option);
    }
cell.appendChild(select);
}
else{
var input=document.createElement(createdElement);
cell.appendChild(input);
}
}

}

var realInput=document.getElementsByTagName("input");
var inputLength=realInput.length
realInput[0].value=null;
realInput[inputLength-1].value=null;
realInput[inputLength-2].value=null;
/* realInput[0].setAttribute("disabled",""); */
/* realInput[inputLength-1].setAttribute("disabled",""); */
/* realInput[inputLength-2].setAttribute("disabled",""); */

}

function placeholder(){
    var s=document.getElementById("pNumber");
    var j=document.getElementById("pTime");
var inputsArray=document.getElementsByTagName("input");
for(i=1;i<inputsArray.length;i++){
    if(inputsArray[i]!=s&&inputsArray[i]!=j){
inputsArray[i].setAttribute("placeholder","Lesson "+(i));
    }
}
var div=document.getElementsByClassName("dailyTimetable");
div[0].style.height="auto";

 var form1=document.getElementById("lessonsNumber").style.display="none";

}

function getValues(){
var inputsArray=document.getElementsByTagName("input");
for(i=1;i<inputsArray.length-1;i++){
     storeValues[i-1]= inputsArray[i].value;
}

var div=document.getElementsByClassName("dailyTimetable");
div[0].style.height="auto";
}

function bringSecondTable(){
document.getElementById("form1").style.display="none";
document.getElementById("form2").style.display="block";
document.getElementById("askButton").style.display="block";
var div=document.getElementsByClassName("dailyTimetable");
div[0].style.height="70px";
document.getElementById("LessonNext").style.display="none";


}

function form2(){
    createFillForm('pNumber','dailyTable',5,'select','yes');
    document.getElementById("saveAsPdf").style.display="block";
}
function swap(){
    
var selects=document.getElementsByTagName("select");
for(i=0;i<selects.length;i++){
    /* idea of child */
    var WhereToWrite=selects[i].firstChild;
    var WhatToWrite=selects[i].value;
    WhereToWrite.innerHTML=WhatToWrite;
}

}

