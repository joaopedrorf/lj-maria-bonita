// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Função para inicializar sliders de produtos
    function initProductSliders() {
        const sliders = document.querySelectorAll('.product-slider');
        sliders.forEach(slider => {
            // Adicione a lógica para inicializar cada slider
        });
    }

    // Função para validar formulários
    function validateForm(form) {
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        return isValid;
    }

    // Manipulação de eventos para o envio de formulários
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateForm(contactForm)) {
                // Enviar o formulário
                alert('Formulário enviado com sucesso!');
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    }

    // Inicializar sliders ao carregar a página
    initProductSliders();
});