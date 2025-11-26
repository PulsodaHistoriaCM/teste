import { auth } from "./firebase-init.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Import correto do banco modular
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const db = getDatabase();

// ELEMENTOS DO HEADER
const loginBtn = document.querySelector(".btn-login");
const saudacao = document.querySelector(".saudacao-usuario");
const menuPerfil = document.querySelector(".menuPerfil");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    if (menuPerfil) menuPerfil.style.display = "block";

    // Buscar nome no banco
    const userRef = ref(db, "users/" + user.uid);
    const snapshot = await get(userRef);

    let nome = "Usuário";

    if (snapshot.exists()) {
      const data = snapshot.val();
      nome = data.nome || nome;
    }

    if (saudacao) saudacao.textContent = `Olá, ${nome}!`;

    // estilos só se o elemento existir
    if (saudacao) {
      saudacao.style.color = "#000";
      saudacao.style.marginTop = "15px";
      saudacao.style.marginRight = "-110px";
    }

    // Botão virar logout
    if (loginBtn) {
      loginBtn.textContent = "Sair";
      loginBtn.classList.add("btn-logout");
      loginBtn.removeAttribute("href");

      loginBtn.onclick = () => {
        signOut(auth).then(() => location.reload());
      };
    }

  } else {
    if (menuPerfil) menuPerfil.style.display = "none";
    if (saudacao) saudacao.textContent = "";

    if (loginBtn) {
      loginBtn.textContent = "Login";
      loginBtn.classList.remove("btn-logout");
      loginBtn.setAttribute("href", "/login");
      loginBtn.onclick = null;
    }
  }
});
