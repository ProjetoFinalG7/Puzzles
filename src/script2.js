//ANIMAÇÃO DO CARROCEL

// Aqui está sendo definido as variáveis que irão armazenar elementos do HTML por meio de seus IDs ou classes.
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

// Este código adiciona um "listener" para o evento "click" do botão "nextButton", 
//e quando ocorre um click, é feito um cálculo para determinar a largura do slide atual e o valor do scroll é 
//incrementado com essa largura.

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

// Este código adiciona um "listener" para o evento "click" do botão "prevButton", e quando ocorre um click, 
//é feito um cálculo para determinar a largura do slide atual e o valor do scroll é decrementado com essa largura.
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
// função para passagem de slide
function nextSlide() {
    const slideWidth = slide.clientWidth;
    const maxScrollLeft = slidesContainer.scrollWidth - slidesContainer.clientWidth;
  
    // Verifica se já chegou no último slide e reinicia a exibição do carrossel
    if (slidesContainer.scrollLeft + slidesContainer.clientWidth >= maxScrollLeft) {
      slidesContainer.scrollLeft = 0;
    } else {
      slidesContainer.scrollLeft += slideWidth;
    }
  }
  
  setInterval(nextSlide, 8000); // troca de slide a cada 5 segundos
  
//****************************************************************************************** ******
  // PAGINA DE RESERVA FUNÇÃO EMAIL

  // exibe alerta quando enviar o formulario
  function exibirAlerta() {
    alert("Sua reserva foi realizada!");
  }
