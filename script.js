const calculatorscreen = document.querySelector('.Calculator-Screen');

const updatescreen = (number) => {

  calculatorscreen.value = number;
}



// for number
const numbers=document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click",(event)=>{
  inputNumber(event.target.value);
  updatescreen(currentinput);
  })
});

let previnput = "0";
let calculationoperator = "";
let currentinput = "0";

const inputNumber = (number)=>{
    if(currentinput==="0")
      {
        currentinput = number;
      }
    else
      {
         currentinput += number;
      }
}

// for operator
const operators=document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click",(event)=>{
  inputoperator(event.target.value);
  })
});

const inputoperator = (operator) => {
  previnput = currentinput;
  calculationoperator = operator;
  currentinput = "0";
}

const equalSign = document.querySelector('.equal-sign');

 equalSign.addEventListener('click',()=> {
   calculate();
   updatescreen(currentinput);
 })


const calculate = ()=> {
let result = "0";
   switch (calculationoperator) {
    case '+':
        result = parseInt(previnput) + parseInt(currentinput);
        break;
    case '-':
        result = parseInt(previnput) - parseInt(currentinput);
        break;
    case '*':
        result = parseInt(previnput) * parseInt(currentinput);
        break;
    case '/':
        result = parseInt(previnput) / parseInt(currentinput);
        break;
    default:
        return;
   }
   currentinput = result.toString();
   calculationoperator = '';
}

const clearBTN = document.querySelector('.all-clear');

 clearBTN.addEventListener("click",() =>{
   clearALL();
   updatescreen(currentinput);
 })

 const clearALL = ()=> {
   previnput = '0';
   calculationoperator = '';
   currentinput = '0';
 }
