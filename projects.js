const projectList = document.querySelectorAll('.project-container')
const videoImage = document.querySelectorAll('.video-image-container')


window.addEventListener('scroll', ()=>{

    projectList.forEach((item)=>{
        if(item.getBoundingClientRect().top < 370){

           $(item.firstElementChild).css({
            // scale: "1",
            transform: "scale(1, 1)"
            // opacity: "1"
           })

           $(item.lastElementChild).css({
            transform: "translateX(0)"
           })
           
        }//end of if

        else{

            $(item.firstElementChild).css({
                // scale: ".5",
                transform: "scale(.5, .5)"
                // opacity: ".2"
            })

            $(item.lastElementChild).css({
                transform: "translateX(103%)"
            })
        }//end of else
    })//end of each loop 
 
})//end of scroll funct