function mudaTemaPadrao(query){
    if(query.matches){
    document.documentElement.setAttribute("data-theme", "dark")
    }else{
    document.documentElement.setAttribute("data-theme", "light")
    }
}

function inicioSobre(){

    window.scrollTo(0, document.querySelector(".sobreOMej_chamada-titulo").offsetTop)
}
const query = window.matchMedia('(prefers-color-scheme:dark)');
console.log(query);
mudaTemaPadrao(query)

query.addEventListener("change", mudaTemaPadrao(query))

function voltaTopo(){
    window.scrollTo(0,0)
}
console.log(document.querySelector(".sobreOMej_chamada-titulo").offsetTop);
window.addEventListener("scroll", ()=>{
    if(window.scrollY >= document.querySelector(".sobreOMej_chamada-titulo").offsetTop - 250) document.querySelector("#botao-topo").style.display = "flex"
    else if(window.scrollY == 0) document.querySelector("#botao-topo").style.display = "none"
})