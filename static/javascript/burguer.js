const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');

// Ao clicar no botão hambúrguer
hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('ativado');
    menu.classList.toggle('ativado');
});