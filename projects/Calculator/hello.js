function calc(exp){
  let numArr = [], operArr = []
  let reg = /\d/

  //get negative and positive nums and operayors
  
  let temp = ''
  //console.log(temp.length)
  
  for(let i = 0; i < exp.length; i++){
    if(!reg.test(exp[i])){

      if(temp.length != 0){
        //numArr.length == 0 ? numArr.unshift(Number(temp)) : numArr.push(Number(temp))
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
  //3+5*6-2/4
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
 return Number(setUp[0]).toString()
  
}//end of calc functio
  