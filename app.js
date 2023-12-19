
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav")
    
  
    if (window.scrollY > 100) {
      nav.classList.add("nav-fixed");
    } else {
      nav.classList.remove("nav-fixed");
    }
  });

