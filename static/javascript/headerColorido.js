document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector("#header");
    let userNames = document.querySelectorAll("#user-name");

    // Verifica se a página não é a home e adiciona a classe 'rolagem'
    if (window.location.pathname !== "/" && window.location.pathname !== "/index.html") {
        header.classList.add("rolagem");
        userNames.classList.add("rola");
    }   
});