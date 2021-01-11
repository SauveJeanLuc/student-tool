function countWords(){
    var text=document.getElementById("userText").value;
    var arrayText= text.split("\n");
    var newArrayText= arrayText.join(" ").split(" ");
    for(i=0;i<newArrayText.length;i++){
        if(newArrayText[i]==""){
            newArrayText.splice(i,1);
            i=0;
        }
    }
    var number= newArrayText.length;
    document.getElementById("message").innerHTML= "The Text contains "+number+" word(s)";
    document.getElementById("alert").style.display="block";
}

function countByNumber(){
    var count=0;
    var text=document.getElementById("userText").value;
    var letters=document.getElementById("letters").value;
    var arrayText= text.split("\n");
    var newArrayText= arrayText.join(" ").split(" ");
    for(i=0;i<newArrayText.length;i++){
        if(newArrayText[i]==""){
            newArrayText.splice(i,1);
            i=0;
        }
    }

    for(i=0;i<newArrayText.length;i++){
        if(newArrayText[i].length==letters){
            count++;
        }
    }
    document.getElementById("message").innerHTML= "The Text contains "+count+" word(s) with "+letters+" letter(s)";
    document.getElementById("alert").style.display="block";


}

var yes=document.getElementById("customBar").style.display="block";
var no=document.getElementById("customBar").style.display="none";
var yes;
function bringIt(){
    
 if(yes==1){
    document.getElementById("customBar").style.display="none";
    document.getElementById("HeaderColor").style.display="none";
    document.getElementById("backgroundColor").style.display="none";
    yes=0;
 }
 else{
    document.getElementById("customBar").style.display="block";
    yes=1;
 }
}
 var forColor=0;
function changeColor(color,type){
    var header= document.getElementById("header");
var body=document.getElementsByTagName("body");
var title=document.getElementById("words");

    if(type=="h"){

switch(color){
    case 'blue':
        header.setAttribute("class","newHeader1");
        title.style.color="white";
        break;
    case 'white':
            header.setAttribute("class","newHeader2");
            title.style.color="black";
            break;
    case 'red':
            header.setAttribute("class","newHeader3");
            title.style.color="white";
            break;
    case 'black':
            header.setAttribute("class","newHeader4");
            title.style.color="white";
            break;
    case 'normal':
            header.setAttribute("class","newHeader5");
            title.style.color="white";
            break;
}
    }
else if(type=="b"){
    switch(color){
        case 'blue':
      
            body[0].setAttribute("class","newHeader1");
            
            break;
        case 'white':
                body[0].setAttribute("class","newHeader2");
                
                break;
        case 'red':
                body[0].setAttribute("class","newHeader3");
                
                break;
        case 'black':
                body[0].setAttribute("class","newHeader4");
                
                break;
        case 'normal':
                body[0].setAttribute("class","newHeader6");
                
                break;
    }
}


}

var yesForHeader;
function bringChangeHeader(){
    if(yesForHeader==1){
        document.getElementById("HeaderColor").style.display="none";
        yesForHeader=0;
     }
     else{
        document.getElementById("HeaderColor").style.display="block";
        document.getElementById("backgroundColor").style.display="none";
        yesForHeader=1;
     }
    
}

var yesForBackground;
function bringChangeBackground(){
    if(yesForBackground==1){
        document.getElementById("backgroundColor").style.display="none";
        yesForBackground=0;
     }
     else{
        document.getElementById("backgroundColor").style.display="block";
        document.getElementById("HeaderColor").style.display="none";
        yesForBackground=1;
     }
    
}
