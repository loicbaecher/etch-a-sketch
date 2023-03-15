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

//when clicking on the button, create grid
gridbut=body.querySelector("button.rules");

gridbut.addEventListener('click',function(e){
    cont=body.querySelector("div.flexcontai")
    cont.style.border="solid black";
    val=body.querySelector('div.gridval',);
    nb=Math.min(1000,parseInt(val.textContent));
    nb=Math.pow(Math.round(Math.sqrt(parseInt(nb))),2)
    val.textContent=nb;

    bigcont=document.querySelector(".bigcontainer");

    while(bigcont.firstChild){
        bigcont.removeChild(bigcont.firstChild);
    }

    bigcont.style.display="grid";
    bigcont.style.gridTemplateColumns=`repeat(${Math.sqrt(nb)},1fr)`;
    bigcont.style.gridAutoRows=`${500/(Math.sqrt(nb))}px`;
    var i=1
    while(i<nb+1){
    var etch=document.createElement("div",);
    etch.classList.add("case");
    etch.setAttribute("id",`case${i}`);
    bigcont.appendChild(etch);
    i++
    }


    //in order to observe the squares
    allcases=document.querySelectorAll(".case")
    allcases2=Array.from(allcases)
    allcases2.forEach(x => {
        x.addEventListener('mouseover',function(e){
            e.target.style.backgroundColor="black";
        })
    });
    

})

