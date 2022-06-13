(function(){
    emailjs.init("_QwSRG-H6wvi3fA9J"); //use your USER ID
    })();
    function enviaEmail(e){
        event.preventDefault();
        var templateParams = {
            nome: document.getElementById("nome-contato").value,
            email: document.getElementById("email-contato").value,
            assunto: document.getElementById("assunto-contato").value,
            mensagem: document.getElementById("contato-mensagem").value,
        };
        emailjs.send('service_qmuxje5', 'template_mf2fouj', templateParams) //use your Service ID and Template ID
        .then(function(response) {
            alert("Email enviado com sucesso!")
            window.location.reload();
        }, function(error) {
            alert("Email não enviado, tente novamente!")
            window.location.reload();
        });
    }