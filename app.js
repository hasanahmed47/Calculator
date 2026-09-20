
let display=document.getElementById('input');


function append(item){
    display.value += item; 
}

function calculating(){
  display.value=eval(display.value)
}

function deletee(){
display.value=display.value.slice("0","-1")
}

function remove(){
    display.value="";
}