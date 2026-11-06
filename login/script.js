const formulario = document.getElementById("loginForm");
const loading = document.getElementById("loading");
const mensagemErro = document.getElementById("mensagem-erro");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const dots = document.querySelector(".dots");

/* =================================
   ANIMAÇÃO DOS PONTINHOS
================================= */
let count = 1;
setInterval(function() {
    count++;
    if (count > 3) {
        count = 1;
    }
    if (dots) {
        dots.textContent = ".".repeat(count);
    }
}, 450);

/* =================================
   LOGIN SIMULADO (MOCK)
================================= */
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const valorUsuario = usuario.value.trim();
    const valorSenha = senha.value;

    // Oculta erros anteriores
    mensagemErro.style.display = "none";

    // 1. Validação local simples
    if (valorUsuario === "admin" && valorSenha === "1234") {

        // Exibe o carregamento
        loading.style.display = "flex";

        // 2. Cria um access_token falso (Simulado)
        const mockToken = btoa(JSON.stringify({
            user: valorUsuario,
            role: "admin",
            exp: Date.now() + 3600000
        }));

        // 3. Guarda o token no localStorage
        localStorage.setItem("access_token", `mock_bearer_${mockToken}`);

        // 4. Simula o tempo de resposta da API (1.5 segundos) e redireciona
        setTimeout(function() {
            window.location.href = "home.html"; // Altera para a tua página de destino
        }, 1500);

    } else {
        // Exibe o erro alinhado via flexbox
        mensagemErro.style.display = "flex";
    }
});