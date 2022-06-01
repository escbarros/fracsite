// function mudaTamanhoNav(){
//     navbarHeight = document.querySelector(".navbar").offsetHeight
//     document.querySelector("main").style.marginTop = `${navbarHeight}px` 
// }
var menuOpen = false;
var navbarHeight = document.querySelector(".navbar").offsetHeight
// mudaTamanhoNav()
document.querySelector("#botaoMenu").addEventListener("click", ()=>{
    console.log("a");
    if(!menuOpen){
        document.querySelector(".navbar").classList.add("open")
        document.querySelector("#botaoMenu").classList.remove("fa-bars")
        document.querySelector("#botaoMenu").classList.add("fa-xmark")
    }else{
        document.querySelector(".navbar").classList.remove("open")
        document.querySelector("#botaoMenu").classList.add("fa-bars")
        document.querySelector("#botaoMenu").classList.remove("fa-xmark")
    }
    menuOpen = !menuOpen
    // mudaTamanhoNav()
})
document.querySelector('main').addEventListener("click", ()=>{
    console.log("teste");
    if(menuOpen){
        document.querySelector(".navbar").classList.remove("open")
        document.querySelector("#botaoMenu").classList.add("fa-bars")
        document.querySelector("#botaoMenu").classList.remove("fa-xmark")
        // mudaTamanhoNav()
    } 
})