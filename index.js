const projects = [
    { id: 1, title: "Alimentar e Educar", summary: "Projeto de apoio a crianças", amountNeeded: 5000 },
    { id: 2, title: "Casa Acolhedora", summary: "Apoio a mulheres em vulnerabilidade", amountNeeded: 3000 },
];

function renderProjects() {
    const ul = document.getElementById('projects-list');
    ul.innerHTML = '';
    projects.forEach(p => {
        const li = document.createElement('li');
        li.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      <p class="muted">Meta: R$ ${p.amountNeeded}</p>
      <div>
        <button class="btn donate" data-id="${p.id}">Doar</button>
        <a href="projeto.html?id=${p.id}" class="btn btn-secondary">Ver projeto</a>
      </div>
    `;
        ul.appendChild(li);
    });
}

document.addEventListener('click', (e) => {
    if (e.target.matches('.donate')) {
        const id = e.target.dataset.id;
        openDonationModal(id);
    }
});

function openDonationModal(id) {
    const modal = document.getElementById('donation-modal');
    modal.setAttribute('aria-hidden', 'false');
    modal.dataset.projectId = id;
}

document.getElementById('close-modal').addEventListener('click', () => {
    const modal = document.getElementById('donation-modal');
    modal.setAttribute('aria-hidden', 'true');
    document.getElementById('donation-success').hidden = true;
    document.getElementById('donation-form').hidden = false;
});

document.getElementById('donation-form').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const name = document.getElementById('donor-name').value.trim();
    const amt = Number(document.getElementById('donation-amount').value);
    if (!name || amt <= 0) { alert('Preencha corretamente.'); return; }
    document.getElementById('donation-form').hidden = true;
    document.getElementById('donation-success').hidden = false;
});

// abrir formulário voluntário (exemplo)
document.getElementById('open-volunteer').addEventListener('click', () => {
    window.location.href = 'projetos.html#voluntario';
});

renderProjects();
