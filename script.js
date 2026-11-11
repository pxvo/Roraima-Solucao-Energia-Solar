document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    const solarForm = document.getElementById('solarForm');

    // Menu Mobile
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Formulário integrado ao WhatsApp
    if (solarForm) {
        solarForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = document.getElementById('nome').value;
            const cidade = document.getElementById('cidade').value;
            const tipo = document.getElementById('tipo').value;
            const valorConta = document.getElementById('valorConta').value;

            const numeroWhatsApp = '5595981109379';

            const mensagem = `Olá! Gostaria de solicitar um orçamento gratuito.\n\n` +
                             `*Nome:* ${nome}\n` +
                             `*Cidade:* ${cidade}\n` +
                             `*Tipo de Projeto:* ${tipo}\n` +
                             `*Valor médio da conta:* R$ ${valorConta}`;

            const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

            window.open(url, '_blank');
        });
    }
});