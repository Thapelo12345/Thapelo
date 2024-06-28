//adding list elements
const serviceList = ["HTML", "CSS", "JAVASCRIPT", "JQUERY", "POSTGRES SQL", "REACT","NODE JS","C-SHARP", "Pytohn"]
const piclist = [
"./pics/html.png",
"./pics/CSS.png", 
"./pics/javascript.png",
"./pics/jquery.png",
"./pics/postgtes.png",
"./pics/react.png",
"./pics/node.png",
"./pics/c-sharp.png",
"./pics/Python.png"
]
let pargraphs = [
    "As a web developer, I traverse the digital realm, sculpting the virtual landscapes where ideas come to life. Each line of code is a brushstroke, every function a melody in the symphony of technology. My journey began with a spark of curiosity and has evolved into a passionate pursuit of innovation and creativity.",
    "At the heart of my craft lies the art of problem-solving. Whether it's building responsive layouts that adapt seamlessly to any screen size or optimizing performance for lightning-fast load times, every challenge is an opportunity to flex my mental muscles and engineer elegant solutions. With each problem conquered, I grow stronger, more adept at navigating the ever-changing currents of the web.",
    "But web development is more than just lines of code; it's a collaborative dance with designers, content creators, and stakeholders. Communication is key as we work together to transform concepts into tangible digital experiences. Through brainstorming sessions and endless iterations, we shape raw ideas into polished gems that captivate and inspire.",
    "In the world of web development, staying on the cutting edge is paramount.Technologies evolve at breakneck speed, and keeping pace requires a voracious appetite for learning. From mastering new programming languages to exploring emerging frameworks and tools, I embrace the challenge of constant growth, knowing that each new skill opens doors to exciting possibilities.",
    "Yet amidst the complexity and innovation, the essence of web development remains rooted in simplicity. Stripping away the layers of abstraction, I find beauty in the elegance of clean code and intuitive design. Every line serves a purpose, every element meticulously crafted to enhance the user experience and bring joy to those who interact with our creations.",
    "As a web developer, I am more than a coder, I am a digital architect, shaping the future one keystroke at a time. With each project, I leave a mark on the vast canvas of the internet, a testament to the endless possibilities of human ingenuity. And as I continue to hone my craft, I look forward to the adventures that lie ahead, knowing that the journey is just beginning."
    ]
//done with list

function inputServices(){
    if(!mobiScreen){

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
count = 0
    }//end of if pc code 
    else{}//end of else mobile code
}//end of service input

function inputContacts(){

    let Email  = document.createElement('h5')
    Email.innerHTML = "EMAIL ADDRESS"
    Email.className = "headings"
    $("#screen-infor").append(Email)

    let email = document.createElement('h6')
    email.innerHTML = "pmanskhosana@gmail.com"
    email.className = "values"
    $("#screen-infor").append(email)

    let Phone  = document.createElement('h5')
    Phone.innerHTML = "CELLPHONE"
    Phone.className = "headings"
    $("#screen-infor").append(Phone)

    let phone = document.createElement('h6')
    phone.innerHTML = "063 893 7422"
    phone.className = "values"
    $("#screen-infor").append(phone)

    $(".headings").css({
        color: "white",
        fontSize: "90%",
        margin: "3%",
        padding: "0",
        })
        $(".values").css({
        color: "white",
        fontSize: "85%",
        marginTop: "0",
        padding: "0"
        })

    
}//end of conatct input

function inputAbout(){

        pargraphs.forEach((item)=>{
            let para = document.createElement('p')
            para.innerHTML = item
        
            //setting up paragraphs style
           $(para).css({
            color: "white",
            margin: "2%",
            textShadow: "1px 1px 2px black",
            fontWeight: "bold",
            fontSize: "99%"
           })
           //done setting paragraph style
            $("#screen-infor").append(para)
        })
        
}//end of about input