(function(){
    emailjs.init("DamTBSCYKW4vlc8Yo"); //use your USER ID
    })();
    function enviaEmail(e){
        event.preventDefault();
        var templateParams = {
            nome: document.getElementById("nome-contato").value,
            email: document.getElementById("email-contato").value,
            assunto: document.getElementById("assunto-contato").value,
            mensagem: document.getElementById("contato-mensagem").value,
        };
        emailjs.send('service_tcsdy1j', 'template_hy3vkh6', templateParams) //use your Service ID and Template ID
        .then(function(response) {
            alert("Email enviado com sucesso!")
            window.location.reload();
        }, function(error) {
            alert("Email não enviado, tente novamente!")
            window.location.reload();
        });
    }