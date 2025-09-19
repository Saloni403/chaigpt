function showcatlist(){
document.querySelector(".soteascateg ul").classList.toggle("mystyle")
      }







      

 let categ = document.querySelectorAll(".soteascateg ul li");
      let ourproducts = document.querySelectorAll(".ourproducts");
      categ.forEach((btn) => {
        btn.addEventListener("click", () => {
          let mybtn = btn.getAttribute("data-category");
          ourproducts.forEach((product) => {
            let myproduct = product.getAttribute("data-category");
            product.style.display = "none";
            //    console.log(myproduct);
            //    console.log(mybtn);
            if (mybtn === "All") {
              product.style.display = "block";
            } else if (mybtn === myproduct) {
              product.style.display = "block";
            }
          });
        });
      });
      ourproducts.forEach((prod)=>{
        prod.style.cursor="pointer"
prod.addEventListener("click",()=>{
  document.querySelector(".proddesc").style.display="flex"
})
document.querySelector(".backk").addEventListener("click",()=>{
  document.querySelector(".proddesc").style.display="none"
})
      })

      





let addtocart = document.querySelectorAll(".cartpopup")
addtocart.forEach((cartpopup)=>{
cartpopup.addEventListener("click",(event)=>{
event.stopPropagation();
alert("item is added to cart")
})
})









