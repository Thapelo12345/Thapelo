var insertBack = false
// var mainHeader = $("#head-line").text()
const unOderedListId = "mainParagraph"
const mainListParagraphs = document.querySelectorAll(".head-para")

var serviceProductBack = document.createElement('button')
serviceProductBack.id = 'back'
// serviceProductBack.style.zIndex = "1"
$(serviceProductBack).text('X')

const Services = [
    'Replace pc or deskatop hardware',
    'Update desktop and laptop software',
    'remove virus from your personal computer',
    'Fix any projectors or printers',
    'Clode services',
    'Network and security',
    'Backup and Disaster Recovery'
]
const Products = [
    'Apple products',
    'Data Backup Software',
    'Email address',
    'Servers',
    'Network equipment',
    'Network cabbles'
]

function backUp(){
    // formOpen = false
    insertBack = false
 
    let span = document.createElement('span')
    $(span).text(".Inc")
 
    let underLine = document.createElement('u')
    $(underLine).text('demo company '.toUpperCase())
    $(underLine).append(span)
 
    $("#head-line").empty()
    $("#head-line").append(underLine)
   
    $(serviceProductBack).remove()
    $("#mainParagraph").empty()
 
    mainListParagraphs.forEach((item)=>{
        let lst = document.createElement('li')
        $(lst).text(item.innerHTML)
        lst.className = 'head-para'
        $("#mainParagraph").append(lst)
    })
 }//end of back up function
 
//start service and product funct
$("#service").click(()=>{

    if(loggedIn){
        // formOpen = true

        if(!insertBack){
        insertBack = true
        $(serviceProductBack).click(backUp)
        $("#screen").append(serviceProductBack)
        }

        $('#mainParagraph').empty()
        $("#head-line").empty()
        $("#head-line").text('Services')
        
        Services.forEach((item)=>{
            let lst = document.createElement('li')
            $(lst).text(item)
            lst.className = 'head-para'
            $("#mainParagraph").append(lst)
        })
        
    }
    else{
        alert('Please login or create an account!')
    }
}) 

$("#product").click(()=>{
    if(loggedIn){
        // formOpen = true

        if(!insertBack){
            insertBack = true
            $(serviceProductBack).click(backUp)
            $("#screen").append(serviceProductBack)
        }

        $('#mainParagraph').empty()
        $("#head-line").empty()
        $("#head-line").text('Products')

        Products.forEach((item)=>{
            let lst = document.createElement('li')
            $(lst).text(item)
            lst.className = 'head-para'
            $("#mainParagraph").append(lst)
        })

    }
    else{
        alert('Please login or create an account!')
    }
}) 


$(serviceProductBack).click(()=>{
    backUp()
    console.log(`back has been click ${count++} times`)
})

