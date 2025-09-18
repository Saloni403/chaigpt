
 const video = document.getElementById("bgVideo");
  const unmuteBtn = document.getElementById("unmuteBtn");

  unmuteBtn.addEventListener("click", () => {
    video.muted = false;   // unmute
    video.play();          // ensure it continues playing
    unmuteBtn.style.display = "none"; // hide button after enabling sound
  });

  