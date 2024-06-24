var mobileScreen = window.matchMedia("(max-width: 768px)").matches
var formOpen = false
var cancelClick = false
var loggedIn = false
var personArr = [{name: 'Thapelo', password: 'Thapz'}]
var person = {name: '', password: ''}


//done service and product funct
function openForm(){

    if(!formOpen && !loggedIn){
        formOpen = true

        //append elements

buttonContainer.append(para, signUp, login, closeMe)

labelContainer.append(label1, label2)
inputContainer.append(nameInput, passwordInput)

formMainContainer.append(labelContainer, inputContainer)
// buttonContainer.append(login, close)

formScreen.append(pic, formMainContainer, buttonContainer)

$('body').append(formScreen)
//done appending elements

    }//end of if 

    else if(!formOpen && loggedIn){
        $("#login-text").text('Login')

        $("#login-text").css({
            color: 'rgb(216, 174, 36)'
        })
        loggedIn = false
        alert('You have Logged out!')
    }

    backUp()
}//end of open form func

function clearScreen(){
    if(cancelClick){
        $("#small-text").css({
            right: "0"
        })
        $(".form-buttons").css({
            left: "0"
        })
        $("#signup").css({
            right: "0"
        })
            }//end of inner if
       
     while(buttonContainer.firstChild){ buttonContainer.removeChild(buttonContainer.firstChild)}
       buttonContainer.remove()
    
    while(labelContainer.firstChild){labelContainer.removeChild(labelContainer.firstChild)}
    labelContainer.remove()
    
    while(inputContainer.firstChild){inputContainer.removeChild(inputContainer.firstChild)}
    inputContainer.remove()
    formMainContainer.remove()
    pic.remove()
}//end of clearning screen fumct

function SignUp(){
  para.remove()
  signUp.remove()

  if(mobileScreen){

    $(".form-buttons").css({
        left: "48%"
      })
  }//end of if mobile
  else{
  $(".form-buttons").css({
    left: "61.8%"
  })
}//end of else 

  login.innerHTML = "Finish"
  closeMe.innerHTML = 'Cancel'
  labelContainer.append(label3)
  inputContainer.append(rePasswordInput)
}//end of sin up function


function LoginAndFinish(){
 if(login.innerHTML === 'Login'){
    let valid = false
    personArr.forEach((item)=>{
        if(item.name === nameInput.value && item.password === passwordInput.value){valid = true}
    })
    if(valid){
        $("#login-button-head").innerHTML = 'LogOt'
        cancelClick = true
        clearScreen()
        loggedIn = true
        formOpen = false
        nameInput.value = ''
        passwordInput.value = ''
         $("#login-text").text('LogOut')
         $("#login-text").css({
            color: "lime"
         })

        let donePic = document.createElement('img')
        donePic.src = './pics/pngwing.com.png'

        $(donePic).css({
            position: 'relative',
            top: '21%',
            left: '17%',
            width: '60%',
            height: '59%',
            margin: 'auto'

        })
        let header2 = document.createElement('h2')
        header2.innerHTML = "You Have Successfully LoggedIn!"
        $(header2).css({
            position: 'relative',
            top: '19%',
            left: '20%',
            color: 'green'

        })
        formScreen.append(donePic)
        formScreen.append(header2)

        let time = setTimeout(()=>{

            while(formScreen.firstChild){formScreen.removeChild(formScreen.firstChild)}
          formScreen.remove()
            clearTimeout(time)
        }, 2000)
    }
    else{
        alert('User Not Found!. Please SignUp For An Account')
        nameInput.value = ''
        passwordInput.value = ''
    }
 }//end of if 

 else{
    let validName = false, validPassword = false
    person = new Object()
    //nameInput
    if(nameInput.value.length >= 5 && nameInput.value.length < 9){
        let valid = true
        for(let i = 0; i < nameInput.value.length; i++){
            if(nameInput.value[i] === ' ' || nameInput.value[i] === ''){
                valid = false
                break
            } 
        }//end of 4 loop

        if(valid){
            person.name = nameInput.value
            validName = true
        }
        else{
            alert('usename cant be empty or have an empty space!')
        }
    }//end of name test if 
    else{
        alert('username length must be greater than 5 and less than 9')
    }//end of else 
    //done validating username

    //passwordInput
    if(passwordInput.value !== '' && passwordInput.value !== ' '){
        let valid = true
        for(let i = 0; i < passwordInput.value.length; i++){
            if(passwordInput.value[i] == ' '){
                valid = false
                break
            }
        }//end of 4 loop

        if(valid){
            if(passwordInput.value === rePasswordInput.value){
                person.password = passwordInput.value
                validPassword = true
            }
            else{
                alert('passsword should match re enter password!!')
            }
        }
        else{
            alert('password cant have an empty space!')
        }
    }
    else{
        alert('You have an empty field! in password')
    }

    if(validName && validPassword){
        let valid = true
        personArr.forEach((item)=>{
            if(item.name === nameInput.value || item.password === passwordInput.value){valid = false}
        })

        if(valid){
        if(personArr.length === 0){
            personArr.unshift(person)
        }
        else{
            personArr.push(person)
        }
//insert the closing code here!
        cancelClick = true
        rePasswordInput.remove()
        label3.remove()

        buttonContainer.append(para, signUp)

        closeMe.innerHTML = 'Close'
        login.innerHTML = 'Login'

        $(".form-buttons").css({
            left: '61.8%'
        })
        $("#small-text").css({
            right: '36%'
        })
        $("#signup").css({
            right: '36%'
        })

        nameInput.value = ''
        passwordInput.value = ''
    }

    
    else{
        alert('name or password already exist!')
    }
    }

 }

}//end of login and finish function

function closeAndCancel(){
    if(closeMe.innerHTML === "Close"){
        formOpen = false
        clearScreen()
formScreen.remove()

    }//end of if
    
    else{
        cancelClick = true
        rePasswordInput.remove()
        label3.remove()

        buttonContainer.append(para, signUp)

        closeMe.innerHTML = 'Close'
        login.innerHTML = 'Login'

        $(".form-buttons").css({
            left: '61.8%'
        })
        $("#small-text").css({
            right: '36%'
        })
        $("#signup").css({
            right: '36%'
        })
    }//end of else

}//end of close and cancel function

