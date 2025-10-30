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

// Função alternativa para capturar o nome do projeto diretamente do elemento clicado
function participar(elemento) {
  const nomeProjeto = elemento.parentElement.querySelector("h3").innerText;
  alert(`💪 Você demonstrou interesse em participar do projeto: ${nomeProjeto}!`);
}

function participar(elemento) {
  event.preventDefault(); // impede o comportamento padrão do link
  const nomeProjeto = elemento.parentElement.querySelector("h3").innerText;
  alert(`💪 Você demonstrou interesse em participar do projeto: ${nomeProjeto}!`);
}

function doar(elemento) {
  event.preventDefault(); // impede o comportamento padrão do link
  const nomeProjeto = elemento.parentElement.querySelector("h3").innerText;
  alert(`💖 Obrigado por querer ajudar o projeto: ${nomeProjeto}! Em breve, adicionaremos opções de doação.`);
}

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul.menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});


