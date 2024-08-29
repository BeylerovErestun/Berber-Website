const bars = document.querySelector(".fa-bars")
const nav = document.querySelector("nav")

bars.addEventListener("click",()=>{
    if (nav.hasAttribute("style") === false) {
        nav.style.top = "0px"
    }else {
        nav.style.top = "-100%"
        nav.removeAttribute("style") 
    }
})