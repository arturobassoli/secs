const consulenzaBtn = document.getElementById("pricingSelector1");
const terapiaBtn = document.getElementById("pricingSelector2");
const pack1 = document.getElementById("pack1");
const pack2 = document.getElementById("pack2");
const pack3 = document.getElementById("pack3");
const pack4 = document.getElementById("pack4");

console.log(consulenzaBtn, terapiaBtn, pack1, pack2, pack3, pack4);

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
