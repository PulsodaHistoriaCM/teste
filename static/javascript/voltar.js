// Mostrar/esconder botão ao rolar a página
window.onscroll = function() {
    let botao = document.getElementById("btnTopo");
    if (document.documentElement.scrollTop > 300) {
        botao.style.display = "block";
    } else {
        botao.style.display = "none";
    }
};

// Função para voltar ao topo com efeito suave
function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}