
 const videos = document.querySelectorAll(".bgVideo");
  const unmuteBtn = document.querySelectorAll(".unmuteBtn");
// unmuteBtn.forEach((btn)=>{
//  btn.addEventListener("click", () => {
//     video.muted = false;   // unmute
//     video.play();          // ensure it continues playing
//     btn.style.display = "none"; // hide button after enabling sound
//   });
// })
 
  unmuteBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      videos.forEach((v)=>{
        v.muted=true;
       unmuteBtn.forEach((b)=>{
        b.style.display="inline-block"
       })
      }
      )
      const video = videos[index];  // get the matching video
      video.muted = false;          // unmute only this video
      video.play();                 // ensure it plays
      btn.style.display = "none";   // hide button
    });
  });

  