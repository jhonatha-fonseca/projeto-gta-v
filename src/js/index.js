const botaoPlataforma = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botaoPlataforma.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});

