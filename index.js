// ======== Função congelar cabeçalho ========
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ====== Função para capturar o envio do formulário ======
const form = document.getElementById("formCadastro");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // impede o recarregamento da página

        const nome = document.getElementById("nome").value;

        // Mostra uma mensagem de sucesso
        const mensagem = document.getElementById("mensagem");
        mensagem.textContent = `✅ Obrigado, ${nome}! Seu cadastro foi enviado com sucesso.`;
        mensagem.style.display = "block";

        // Limpa o formulário
        form.reset();
    });
}

// ====== Funções para a página de projetos ======
function participar(projeto) {
    alert(`💪 Você demonstrou interesse em participar do projeto: ${projeto}! Entraremos em contato em breve.`);
}

function doar(projeto) {
    alert(`💖 Obrigado por querer ajudar o projeto: ${projeto}! Em breve, adicionaremos opções de doação.`);
}



