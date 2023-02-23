function repeat(){
    const container=document.querySelector(".container");
    
for(let i=0;i<32;i++){
const colorcontainerEl=document.createElement("div");
colorcontainerEl.classList.add("color-container");
container.appendChild(colorcontainerEl);

let a=randomcolor();
colorcontainerEl.style.backgroundColor="#"+a;
}

function randomcolor(){
    const chars="0123456789abcdef";
    const colorcodelength=6;
    let colorcode="";
    for(let i=0;i<colorcodelength;i++){
        const randomnum=Math.floor(Math.random()*chars.length);
       colorcode=colorcode+chars.substring(randomnum,randomnum+1);
   
       
    }
    return colorcode;
}
setTimeout(function(){
   window.location.reload(1);
},2000)
}
repeat()