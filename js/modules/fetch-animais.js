import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  //create animal div
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `
      <h3>${animal.especie}</h3>
      <span data-numero>${animal.total}</span>
    `;
    return div;
  }

  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  //fetch animals from json and create divs with the data
  async function criarAnimais() {
    try {
      //fetch and wait for the data to be converted to json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      //after the data is converted to json, create the divs and add the numbers animation
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  return criarAnimais();
}
