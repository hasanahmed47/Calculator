let display=document.querySelector('input');
let butt=document.querySelectorAll('.butt')
let action=document.querySelectorAll('.action')
let operation=document.querySelectorAll('.operator')

let previousNumber=''
let operator=''
let currentNumber=''
let result=''

butt.forEach((button) =>{
    button.addEventListener('click', (input)=>{
       currentNumber += input.target.innerText;
       display.value = `${previousNumber}${operator}${currentNumber}`
    })
})

operation.forEach((op) =>{
    op.addEventListener('click', (event)=>{

        if(previousNumber !== '' && currentNumber !== ''){
             if(operator === '+') result = `${parseFloat(previousNumber) + parseFloat(currentNumber)}`
          if(operator === '-') result = `${parseFloat(previousNumber) - parseFloat(currentNumber)}`
          if(operator === '*') result = `${parseFloat(previousNumber) * parseFloat(currentNumber)}`
          if(operator === '/') result = `${parseFloat(previousNumber) / parseFloat(currentNumber)}`
          previousNumber=result;
          currentNumber=''
          display.value=result
        }else{
            previousNumber= currentNumber; 
        }
         
        operator = event.target.innerText;
        currentNumber=''
        display.value = `${previousNumber}${operator}`
    })
})

action.forEach((act)=>{
    act.addEventListener('click', (event) =>{
    if(event.target.innerText === '='){     
          if(operator === '+') result = `${parseFloat(previousNumber) + parseFloat(currentNumber)}`
          if(operator === '-') result = `${parseFloat(previousNumber) - parseFloat(currentNumber)}`
          if(operator === '*') result = `${parseFloat(previousNumber) * parseFloat(currentNumber)}`
          if(operator === '/') result = `${parseFloat(previousNumber) / parseFloat(currentNumber)}`
          if(operator === '/') result = `${parseFloat(previousNumber) % parseFloat(currentNumber)}`

          currentNumber=result;
          previousNumber=''
          operator=''
          display.value=result
    }
    if(event.target.innerText === "AC") {
        display.value=0
        previousNumber=''
        currentNumber=''
        operator=''
    }

    if(event.target.innerText === 'DEL'){
        display.value=display.value.slice(0,-1)
        currentNumber=display.value
    }
    } )
})
