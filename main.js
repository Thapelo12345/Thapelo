
// var screen = require('./screen.js')
var mobiScreen = window.matchMedia("(max-width: 768px)").matches
var hasBeenClicked = false, buttonActive = false, activateBack = false
var buttonClick;

//add list 


//setting up clickable functions
function service(){
    hasBeenClicked = true
    buttonClick = "service"

 if(!buttonActive){   
    buttonActive = true
    activateBack = true
if(mobiScreen){
    mobileCloseButtons()
    mobileScreenAndImage()

    let count = 0
serviceList.forEach((item)=>{
    let container = document.createElement('div')
    container.className = "service-container"

    let headline = document.createElement('h6')
    headline.className = "headelines"
    headline.innerHTML = item

    let pic = document.createElement('img')
    pic.className = "service-images"
    
    pic.src = piclist[count]
    pic.alt = "Icon images"
    container.append(pic)
    container.append(headline)
$("#screen-infor").append(container)

    count++
})
//count = 0

}//end of mobile code 
else{

 $("#back").html(">")
    //delaying hidding the line 
let time = setTimeout(()=>{
    $("#line").css("visibility", "hidden")
    clearTimeout(time)
}, 95)
//done hidding the line

$("#service-button").css({
    zIndex: "1",
    position: "relative"
})

$("#service-button").animate({
    transitionDuration : "1s",
    left : "26.5%"
})
//closing the another buttons
$("#about-button, #contact-button").each(function(){
    $(this).css({
        transform: "rotateY(90deg)",
        visibility: "hidden"
    })
})
//done closing buttons

//settig up the screen div
$("#screen-infor").css({
    left: "6%",
    top: "-30%",
    visibility: "visible",
    transitionDelay: "0.7s",
    width: "30vw",
    height: "70vh",
    zIndex: "1"
})

//hidding and closing image
$("#main-image").css({
    transitionDelay: "0.6s",
    transitionDuration: "1s",
    transform: "translate(85%, 10%) rotateY(90deg)",
    visibility: "hidden",
    zIndex: "-1"
})

$("#portfolio-title-outer-container ").css({
    transform: 'translateX(-140%) rotateY(0deg)'
})

$("#qaulifications").css({
transform: "translateX(123%)"
})


//setting back button
$("#back").css({
    visibility: "visible",
    transitionDuration: '1s',
    transitionDelay: "1.7s"
})

let time3 = setTimeout(()=>{
$("#back").css({
    transform: "translateX(-198%)",
    zIndex: "1"
})
    clearTimeout(time3)
}, 100)//done setting back button

//adding screen childe components
inputServices()
//done adding cildNodes to screen

}//end pc else
 }
 //end of outer if bigger if statement

}//end service funct

function contact(){
    hasBeenClicked = true
    buttonClick = "contact"

    if(!buttonActive){
        activateBack = true
        buttonActive = true
    if(mobiScreen){
        mobileCloseButtons()
        mobileScreenAndImage()

    }//end of if mobile code
    else{

        $("#back").html("^")

    let time = setTimeout(()=>{
        $("#line").css("visibility", "hidden")
    
        clearTimeout(time)
    }, 500)
    //$("#header-nav").css("overflow", "hidden") 
    hover($("#about-button"), $("#service-button"))

    $("#service-button, #about-button").each(function(){
        
        $("#service-button, #about-button").css({
            transform: "rotateY(90deg)",
            visibility: "hidden"
        })
    
    })

    //setting up screen
    $("#screen-infor").css({
        left: "35%",
        top: "-4%",
        visibility: "visible",
        transitionDelay: "1.3s",
        width: "30vw",
        height: "47vh",
        transform: "rotateY(0deg)",
        zIndex: "1"
    })

    //setting back button
let time2 = setTimeout(()=>{
    $("#back").css("visibility", "visible")

}, 510)
    $("#back").css({
        fontSize: "92%",
        transitionDelay: "1.7s"
    })
    
    let time3 = setTimeout(()=>{

    $("#back").css({
        transform: "translateY(107%)"
    })
        clearTimeout(time3)
    }, 500)

    //closing image
    $("#main-image").css({
        transitionDelay: "0.6s",
        transitionDuration: "1s",
        transform: "translate(85%, 10%) rotateX(-90deg)",
        zIndex: "-1"
    })

    $("#portfolio-title-outer-container").css({
        transform: 'translateX(-140%) rotateY(0deg)'
    })
    $("#qaulifications").css({
        transform: "translateX(123%)"
        })

    //adding contact information
    // inputContacts()
    //done adding contact infor

$(".headings").css({
color: "white",
fontSize: "1.8vw",
marginLeft: "25%",
padding: "0"

})
$(".values").css({
color: "white",
fontSize: "1.2vw",
marginLeft: "33%",
padding: "0"
})

}//end of mobile else
 inputContacts()
    }//end of big if statement
}//end of contact function

