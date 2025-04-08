// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_DOMINIO.firebaseapp.com",
    projectId: "SEU_PROJETO",
    storageBucket: "SEU_BUCKET",
    messagingSenderId: "SEU_ID",
    appId: "SUA_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Capturar evento de submissão do formulário
document.getElementById("cadastroForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Evitar reload da página

    // Capturar valores dos inputs
    const nome = document.getElementById("nome").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const email = document.getElementById("email").value;
    const celular = document.getElementById("celular").value;
    const celularEmergencia = document.getElementById("celularEmergencia").value;
    const endereco = document.getElementById("endereco").value;
    const tipoSanguineo = document.getElementById("tipoSanguineo").value;
    const alergias = document.getElementById("alergias").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    
    // Capturar valores dos rádios
    const genero = document.querySelector('input[name="genero"]:checked')?.value || "Não informado";
    const cardiaco = document.querySelector('input[name="cardiaco"]:checked')?.value || "Não informado";

    // Validar senha
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    // Criar um ID baseado no e-mail (removendo caracteres inválidos)
    const userId = email.replace(/[^a-zA-Z0-9]/g, "");

    // Salvar no Firestore
    try {
        await setDoc(doc(db, "usuarios", userId), {
            nome,
            dataNascimento,
            email,
            celular,
            celularEmergencia,
            endereco,
            tipoSanguineo,
            alergias,
            genero,
            cardiaco,
            status: "incompleto"
        });

        // Redirecionar para a segunda parte do cadastro
        window.location.href = "/templates/cadastro2.html";
    } catch (error) {
        console.error("Erro ao salvar dados:", error);
        alert("Erro ao salvar. Tente novamente.");
    }
});
