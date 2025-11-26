//INICIALIZAÇÃO PADRÃO DO BANCO
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCMCR42h8ZM4ao4D5MSTZkg99PIhspSAZE",
    authDomain: "pulso-da-historia.firebaseapp.com",
    databaseURL: "https://pulso-da-historia-default-rtdb.firebaseio.com",
    projectId: "pulso-da-historia",
    storageBucket: "pulso-da-historia.appspot.com",
    messagingSenderId: "285634655113",
    appId: "1:285634655113:web:7e97210e9c6b2878d96758"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

import { setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
setPersistence(auth, browserLocalPersistence);
