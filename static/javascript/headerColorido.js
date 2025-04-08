document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector("#header");

    // Verifica se a página NÃO é a Home e adiciona a classe 'rolagem' imediatamente
    if (window.location.pathname !== "/" && window.location.pathname !== "/index.html") {
        header.classList.add("rolagem");
    }   
});