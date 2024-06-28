function mobileCloseButtons(){
    $("#back").css({
        zIndex: "1",
        visibility: "visible"
    })
    $("#contact-button").css({
        zIndex: "-1",
        visibility: "hidden"
    })
    $("#service-button").css({
        transform: "translateX(140%)",
        transitionDuration: "1s",
        zIndex: "-1",
        visibility: "hidden"
    })
    $("#about-button").css({
        transitionDuration: "1s",
        transform: "translateX(-147%)",
        zIndex: "-1",
        visibility: "hidden"
    })
}//end of mobile close function

function mobileOpenButtons(){

    $("#service-button, #about-button").each(function(){
        $(this).css({
            transform: "translate(0, 0)",
            visibility: "visible",
            zIndex: "1"
        })
    })
    let pause = setTimeout(()=>{
        $("#contact-button").css({
            visibility: "visible",
            zIndex: "1"
        })
        $("#back").css({
            visibility: "hidden",
            zIndex: "-1"
        })
    }, 900)
}//end of open mobile buttons func
function mobileScreenAndImage(){
    $("#screen-infor").css({
      top: "8%",
      width: "76vw",
      height: "54vh",
      visibility: "visible" 
    })
    $("#main-image").css({
        transform: "translate(85%, 10%) rotateY(90deg)",
        visibility: "hidden"
    })
    $("#portfolio-title-outer-container").css({
        left: "-60%"

    })
    $("#qaulifications").css({
        transform: "translateX(112%)"
    })
}//end of mobile screen and image

function hover(element1, element2){
    $(".header-button").css("transition-duration", "1s")

    $("#line").css({
        position: "relative",
        top: "56px"
    })

    element1.css({
        position: "relative",
        top: "40px",
        zIndex: "1",
        textShadow: '1px 1px 0 black'
    })

    element2.css({
        position: "relative",
        top: "40px",
        zIndex: "1",
        textShadow: '1px 1px 0 black'

    })

}
function hoverBack(element1, element2){

    $("#line").css({
position: "relative",
top: "0"
    })
    element1.css({
        position: "relative",
        top: "0",
        zIndex: "0",
        // backgroundImage: 'none',
        textShadow: 'none'
    })

    element2.css({
        position: "relative",
        top: "0",
        zIndex: "0",
        // backgroundImage: 'none',
        textShadow: 'none'
    })

    $(".header-button").css("transition-duration", "0")

}
//set up mouse over func
$("#service-button").mouseover(function(){

    if(!buttonActive){
    if(!window.matchMedia("(max-width: 768px)").matches){
    hover($("#about-button"), $("#contact-button"))
    $("#service-button").css("box-shadow", "2px 1px 75px grey")

    }
   
    }//end of button active if
})
$("#contact-button").mouseover(function(){
if(!buttonActive){
    if(!window.matchMedia("(max-width: 768px)").matches){
    hover($("#about-button"), $("#service-button"))
    $("#contact-button").css("box-shadow", "2px 1px 75px grey")

    }
   
}//end of button active if
})
$("#about-button").mouseover(function(){
if(!buttonActive){
    if(!window.matchMedia("(max-width: 768px)").matches){
    hover($("#service-button"), $("#contact-button"))
    $("#about-button").css("box-shadow", "2px 1px 75px grey")

    }
   
}//end of button active if
})
//done setting up mouse over

//setUp mouse out funct
$("#service-button").mouseout(function(){

    if(!hasBeenClicked){
    if(!window.matchMedia("(max-width: 768px)").matches){
    $("#service-button").css("box-shadow", "1px 1px 2px grey")
    hoverBack($("#about-button"), $("#contact-button"))
    $("#service-button").css("box-shadow", "1px 1px 2px grey")

    }
   
    }
})
$("#contact-button").mouseout(function(){

    if(!hasBeenClicked){
    if(!window.matchMedia("(max-width: 768px)").matches){
    $("#contact-button").css("box-shadow", "1px 1px 2px grey")
    hoverBack($("#about-button"), $("#service-button"))
    $("#contact-button").css("box-shadow", "1px 1px 2px grey")

    }
   
}

})
$("#about-button").mouseout(function(){

    if(!hasBeenClicked){
    if(!window.matchMedia("(max-width: 768px)").matches){
    $("#about-button").css("box-shadow", "1px 1px 2px grey")
    hoverBack($("#service-button"), $("#contact-button"))
    $("#about-button").css("box-shadow", "1px 1px 2px grey")

    }
    }
})
//done setting mouse out

//mouse over function
if(!mobiScreen){
 $("#facebook-container").mouseover(()=>{

    $("#facebook").css({
        transform: "translateX(0)"
    })
 })
$("#linkedin-container").mouseover(()=>{
    $("#LinkedIn").css({
        transform: "translateX(0)"
    })
})
$("#github-container").mouseover(()=>{
    $("#gitHub").css({
        transform: "translateX(0)"
    })
})

//mouse out functions
$("#facebook-container").mouseout(()=>{

    $("#facebook").css({
        transform: "translateX(101%)"
    })
    
  
})
$("#linkedin-container").mouseout(()=>{
    $("#LinkedIn").css({
        transform: "translateX(101%)"
    })
})
$("#github-container").mouseout(()=>{
    $("#gitHub").css({
        transform: "translateX(101%)"
    })
})
}//end of mobi screen if 

