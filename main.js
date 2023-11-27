// Desplazamiento de secciones

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

//boton de estadisticas

// const estadisticas = {
//   html: 80,
//   css: 70,
//   javascript: 40,
//   github: 30,
//   bootstrap: 55
// }

// const boton = document.getElementById("estadisticas");

// boton.addEventListener("click", function creaEstadisticas() {
//     const estadisticasCajas = document.querySelectorAll(".estadisticas__porcentaje");

//     estadisticasCajas.forEach((caja, index) => {
//         const tecnologia = caja.previousElementSibling.getAttribute("alt");
//         const porcentaje = estadisticasDatos[tecnologia];

//         caja.style.width = porcentaje + "%";
//         caja.innerText = porcentaje + "%";
//     });
// });
