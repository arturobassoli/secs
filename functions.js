/* Price Pack */

const consulenzaBtn = document.getElementById("pricingSelector1");
const terapiaBtn = document.getElementById("pricingSelector2");
const pack1 = document.getElementById("pack1");
const pack2 = document.getElementById("pack2");
const pack3 = document.getElementById("pack3");
const pack4 = document.getElementById("pack4");

/* About Us Accordion */

const leggiDiPiuGiulia = document.getElementById("leggiDiPiuGiulia");
const leggiDiMenoGiulia = document.getElementById("leggiDiMenoGiulia");
const ilDipiuGiulia = document.getElementById("ilDipiuGiulia");
const leggiDiPiuFra = document.getElementById("leggiDiPiuFra");
const leggiDiMenoFra = document.getElementById("leggiDiMenoFra");
const ilDipiuFra = document.getElementById("ilDipiuFra");

/* Pricing Functions */

function consulenzaPack() {
  consulenzaBtn.classList.add("active");
  terapiaBtn.classList.remove("active");
  pack1.classList.remove("hide");
  pack2.classList.remove("hide");
  pack3.classList.add("hide");
  pack4.classList.add("hide");
}
function terapiaPack() {
  consulenzaBtn.classList.remove("active");
  terapiaBtn.classList.add("active");
  pack1.classList.add("hide");
  pack2.classList.add("hide");
  pack3.classList.remove("hide");
  pack4.classList.remove("hide");
}

/* About Us Functions */

function aboutGiuliaShow() {
  ilDipiuGiulia.classList.remove("hide");
  leggiDiMenoGiulia.classList.remove("hide");
  leggiDiPiuGiulia.classList.add("hide");
}

function aboutGiuliaHide() {
  ilDipiuGiulia.classList.add("hide");
  leggiDiMenoGiulia.classList.add("hide");
  leggiDiPiuGiulia.classList.remove("hide");
}

function aboutFraShow() {
  ilDipiuFra.classList.remove("hide");
  leggiDiMenoFra.classList.remove("hide");
  leggiDiPiuFra.classList.add("hide");
}

function aboutFraHide() {
  ilDipiuFra.classList.add("hide");
  leggiDiMenoFra.classList.add("hide");
  leggiDiPiuFra.classList.remove("hide");
}
