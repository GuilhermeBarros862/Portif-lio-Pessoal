document.getElementById("formulario-contato").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem");

    if (!mensagem) {
        mensagem = document.createElement("p"); // Cria o elemento se não existir
        mensagem.id = "mensagem";
        document.getElementById("formulario-contato").appendChild(mensagem);
    }

    if (nome === "" || email === "") {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        mensagem.style.color = "red";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mensagem.textContent = "Por favor, insira um e-mail        válido.";
        mensagem.style.color = "red";
        return;
}

    mensagem.textContent = "Formulário enviado com sucesso!";
    mensagem.style.color = "green";
});