/*!
 * Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Função para encolher a barra de navegação
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Encolhe a barra de navegação inicialmente
    navbarShrink();

    // Encolhe a barra de navegação quando a página é rolada
    document.addEventListener('scroll', navbarShrink);

    // Ativa o Bootstrap scrollspy no elemento de navegação principal
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Recolhe a barra de navegação responsiva quando o botão de alternância é visível
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Rolagem suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste para a altura da barra de navegação
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito de fade-in em elementos ao rolar
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);

    reveal();

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            if (validateForm()) {
                const formData = new FormData(contactForm);

                fetch('seu-endpoint-de-backend', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => {
                        if (response.ok) {
                            // Sucesso
                            alert('Formulário enviado com sucesso!');
                            contactForm.reset(); // Limpa o formulário
                        } else {
                            // Erro
                            alert('Falha no envio do formulário.');
                        }
                    })
                    .catch(error => {
                        console.error('Erro:', error);
                        alert('Ocorreu um erro durante o envio do formulário.');
                    });
            }
        });
    }

    const delayedElement = document.getElementById('delayedElement');
    if (delayedElement) {
        setTimeout(() => {
            delayedElement.classList.add('delayed-animation');
        }, 2000);
    }

    function validateForm() {
        const name = contactForm.querySelector('[name="name"]').value;
        const email = contactForm.querySelector('[name="email"]').value;
        const message = contactForm.querySelector('[name="message"]').value;

        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return false;
        }

        return true;
    }

});