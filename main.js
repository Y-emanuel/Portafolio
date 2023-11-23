// script.js

function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth"
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const enlacesMenu = document.querySelectorAll('.navegador__botones');
  
    enlacesMenu.forEach(enlace => {
      enlace.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        smoothScroll(targetId);
      });
    });
  });
  