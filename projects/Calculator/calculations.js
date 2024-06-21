var numbersButtonList = document.querySelectorAll(".number")
var operatorsButtonList = document.querySelectorAll(".operator")
var currentValue = document.querySelector("#display").innerHTML
var displayingAnswer = false

function calc(exp){
  let numArr = [], operArr = []
  let reg = /\d/

  //get negative and positive nums and operayors
  
  let temp = ''
  //console.log(temp.length)
  
  for(let i = 0; i < exp.length; i++){
    if(exp[i] == '.'){temp += exp[i]}

    else if(!reg.test(exp[i])){

      if(temp.length != 0){
        numArr.length == 0 ? numArr.unshift(temp) : numArr.push(temp)
        temp = ''
      }//end of inner if

      if(exp[i] == '-'){
        
        //check if previous element is not a digit
        if(!(i - 1 < 0) && !reg.test(exp[i - 1])){
          temp += exp[i]
        }//end of if
          
        else{
          if(i == 0){temp += exp[i]}
          else{operArr.push(exp[i])}
        }//end of else
        
        
      }//end of second inner if 
        
      else{
        operArr.length == 0 ? operArr.unshift(exp[i]) : operArr.push(exp[i])
      }//end of else
      
    }//end of if
     
    else{
      temp += exp[i]
      if(i == exp.length - 1){
        //numArr.push(Number(temp))
        numArr.push(temp)
      }
    }//end of not digit else
    
  }//end of 4 loop
let setUp = []

  for(let i = 0; i < numArr.length; i++){
    setUp.length == 0 ? setUp.unshift(numArr[i]) : setUp.push(numArr[i])

    if(i < operArr.length){setUp.push(operArr[i])}
  }//end of 4 loop

while(setUp.indexOf('*') != -1){
  let pos = setUp.indexOf('*')
  let num1 = Number(setUp[pos - 1])
  let num2 = Number(setUp[pos + 1])

  let answer = num1 * num2
  setUp.splice(pos - 1, 1)
  setUp.splice(pos, 1)

  setUp[pos - 1] = answer.toString()
  
}//end of first while loop
while(setUp.indexOf('/') != -1){
  let pos = setUp.indexOf('/')
  let num1 = Number(setUp[pos - 1])
  let num2 = Number(setUp[pos + 1])
  
  let answer = num1 / num2
  setUp.splice(pos - 1, 1)
  setUp.splice(pos, 1)
  setUp[pos - 1] = answer.toString()
  
}//end of second while loop

while(setUp.indexOf('+') != -1){
  let pos = setUp.indexOf('+')
  let num1 = Number(setUp[pos - 1])
  let num2 = Number(setUp[pos + 1])

  let answer = num1 + num2
  setUp.splice(pos - 1, 1)
  setUp.splice(pos, 1)
  setUp[pos - 1] = answer.toString()
 
  
}//end of first while loop
while(setUp.indexOf('-') != -1){
  let pos = setUp.indexOf('-')
  let num1 = Number(setUp[pos - 1])
  let num2 = Number(setUp[pos + 1])
  
  let answer = num1 - num2 
  setUp.splice(pos - 1, 1)
  setUp.splice(pos, 1)
  setUp[pos - 1] = answer.toString()
  
}//end of second while loop
 return setUp[0]
  
}//end of calc function
  
$("#clear").click(()=>{
    $("#display").text("0")
    currentValue = "0"
    displayingAnswer = false
})
$("#delete").click(()=>{
  if(currentValue.length == 1){currentValue = "0"}
  else{
    let arr = currentValue.split('')
    arr.splice(arr.length - 1, 1)
    currentValue = arr.join('')
  }
})
   
$("#equal").click(()=>{
     let finalanswer = "Answer: "+ calc(currentValue); 
     currentValue = finalanswer
    // currentValue = calc(currentValue)
     displayingAnswer = true
})//end of equal function

function validateNumbers(value){

  if(displayingAnswer){
    currentValue = "0"
    displayingAnswer = false
  } 
if(value == "0"){
let valid = true

//check if current value is not equal to 0
if(currentValue == "0"){valid = false}

//check if current value is not equal to -0
else if(currentValue == "-0"){valid = false}

if(valid){currentValue += value}

}//end of if
else{
    if(currentValue == "0"){currentValue = value}
    else if(currentValue == "-0"){currentValue = '-' + value}
    else{currentValue += value}
}//end of else
   $("#display").text(currentValue)

}//end of validate Number


function validateOperators(value){
let arr = currentValue.split('')
let reg = /\d/

// if(qualClicked){currentValue = "0"}
// if(displayingAnswer){
//   currentValue = "0"
//   displayingAnswer = false
// } 

if(!reg.test(arr[arr.length - 1])){
    if(value == '-'){

        if(!(arr.length -2 < 0)){
            if(arr[arr.length - 2] !== "-"){currentValue += value}
        }
        // else{}
    }//end of if
}
else{
    if(value == "-" && currentValue == "0"){currentValue = "-0"}
    else{currentValue += value}
    // currentValue += value
}
    $("#display").text(currentValue)
}//end of validate Operators

numbersButtonList.forEach((child)=>{
  
    $(child).click(()=>{
        validateNumbers(child.value)
    })
  
})//end of numbers List

operatorsButtonList.forEach((child)=>{
  
    $(child).click(()=>{
        validateOperators(child.value)
    })

})//end of operators List


// console.log(numbersButtonList)