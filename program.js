
// navigation menu

(() =>{
  
const hamburgerbtn = document.querySelector(".burger"),
navmenu = document.querySelector(".nav-menu"),
closenavbtn = document.querySelector(".close-nav-menu");

hamburgerbtn.addEventListener("click" , shownavmenu);
closenavbtn.addEventListener("click" , hidenavmenu);
function shownavmenu(){
    navmenu.classList.add("open");
    bodyscrollingToggle();
}
function hidenavmenu (){
    navmenu.classList.remove("open");
    fadeouteffect(); 
    bodyscrollingToggle();
}
function fadeouteffect(){
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout(() => {
        document.querySelector(".fade-out-effect").classList.remove("active");
    }, 300);
}

document.addEventListener("click" , (event) => {
  if(event.target.classList.contains("link-item")){
      if(event.target.hash !==""){
          event.preventDefault();
          const hash = event.target.hash;
          console.log(hash)
          document.querySelector(".section.active").classList.add("hide");
          document.querySelector(".section.active").classList.remove("active");
          document.querySelector(hash).classList.add("active");
          document.querySelector(hash).classList.remove("hide")

          navmenu.querySelector(".active").classList.add(" outer-shadow", "hover-in-shadow");
          navmenu.querySelector(".active").classList.remove("active","inner-shadow");
          event.target.classList.add("active","inner-shadow");
          event.target.classList.remove(" outer-shadow", "hover-in-shadow");
          hidenavmenu();
      }
  }
  
})

})();


// ______________________________________________________________________________________________________

// //not working dont forget to remember this


// (() => {
//     const aboutSection = document.querySelector('.about-secton');
//     const tabcontainer = document.querySelector('.about-tabs');

//     tabcontainer.addEventListener("click", (event) => {
//         if (event.target.classList.contains('tab-items') &&
//             !event.target.classList.contains('active')) {

//             const target = event.target.getAttribute("data-target");
//             console.log(target)

//             tabcontainer.querySelector(".active").classList.remove("outer-shadow", "active");
            
//             event.target.classList.add("active", "outer-shadow");

//             aboutSection.querySelector(".tab-content.active").classList.remove("active");

//             aboutSection.querySelector(target).classList.add("active");
//         }
//     })
// })();

// function bodyscrollingtoggle(){
//     document.body.classList.toggle("stop-scrolling")
// }


// // ________________________________________________________________________________________________________________

// // portfolio filter and popup
// // _______________________________________________________________________________________________________________

// (() => {
//     const filterContainer = document.querySelector(".portfolio-filter"),
//     portfolioitemcontainer = document.querySelector(".portfolio-items"),
//    portfolioitems = document.querySelectorAll(".portfolio-item"),
//    portfoliopopup = document.querySelector(".portfolio-popup"),
//    prevbtn = document.querySelector(".pp-prev"),
//    nextbtn = document.querySelector(".pp-next"),
//    closebtn = document.querySelector(".pp-close"),
//    projectdetailscontainer = document.querySelector(".pp-details"),
//    projectdetailsbtn = document.querySelector(".pp-project-detail-btn");

//    let itemindex,slideindex ,screenshots;

// //    ____________________________________

// filterContainer.addEventListener("click",(event)=>{
//     if(event.target.classList.contains("filter-item")&& 
//     ! event.target.classList.contains("active")){
        
//     // deactivate existing active - filter
//     filterContainer.querySelector(".active").classList.remove("outer-shadow" , "active")
//     // activale new filter item------
//     event.target.classList.add("active" , "outer-shadow");
//     const target = event.target.getAttribute("data-target");
//     portfolioitems.forEach((item) => {
//        if(target === item.getAttribute("data-category") || target === 'All'){
//            item.classList.remove('hide');
//            item.classList.add('show');
//        }
//        else{
//         item.classList.remove('show');
//         item.classList.add('hide');
//        }
//     })
//     }

// })

// portfolioitemcontainer.addEventListener("click" ,(event) => {
//       if(event.target.closest(".portfolio-item-inner")){
//           const portfolioitem = event.target.closest(".portfolio-item-inner").parentElement;
          
        
//         itemindex = Array.from(portfolioitem.parentElement.children).indexOf(portfolioitem);
//         screenshots = portfolioitems[itemindex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots")
//         screenshots = screenshots.split(",")
//         slideindex = 0;
//         popupToggle();
//     }
// })

// closebtn.addEventListener("click" ,() => {
//     popupToggle();
//     popupslideshow();
// })


// function  popupToggle(){
//   popup.classList.toggle("open");
//   bodyscrollingtoggle();
// }



// })();




// // ___________________________________________________________________________________________________________

// //                       testimonial slide
// // ____________________________________________________________________________________________________________


// (() =>{
//        const sliderContainer = document.querySelector(".testi-slider-container"),
//        slides = sliderContainer.querySelectorAll(".testi-item"),
//        slidewidth = sliderContainer.offsetwidht,
//        prevbtn = document.querySelector(".testi-slider-nav .prev"),
//        nextbtn = document.querySelector(".testi-slider-nav .next");
//        let slideindex = 0;
//        slides.forEach((slide) =>{
//             console.log(slide)
//        })
// sliderContainer.style.width = slidewidth * slides.length + "px";
       

// })();


// ____________________________________________________________________________________________________

(() => {
    const sections = document.querySelectorAll(".section")
    sections.forEach((section) =>{
        if(!section.classList.contains("active")){
            section.classList.add("hide")
        }
    })

})();