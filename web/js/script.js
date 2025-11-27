let openmenu =document.querySelector(".openmenu")
let closemenu =document.querySelector(".closemenu")
let menu =document.querySelector(".menu")

openmenu.addEventListener("click",()=>{
    menu.style.right="0"
})
closemenu.addEventListener("click",()=>{
    menu.style.right="-350px"
})
// let infoformopen = document.querySelectorAll(".infoform")
// infoformopen.forEach((service)=>{
// service.addEventListener("click",()=>{
//     document.querySelector(".divvvv").style.display="block"
//     // window.body.style.overflow= ""
    
// })
// })