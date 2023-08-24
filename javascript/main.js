const toggleMemu = document.querySelector(".nav__menu-content");
const overlay = document.querySelector(".overlay");
const thumbs = document.querySelector(".thumbs");
const headerImage = document.querySelector(".image__main");
const headerParagraph = document.querySelector(".paragraph");

const defaultProductName = "Frappuccino";
const defaultProductDate = 1995;

let isOpen = false;

const paragraphContainer = document.querySelector(".tittle__paragraph");

const html = `<p>
The ${defaultProductName} was introduced by Starbucks in ${defaultProductDate}. It was a
successful combination of coffee and iced drink, and became a
popular Starbucks menu item.
</p>`;
paragraphContainer.innerHTML = html;

// ABRIR Y CERRAR MENU TOGGLE
toggleMemu.addEventListener("click", (e) => {
  if (!isOpen) {
    toggleMemu.src = "image/iconos/icons8-eliminar-30.png";
    overlay.style.display = "block";

    isOpen = true;
  } else {
    toggleMemu.src = "image/iconos/icons8-menú-50.png";

    overlay.style.display = "none";

    isOpen = false;
  }
});

// La delegacion de evento implica asignar un controlador de evento a un contenedor padre, en lugar de los elementos individuales
thumbs.addEventListener("click", (e) => {
  // La imagen de header

  // Buscar el elemento mas cercano a traves de la funcion closet que compla con el selector
  let image = e.target.closest(".thumb");
  let Smallsrc = image.src;

  let fileName = Smallsrc.split("/").pop(); // Obtener el ultimo fragmento del array creado

  // Extraer el número del nombre del archivo (suponiendo que la estructura sea thumbX.png)
  let numberThumb = fileName.match(/\d+/)[0]; // Expresion regular para extraer el numero
  let numberImage = headerImage.src.split("/").pop().match(/\d+/)[0];
  let large = `http://127.0.0.1:5500/image/productos/img${numberThumb}.png`;
  headerImage.src = large;

  let title__big = document.querySelector(".title__big");

  let producto;
  let date;

  if (numberThumb == 1) {
    title__big.textContent = `frappuccino`;
    producto = `frappuccino`;
    date = 1995;
  } else if (numberThumb == 2) {
    title__big.textContent = `candy fresh`;
    producto = `candy fresh`;
    date = 2000;
  } else if (numberThumb == 3) {
    title__big.textContent = `cool red`;
    producto = `cool red`;
    date = 2020;
  }

  let nameProduct = producto;
  let dateProduct = date;

  if (!nameProduct && !dateProduct) {
    const paragraphContainer = document.querySelector(".tittle__paragraph");

    const html = `<p>
   The ${defaultProductName} was introduced by Starbucks in ${defaultProductDate}. It was a
   successful combination of coffee and iced drink, and became a
   popular Starbucks menu item.
   </p>`;
    paragraphContainer.innerHTML = html;
  } else {
    const paragraphContainer = document.querySelector(".tittle__paragraph");

    const html = `<p>
    The ${nameProduct} was introduced by Starbucks in ${dateProduct}. It was a
    successful combination of coffee and iced drink, and became a
    popular Starbucks menu item.
    </p>`;
    paragraphContainer.innerHTML = html;
  }
});

// cool red
// candy fresh
