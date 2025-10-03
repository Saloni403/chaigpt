 document.querySelector(".signupp").addEventListener("click",()=>{
document.querySelector(".Signup-box").style.display="block"
document.querySelector(".login-box").style.display="none"
      })

       document.querySelector(".loginn").addEventListener("click",()=>{
document.querySelector(".Signup-box").style.display="none"
document.querySelector(".login-box").style.display="block"
      })
      function hideform(){
        document.querySelector(".login-container").style.opacity="0"
        document.querySelector(".login-container").style.visibility="hidden"
      }
      function showform(){
         document.querySelector(".login-container").style.opacity="1"
        document.querySelector(".login-container").style.visibility="visible"
      }

     window.addEventListener("load", () => {
      setTimeout(() => {
        let ooverlay = document.querySelector(".login-container")
        
       ooverlay.style.opacity="1"
     ooverlay.style.visibility="visible"
        
       
      }, 5000);
    });