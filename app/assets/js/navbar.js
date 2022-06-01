// function mudaTamanhoNav(){
//     navbarHeight = document.querySelector(".navbar").offsetHeight
//     document.querySelector("main").style.marginTop = `${navbarHeight}px` 
// }
// var miniLogo;
// const miniLogoDark = "../css/simbulo_para_fundo_escuro.png"
// const miniLogoLight = "../css/simbulo_para_fundo_claro.png"
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
console.log(document.querySelector("#outro-conteudo").offsetTop);
// window.addEventListener("scroll", ()=>{
//     if(scrollY >= document.querySelector("#outro-conteudo").offsetTop){
//         document.querySelector(".navbar-logo").src = "./smbolo_para_fundo_escuro.png"
//     }
//     else{
//         document.querySelector(".navbar-logo").src = "../img/logo_para_fundo_escuro.png"
//     }
// })