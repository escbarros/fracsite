// function mudaTamanhoNav(){
//     navbarHeight = document.querySelector(".navbar").offsetHeight
//     document.querySelector("main").style.marginTop = `${navbarHeight}px` 
// }
var menuOpen = false;
var navbarHeight = document.querySelector(".navbar").offsetHeight
// mudaTamanhoNav()
document.querySelector(".navbar-hamburger").addEventListener("click", ()=>{
    console.log("a");
    menuOpen ? document.querySelector(".navbar").classList.remove("open") : document.querySelector(".navbar").classList.add("open");
    menuOpen = !menuOpen
    // mudaTamanhoNav()
})
document.querySelector('main').addEventListener("click", ()=>{
    console.log("teste");
    if(menuOpen){
        document.querySelector(".navbar").classList.remove("open")
        // mudaTamanhoNav()
    } 
})