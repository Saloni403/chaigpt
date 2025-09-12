let openmenu =document.querySelector(".openmenu")
let closemenu =document.querySelector(".closemenu")
let menu =document.querySelector(".menu")

openmenu.addEventListener("click",()=>{
    menu.style.right="0"
})
closemenu.addEventListener("click",()=>{
    menu.style.right="-350px"
})