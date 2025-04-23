document.querySelector('input[type="checkbox"]').addEventListener('change', function() {
    const header = document.querySelector('header');
    if (this.checked) {
        header.style.transitionDelay = '0s'; // No delay when changing to the new color
        header.style.backgroundColor = 'rgb(190, 22, 123)';
    } else {
        header.style.transition = 'background-color 0.2s ease'; // Smooth transition for background color
        header.style.transitionDelay = '0.5s'; // Delay of 0.5s before resetting to default
        header.style.backgroundColor = ''; // Reset to default
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtém o nome da página atual (ex: home, about, contact)
    const currentPage = document.location.pathname.split("/").pop().split(".")[0];
  
    // Percorre todos os botões de navegação
    document.querySelectorAll(".nav-button").forEach(link => {
      // Verifica se o botão corresponde à página atual
      if (link.getAttribute("data-page") === currentPage) {
        // Adiciona a classe "active" ao botão
        link.classList.add("pagina-ativa");
      }
    });
  });