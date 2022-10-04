export default function initFetchAnimais() {
   const numbers = Array.from(document.querySelectorAll(`[data-numeros="container"] .numero-animal`));

async function fetchNumbers(url) {
   const animaisResponse = await fetch(url);
   const animaisJSON = await animaisResponse.json();
   const numerosGrid = document.querySelector(`.numeros-grid`);

   animaisJSON.forEach(item => {
      const divAnimal = createAnimal(item);
      numerosGrid.appendChild(divAnimal);
   });

   console.log(animaisJSON)
}

function createAnimal(animal) {
   const div = document.createElement(`div`);
   div.classList.add(`numero-animal`);

   div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;

   return div;
}
fetchNumbers(`./script/modules/animaisapi.json`);
}