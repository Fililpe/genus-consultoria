window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav")
    
    if (window.scrollY > 100) {
      nav.classList.add("nav-fixed");
    } else {
      nav.classList.remove("nav-fixed");
    }
  });

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
