var yes=0;

function bringTool(){
    if(yes==0){
var show=document.getElementById("ToolsBar").style.display="block";
        yes++;
    }
    else{
var hide=document.getElementById("ToolsBar").style.display="none";
        yes=0;
    }
}