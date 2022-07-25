// hiding navbar when scroll down while showing when scroll up
// var lastScrollTop=0;
navbar = document.getElementById("nav-bar");


// window.addEventListener("scroll",function(){
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
//     if (!document.getElementById("navbarTogglerDemo02").classList.contains("show")) {
//         if(scrollTop > lastScrollTop){
//             navbar.style.top = "-125px";
//         } else {
            
//             navbar.style.top = "0";
//         }
//         lastScrollTop = scrollTop;    
//     }
//     });  

// nav bar fixed at top of the page and hide it down
window.addEventListener("scroll",function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
        navbar.style.top = "-625px";
    } else {
        navbar.style.top = "0";
    }
}
);