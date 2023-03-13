const mousepo=document.querySelector(".getdegrees")
const body=document.querySelector("body")

window.addEventListener("mousemove",(e)=>{
    
    //get half of the width and height
    const w=window.innerWidth/2
    const h=window.innerHeight/2

    //get X,Y Mouse coordinates
    const x=e.clientX;
    const y=e.clientY;

    body.style=`background: rgb(251,255,177);
    background: radial-gradient(farthest-corner at ${x}px ${y}px, rgba(251,255,177,1) 0%, rgba(255,191,169,1) 75%, rgba(255,172,172,1) 100%) fixed;
    font-family: 'Josefin Sans', sans-serif;`
})

//function to get the degrees of the mouse relative to the screen