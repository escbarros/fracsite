document.getElementById("link-ps").addEventListener("click", (e)=>{
    const {target} = e;
    e.preventDefault();
    urlRoute();
})

const urlRoutes = {
    404:{
        template:"./pages/error404.html",
        title: " ",
        description: ""
    },
    '/':{
        template:"./index.html",
        title: " ",
        description: ""
    },
    '/processo-seletivo':{
        template:"./pages/processo-seletivo.html",
        title: " ",
        description: ""
    },
}

const urlRoute = (event)=>{
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({},"", event.target.href)
    urlLocationHandler()
}

const urlLocationHandler = async()=>{
    const location = window.location.pathname;
    if(location.lenght == 0) location = "/"

    const route = urlRoutes[location]||urlRoutes[404]
    const html = await fetch(route.template).then((response)=>response.text())
    document.querySelector("html").innerHTML = html;
}

urlLocationHandler();