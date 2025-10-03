
      function showContainer(id){
 document.querySelectorAll(".section").forEach(element => {
        element.classList.remove("activediv")
        document.getElementById(id).classList.add("activediv")
       
      })

      document.querySelectorAll(".sidebarmenu li").forEach((list)=>{
list.classList.remove("activee")
event.target.classList.add("activee");
      })
      }
     
      let slidemenubtn= document.querySelector(".bi-arrow-right-circle")
      slidemenubtn.addEventListener("click",()=>{
        document.querySelector(".sidebar").classList.toggle("showing")
        slidemenubtn.classList.toggle("activeicon")
       })
      
    let totalpurchase = 5500;
    let level = [2500, 7500, 15000, 30000, 60000, 100000];
    let newpercent = 0;
let coupons = document.querySelectorAll(".couponcard") ;

level.forEach((milestone, idx) => {
  if (totalpurchase >= milestone && coupons[idx]) {
    coupons[idx].classList.add("no-after"); // remove blur for unlocked coupons
  }
});

    // calculate percentage
    if (totalpurchase <= level[0] && totalpurchase > 0) {
      newpercent = (totalpurchase / level[0]) * 16.67;
      if(totalpurchase == level[0]){
coupons[0].classList.add("no-after")
      }
    } else if (totalpurchase <= level[1]) {
      newpercent = 16.67 + ((totalpurchase - level[0]) / (level[1] - level[0])) * 16.67;
    } else if (totalpurchase <= level[2]) {
      newpercent = 33.34 + ((totalpurchase - level[1]) / (level[2] - level[1])) * 16.67;
    } else if (totalpurchase <= level[3]) {
      newpercent = 50.01 + ((totalpurchase - level[2]) / (level[3] - level[2])) * 16.67;
    } else if (totalpurchase <= level[4]) {
      newpercent = 66.68 + ((totalpurchase - level[3]) / (level[4] - level[3])) * 16.67;
    } else if (totalpurchase <= level[5]) {
      newpercent = 83.35 + ((totalpurchase - level[4]) / (level[5] - level[4])) * 16.67;
    } else {
      newpercent = 100;
    }

    // update bar
    document.querySelector(".trackerparent")
      .style.setProperty("--progress", newpercent + "%");

    // fill points reached
    const points = document.querySelectorAll(".trackerparent .points");
    points.forEach((p, idx) => {
      let milestone = idx === 0 ? 0 : level[idx - 1];
      if (totalpurchase >= milestone) {
        p.classList.add("filled");
      }
    });