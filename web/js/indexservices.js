//  let buttons = document.querySelectorAll(".service-btn");
//       let servicediv = document.querySelectorAll(".service-div");
//       buttons.forEach((button) => {
//         servicediv[1].style.display = "none";
//         servicediv[2].style.display = "none";
//         button.addEventListener("click", () => {
//           servicediv.forEach((div) => {
//             div.style.display = "none";
//           });
//           let target = button.getAttribute("data-target");
//           document.querySelector("." + target).style.display = "flex";
//         });
//       });





 const video = document.getElementById("bgVideo");
  const unmuteBtn = document.getElementById("unmuteBtn");

  unmuteBtn.addEventListener("click", () => {
    video.muted = false;   // unmute
    video.play();          // ensure it continues playing
    unmuteBtn.style.display = "none"; // hide button after enabling sound
  });