 let buttons = document.querySelectorAll(".service-btn");
      let servicediv = document.querySelectorAll(".service-div");
      buttons.forEach((button) => {
        servicediv[1].style.display = "none";
        servicediv[2].style.display = "none";
        button.addEventListener("click", () => {
          servicediv.forEach((div) => {
            div.style.display = "none";
          });
          let target = button.getAttribute("data-target");
          document.querySelector("." + target).style.display = "flex";
        });
      });