topSlide=document.querySelector(".top")
slideContainer=document.querySelector(".slide-container")
slideInner = document.querySelector(".slide")
window.addEventListener("scroll",function(){
    if(isInViewport(slideContainer)){
        slideInner.style.position = "fixed";
        slideInner.style.top=0;
        topSlide.style.top=0;
        topSlide.style.height = (window.scrollY - slideContainer.offsetTop)+"px";
    }else{
        slideInner.style.position = "relative";
        topSlide.style.height = "100vh";
        topSlide.style.top="100vh";
    }
})
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < 0 &&
        rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) 
    );
}

//detect .slidecontainer hits the top of the window
//make  .slidecontainer fixed 
//bring top layer above the bottom layer
//change height of the top layer