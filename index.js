const mousepo=document.querySelector(".getdegrees")
const body=document.querySelector("body")

window.addEventListener("mousemove",(e)=>{
    
    //get half of the width and height
    const w=window.innerWidth/2
    const h=window.innerHeight/2

    //get X,Y Mouse coordinates
    const x=e.clientX;
    const y=e.clientY;

    //replace background style with changes in the gradien
    body.style=`background: rgb(251,255,177);
    background: radial-gradient(circle at ${x}px ${y}px, rgba(251,255,177,1) 0%, rgba(255,191,169,1) 75%, rgba(255,172,172,1) 100%) fixed;
    font-family: 'Josefin Sans', sans-serif;`
})

const etch=document.createElement("div",);
etch.classList.add("case");
bigcont=document.querySelector(".bigcontainer");
bigcont.appendChild(etch);

//gridbut=document.querySelector("button.rules")
//gridbut.addEventListener('click',function(e){
    
//})