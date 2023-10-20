/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generadorDeNumeroRamdom() {
    let arrDeCartas = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let numeroDeCartaGenerado =
      arrDeCartas[Math.floor(Math.random() * arrDeCartas.length)];
    return numeroDeCartaGenerado;
  }

  let numeroDeCartaDesplegado = document.getElementById(
    "numeroRamdomDeLaCarta"
  );
  numeroDeCartaDesplegado.innerHTML = generadorDeNumeroRamdom();

  function generadorDePalosRamdom() {
    let palosCompletos = ["♦", "♥", "♠", "♣"];
    let numeroDePalos =
      palosCompletos[Math.floor(Math.random() * palosCompletos.length)];
    return numeroDePalos;
  }

  let palosRamdon = generadorDePalosRamdom();

  let paloSuperior = document.querySelectorAll(".paloRamdomDeLasCartas")[0];
  let paloInferior = document.querySelectorAll(".paloRamdomDeLasCartas")[1];

  paloSuperior.innerHTML = palosRamdon;
  paloInferior.innerHTML = palosRamdon;

  if (palosRamdon === "♦" || palosRamdon === "♥") {
    paloSuperior.setAttribute("style", "color: red");
    paloInferior.setAttribute("style", "color: red");
    numeroDeCartaDesplegado.setAttribute("style", "color: red");
  } else {
    paloSuperior.setAttribute("style", "color: black");
    paloInferior.setAttribute("style", "color: black");
    numeroDeCartaDesplegado.setAttribute("style", "color: black");
  }

  // Remove the setInterval() function
  // setInterval(myCallback, 1000);

  // Add event listener to the button
  const button = document.querySelector("#timerButton");
  button.addEventListener("click", myCallback);

  function myCallback() {
    let numeroDeCartaGenerado = generadorDeNumeroRamdom();
    let palosRamdon = generadorDePalosRamdom();

    let numeroDeCartaDesplegado = document.getElementById(
      "numeroRamdomDeLaCarta"
    );
    numeroDeCartaDesplegado.innerHTML = numeroDeCartaGenerado;

    let paloSuperior = document.querySelectorAll(".paloRamdomDeLasCartas")[0];
    let paloInferior = document.querySelectorAll(".paloRamdomDeLasCartas")[1];

    paloSuperior.innerHTML = palosRamdon;
    paloInferior.innerHTML = palosRamdon;

    if (palosRamdon === "♦" || palosRamdon === "♥") {
      paloSuperior.setAttribute("style", "color: red");
      paloInferior.setAttribute("style", "color: red");
      numeroDeCartaDesplegado.setAttribute("style", "color: red");
    } else {
      paloSuperior.setAttribute("style", "color: black");
      paloInferior.setAttribute("style", "color: black");
      numeroDeCartaDesplegado.setAttribute("style", "color: black");
    }
  }

  function startGeneratingCards() {
    setInterval(generateNewCard, 5000);
  }

  function generateNewCard() {
    let numeroDeCartaGenerado = generadorDeNumeroRamdom();
    let palosRamdon = generadorDePalosRamdom();

    let numeroDeCartaDesplegado = document.getElementById(
      "numeroRamdomDeLaCarta"
    );
    numeroDeCartaDesplegado.innerHTML = numeroDeCartaGenerado;

    let paloSuperior = document.querySelectorAll(".paloRamdomDeLasCartas")[0];
    let paloInferior = document.querySelectorAll(".paloRamdomDeLasCartas")[1];

    paloSuperior.innerHTML = palosRamdon;
    paloInferior.innerHTML = palosRamdon;

    if (palosRamdon === "♦" || palosRamdon === "♥") {
      paloSuperior.setAttribute("style", "color: red");
      paloInferior.setAttribute("style", "color: red");
      numeroDeCartaDesplegado.setAttribute("style", "color: red");
    } else {
      paloSuperior.setAttribute("style", "color: black");
      paloInferior.setAttribute("style", "color: black");
      numeroDeCartaDesplegado.setAttribute("style", "color: black");
    }
  }

  const button2 = document.querySelector("#timerButton");
  button2.addEventListener("click", startGeneratingCards);

  const widthInput = document.getElementById("inputheight");
  const heightInput = document.getElementById("inputwidth");

  const cardContain = document.getElementById("cardContainer");

  widthInput.addEventListener("input", function() {
    cardContain.style.width = widthInput.value + "px";
  });

  heightInput.addEventListener("input", function() {
    cardContain.style.height = heightInput.value + "px";
  });
};
