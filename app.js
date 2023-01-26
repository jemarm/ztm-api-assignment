const pokemonAPI = "https://pokeapi.co/api/v2/pokemon?limit=151";
let currentPokemon = 1;
let pokemonList;

// Fetch the first 151 Pokemon from the PokeAPI
async function fetchPokemon() {
  const response = await fetch(pokemonAPI);
  const data = await response.json();
  pokemonList = data.results;
  displayPokemon();
}

fetchPokemon()

// Display the current Pokemon
function displayPokemon() {
  if (currentPokemon < 1) {
    currentPokemon = 150;
  } else if (currentPokemon > 150) {
    currentPokemon = 1;
  }

  let pokemon = pokemonList[currentPokemon];
  let pokemonName = document.getElementById('pokemon-name');
  let pokemonImg = document.getElementById('pokemon-image');
  let pokemonNum = document.getElementById('pokemon-number')
  let pokemonImage = document.createElement('img');
  pokemonName.innerHTML = `<h2>${pokemon.name}<h2>`;
  pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPokemon+1}.png`;;
  pokemonImg.innerHTML = pokemonImage.outerHTML;
  pokemonNum.innerHTML = `<h2>Pokemon Number: ${currentPokemon}</h2>`;
}

// Handle the "previous" button click
document.getElementById('previous').addEventListener("click",() =>{
  currentPokemon--;
  displayPokemon()
})

document.getElementById('next').addEventListener('click', () =>{
  currentPokemon++;
  displayPokemon()
})
