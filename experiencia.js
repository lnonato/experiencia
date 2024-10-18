document.addEventListener("DOMContentLoaded", function () {
    document.title = "Experiência Day Imports";

    // Verificar se o elemento com a classe .footer-legal existe
    var divRowFluid = document.querySelector(".footer-legal");
    if (divRowFluid) {
        divRowFluid.innerHTML = "";
        var novoConteudo = '<div class="container"><div class="copyright">COPYRIGHT DAY IMPORTS - 37.172.637/0001-75 TODOS OS DIREITOS RESERVADOS.</div></div>';
        divRowFluid.innerHTML = novoConteudo;
    }

    var imagem = document.getElementById("imagem");
    if (imagem) {
        imagem.addEventListener("click", function () {
            window.location.href = "https://dayimports.com.br/";
        });
    }
});

var isModalOpen = false;
var lastScrollTop = 0;

function openModal() {
    if (!isModalOpen) {
        var modal = document.getElementById("modalCupom");
        if (modal) {
            modal.style.display = "block";
            isModalOpen = true;

            // Fechar o modal ao clicar fora do conteúdo
            modal.addEventListener("click", function (event) {
                if (event.target === modal) {
                    closeModal();
                }
            });
        }
    }
}

window.addEventListener("scroll", function () {
    var footer = document.querySelector(".copyright");
    if (!footer) return; // Verificar se o footer existe

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Abrir modal quando o rodapé ficar visível e o usuário estiver rolando para baixo
    if (scrollTop > lastScrollTop && !isModalOpen && footer.getBoundingClientRect().top <= window.innerHeight) {
        setTimeout(openModal, 3000); // Aguardar 3 segundos antes de abrir o modal
    }

    lastScrollTop = scrollTop;
});

function closeModal() {
    var modal = document.getElementById("modalCupom");
    if (modal) {
        modal.style.display = "none";
        isModalOpen = false;
    }
}