function about(){
hasBeenClicked = true
buttonClick = "about"

if(!buttonActive){
    activateBack = true
    buttonActive = true
inputAbout()

if(mobiScreen){
    mobileCloseButtons()
    mobileScreenAndImage()

}//end of if mobile code

else{

    $("#back").html("<")

hover($("#service-button"), $("#contact-button"))

$("#service-button, #contact-button").each(function (){
    $(this).css({
        transform: "rotateY(90deg)",
        visibility: "hiden"
    })

});

$("#about-button").css({
    zIndex: "1",
    position: "relative",
    right: "28%",
    transitionDuration: "1s"
})

//delay scree img and line

let time = setTimeout(()=>{
$("#main-image").css({
    transform: "translate(85%, 10%) rotateY(90deg)",
    transitionDuration: "1s",
    visibility: "hidden"
})

$("#portfolio-title-outer-container").css({
    transform: 'translateX(-140%) rotateY(0deg)'
})
$("#qaulifications").css({
    transform: "translateX(123%)"
    })

$("#line").css("visibility", "hidden")
$("#screen-infor").css({
    left: "51%",
    top: "-15%",
    visibility: "visible",
    transitionDelay: "0.7s",
    width: "40vw",
    height: "67vh",
    zIndex: "1"
})
    clearTimeout(time)
},500) 
//setting up screen


$("#back").css({
    visibility: "visible",
    fontSize: "92%",
    transitionDuration: '1s',
    transitionDelay: "1.7s" 
})

//back button offseting 
let time1 = setTimeout(()=>{
    $("#back").css({
        transform: "translateX(217%)",
        zIndex: "1"
    })
}, 300)

}//end of mobile else
}// end of big if


}//end of about function

 //done setting clickable functions

 function back(){

    if(hasBeenClicked && (buttonActive && activateBack)){
        activateBack = false
        if(mobiScreen){
            mobileOpenButtons()

            $("#main-image").css({
                transform: "translate(85%, 10%) rotateY(0)",
                visibility: "visible",
                zIndex: "-1"
            })
            $("#qaulifications").css({
                transform: "translateY(0)"
            })
            $("#screen-infor").css({
                width: "0",
                height: "0",
                visibility: "hidden",
                zIndex: "1"
            })
            $("#portfolio-title-outer-container").css({
                left: "2%"
            })
            buttonActive = false
            hasBeenClicked = false
         
            let timeout = setTimeout(()=>{
                $("#screen-infor").empty()
            clearTimeout(timeout)
            },1500)
        }//mobile sreen code
        else{

            $("#back").css({
                transform: "translate(0,0)",
                transitionDelay: "0s",
                zIndex: "-1",
                visibility: "hidden"
            })

        if(buttonClick == "service"){

    $("#service-button").css("box-shadow", "1px 1px 2px grey")

    }//end of button click service if

        else if(buttonClick == "about"){
        //delay moving back down
            $("#about-button").css("box-shadow", "1px 1px 2px grey")

        }//end of cutton click about else if
        else if(buttonClick == "contact"){
        
            $("#contact-button").css({
                boxShadow: "1px 1px 2px grey",
                zIndex : "1"
            
            })
        }//end of button click contact else if

        let time = setTimeout(()=>{
            $("#service-button").css("left", "0")
            $("#about-button").css("right", "0")
            
            $("#service-button, #about-button").each(function(){
            $(this).css("transitionDelay", "0.6s")
            })
            //close screen and open image
            $("#screen-infor").css({
                width: 0,
                height: 0,
                visibility: "hidden"
            })
                
            //image timing
            let time1 = setTimeout(()=>{
                $("#main-image").css({
                    transform: "translate(85%, 10%) rotateY(0deg)",
                    visibility: "visible"
                })

                $("#portfolio-title-outer-container").css({
                    transform: 'translateX(0) rotateY(0deg)'
                })
                $("#qaulifications").css({
                    transform: "translateX(0)"
                    })
                buttonActive = false
                hasBeenClicked = false
        
                clearTimeout(time1)
            }, 500)

            //line buttons opening
            let time2 = setTimeout(()=>{
                $("#line").css("visibility", "visible")

            if(buttonClick == "service"){
                hoverBack($("#contact-button"), $("#about-button"))
                $("#contact-button, #about-button").each(function(){
                    $(this).css({
                        transform: "rotateY(0deg)",
                        visibility: "visible"
                    })
                })

            }
            else if(buttonClick == "contact"){
                hoverBack($("#service-button"), $("#about-button"))
                $("#service-button, #about-button").each(function(){
                    $(this).css({
                        transform: "rotateY(0deg)",
                        visibility: "visible"
                    })
                })
            }
            else if(buttonClick == "about"){
                hoverBack($("#service-button"), $("#contact-button"))
                $("#contact-button, #service-button").each(function(){
                    $(this).css({
                        transform: "rotateY(0deg)",
                        visibility: "visible"
                    })
                })
            }
                //open buttons
            clearTimeout(time2)
            }, 1700)
                    
            clearTimeout(time)
        },1000)

        let finalTime = setTimeout(()=>{

            $("#service-button, #about-button").each(function(){
                $(this).css("transitionDelay", "0s")
                })

    clearTimeout(finalTime)
        },6000)

let timeout = setTimeout(()=>{
    $("#screen-infor").empty()
clearTimeout(timeout)
},2500)


        }//end of else desktop code

    }//end of button active and button cklick function
 }//end of back function
