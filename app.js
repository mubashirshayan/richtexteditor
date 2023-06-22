function size(){
    var input=document.getElementById('input').value;
// console.log(input)
    var size=document.getElementById('area').style.fontSize=input+"px";
     
}
var big=document.getElementById('input').value;
console.log(big)
function bold(){
    var size=document.getElementById('area').style;
    console.log(size)
    if (size.fontWeight=="") {
       size.fontWeight='bold'
    } else if(size.fontWeight=="bold"){
       size.fontWeight=''
    }
    
}
function underLine(){
    var size=document.getElementById('area').style;
    console.log(size)
    if (size.textDecoration=="") {
       size.textDecoration='underline'
    } else if(size.textDecoration=="underline"){
       size.textDecoration=''
    }
    
}
function italic(){
    var size=document.getElementById('area').style;
    console.log(size)
    if (size.fontStyle=="") {
       size.fontStyle='italic'
    } else if(size.fontStyle=="italic"){
       size.fontStyle=''
    }
    
}
function color(){
 var color=document.getElementById('fontcolor').value;
 var text=document.getElementById('area').style.color=color;
   //console.log(text);
}
function backcolor(){
    var backColor=document.getElementById('backcolor').value;
    var backText=document.getElementById('area').style.backgroundColor=backColor;
      //console.log(text);
   }
function center(){
    var text=document.getElementById('area').style.textAlign='center';
}
function right(){
    var text=document.getElementById('area').style.textAlign='right';
}
function left(){
    var text=document.getElementById('area').style.textAlign='left';
}
function font(){
    var text=document.getElementById('area').style.fontFamily='arial'
}


function selOpt() {
    var dom=document.getElementById('selectOpt').value;
    var family=document.getElementById('area').style.fontFamily=dom;
}
function list(){
var family=document.getElementById('area').style.listStyle='order li'
console.log(family);
}