
let display=document.getElementById('input');


function append(item){
    display.value += item; 
}

function calculating(){
  try{
     display.value=eval(display.value);
  }catch(error){
    display.value="error"
  }
}

function deletee(){
display.value=display.value.slice("0","-1")
}

function remove(){
    display.value="";
}