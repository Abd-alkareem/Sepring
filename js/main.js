
//format the toggel minu in the haeder
document.querySelector("header .minu").addEventListener("click",function(){
   document.querySelector("header .minu").classList.toggle("active"); 
   document.querySelector("header .links").classList.toggle("active"); 
});
document.querySelectorAll("header .links .pages a").forEach( a => {
      a.addEventListener("click",()=>{
         document.querySelector("header .minu").classList.remove("active"); 
         document.querySelector("header .links").classList.remove("active"); 
      })
} );
      
//format work section
document.querySelectorAll(".work .info .box").forEach((box,ind) => {
   box.addEventListener("click",() => {
      if(box.classList.contains("active")){
      box.classList.remove("active");
      document.querySelectorAll(".work .image img")[ind].classList.remove("active");
      } else {
         document.querySelectorAll(".work .info .box").forEach(b => {
            b.classList.remove("active");
         })
         box.classList.add("active");
         document.querySelectorAll(".work .image img").forEach(im => {
            im.classList.remove("active");
         })
         document.querySelectorAll(".work .image img")[ind].classList.add("active");
      }


   })
   




})

// format testimonial section
let boxWidth = document.querySelector(".testimonial .holder .box").clientWidth;
let holder = document.querySelector(".testimonial .holder");
let icons = document.querySelectorAll(".testimonial .wepper i");
let boxNum = document.querySelector(".testimonial .holder ").children.length;
let moveCount = 1;
icons.forEach((ele) => {
   ele.addEventListener("click",() => {
      if(ele.classList.contains("right-move")){
         holder.scrollLeft += boxWidth + 35;
         moveCount++;
         icons[1].classList.remove("stop");
         if(moveCount == boxNum ){
            icons[0].classList.add("stop");
         }
      } else if(ele.classList.contains("left-move")){
         holder.scrollLeft -= boxWidth + 35;
         moveCount--;
         icons[0].classList.remove("stop");
         if(moveCount == 1 ){
            icons[1].classList.add("stop");
         }
         
      }
   })
});
