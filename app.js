
window.addEventListener("scroll", () => {
  let nav = document.querySelector(".nav")
    
    if (window.scrollY > 100) {
      nav.classList.add("nav-fixed");
    } else {
      nav.classList.remove("nav-fixed");
    }
  });
// toggle menu

//carrossel

document.addEventListener("DOMContentLoaded", function () {
  const carrosselContainer = document.querySelector(".carrossel-container")
  let currentIndex = 0;

  function showImage(index) {
    const newPosition = -index * 100 + "%";
    carrosselContainer.style.transform = "translateX(" + newPosition + ")"
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % carrosselContainer.children.length
    showImage(currentIndex)
  }

  function prevImage() {
    currentIndex =
      (currentIndex - 1 + carrosselContainer.children.length) %
      carrosselContainer.children.length;
    showImage(currentIndex)
  }

  setInterval(nextImage, 5000)
});


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