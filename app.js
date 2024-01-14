  // toggle menu
window.addEventListener("scroll", () => {
  let nav = document.querySelector(".nav")
    
    if (window.scrollY > 100) {
      nav.classList.add("nav-fixed");
    } else {
      nav.classList.remove("nav-fixed");
    }
  });
  // toggle menu


//

//carrossel

// const box = document.querySelector(".carrossel-container")
// const carrosselImagens = document.querySelectorAll (".carrossel-container img")

// let contadorCarrosel = 0

// function slider() {
//   contadorCarrosel++

//   if (contadorCarrosel > carrosselImagens.length - 1) {
//     contadorCarrosel = 0
//   }

//   box.style.transform = `translateX(${-contadorCarrosel * 1250}px)`
  
// }

// setInterval(slider, 5000 ) //ms




document.addEventListener("DOMContentLoaded", function () {
  const carrosselContainer = document.querySelector(".carrossel-container");
  let currentIndex = 0;

  function showImage(index) {
    const newPosition = -index * 100 + "%";
    carrosselContainer.style.transform = "translateX(" + newPosition + ")";
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % carrosselContainer.children.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex =
      (currentIndex - 1 + carrosselContainer.children.length) %
      carrosselContainer.children.length;
    showImage(currentIndex);
  }

  // Intervalo para trocar as imagens automaticamente (opcional)
  setInterval(nextImage, 5000); // Muda a cada 5 segundos, ajuste conforme necessário
});



//carrossel


  

  // cookies
var msgCookies = document.getElementById("cookies-msg")

function aceito() {
  localStorage.lgpd = "sim"
  msgCookies.style.display = "none"
}

if (localStorage.lgpd == "sim") {
  msgCookies.style.display = "none"
} else {
  msgCookies.style.display = "block"
}
  // cookies
