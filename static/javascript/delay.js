document.getElementById("btnLogin").addEventListener("click", function() {
    // Mostra a mensagem de carregamento
    document.getElementById("mensagem").style.display = "block";
    
    // Aguarda 2 segundos antes de redirecionar
    setTimeout(function() {
        window.location.href = "/templates/logado.html"; 
    }, 2000);
});
