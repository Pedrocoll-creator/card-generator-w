function recargarPagina() {

  let recargarPagina
        
  location.reload();
}
window.onload = function () {
  generateCard();
};


function getRandomFromArray(values) {
  let randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}


function generateCard() {
  let figuras = ["♦", "♥", "♠", "♣"];
  let valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let figura = getRandomFromArray(figuras);
  let valor = getRandomFromArray(valores);


  let topIcon = document.querySelector(".figura");
  let bottomIcon = document.querySelector(".figura.invertido");
  let cardValue = document.querySelector(".valor");


  topIcon.innerHTML = figura;
  bottomIcon.innerHTML = figura;
  cardValue.innerHTML = valor;

  
  if (figura === "♦" || figura === "♥") {
    topIcon.style.color = "red";
    bottomIcon.style.color = "red";
  } else {
    topIcon.style.color = "black";
    bottomIcon.style.color = "black";
  }
}