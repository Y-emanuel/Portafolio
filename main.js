// script.js
function smoothScroll(target) {
  const targetElement = document.querySelector(target);

  // Obtener la altura del h2
  const headerHeight = document.querySelector('h2').offsetHeight;

  window.scrollTo({
      top: targetElement.offsetTop - headerHeight - 5 * parseFloat(getComputedStyle(document.documentElement).fontSize),
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

  