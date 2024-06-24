var mobileScreen = window.matchMedia("(max-width: 768px")

//creating the main form screen
var formScreen = document.createElement('div')
formScreen.id = "form-screen"
//done creating  the main for screen

//adding image to form screen
let pic = document.createElement('img')
pic.id = 'icon'
pic.src = "./pics/Login.png"
//done adding image to form screen

//creating button holder
var buttonContainer = document.createElement('div')
buttonContainer.id = 'button-container' 
//done creating button holder

//creating main container for containers
var formMainContainer = document.createElement('div')
formMainContainer.id = 'form-main-container'
//done creating main container for containers

//creting label and input containers
var labelContainer = document.createElement('div')
labelContainer.className = 'form-container'
labelContainer.id = "label-container"

var inputContainer = document.createElement('div')
inputContainer.className = 'form-container'
inputContainer.id = 'input-container'
//done creating  label and input containers

//creating inputs
var nameInput = document.createElement('input')
nameInput.id = 'name'
nameInput.type = 'text'
nameInput.placeholder = 'Enter username'
nameInput.className = 'inputs'

var passwordInput = document.createElement('input')
passwordInput.id = 'password'
passwordInput.type = 'password'
passwordInput.placeholder = 'Enter password'
passwordInput.className = 'inputs'

var rePasswordInput = document.createElement('input')
rePasswordInput.id = 're-password'
rePasswordInput.type = 'password'
rePasswordInput.placeholder = 'Re-Enter password'
rePasswordInput.className = 'inputs'
if(!mobileScreen.matches){rePasswordInput.style.zIndex = '1'}
else{rePasswordInput.style.zIndex = "0"}
//done creating inputs

//creating buttons
var para = document.createElement('p')
para.id = 'small-text'
para.innerHTML = 'click sign up if you dont have an account'
$("#small-text").css({
    
})

var closeMe = document.createElement('button')
closeMe.id = 'close-button'
closeMe.innerHTML = 'Close'
closeMe.className = 'form-buttons'
closeMe.onclick = closeAndCancel

var login = document.createElement('button')
login.id = 'Login-button'
login.innerHTML = 'Login'
login.className = 'form-buttons'
login.onclick = LoginAndFinish

var signUp = document.createElement('button')
signUp.id = 'signup'
signUp.innerHTML = '<u>Sign Up</u>'
signUp.onclick = SignUp
//done creating buttons

//creating labels 
var label1 = document.createElement('label')
label1.className = 'labels'
label1.innerHTML = 'username:'

var label2 = document.createElement('label')
label2.className = 'labels'
label2.innerHTML = 'password:'

var label3 = document.createElement('label')
label3.className = 'labels'
label3.innerHTML = 'Re-enter-password:'
//done creating labels
