const pokemonName = document.getElementById('pokemon-info')

const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon?limit=151';
let pokemonList;
let currentPokemon = 1;

// Fetch the first 151 Pokemon from the PokeAPI
fetch(pokemonAPI)
  .then(response => response.json())
  .then(data => {
    pokemonList = data.results;
    displayPokemon();
  });

// Display the current Pokemon
function displayPokemon() {
  if (currentPokemon < 1) {
    currentPokemon = 150;
  }else if(currentPokemon > 150){
    currentPokemon = 1;
  }

  let pokemon = pokemonList[currentPokemon];
  let pokemonInfo = document.getElementById('pokemon-info');
  let pokemonImg = document.getElementById("pokemon-image")
  let pokemonNum = document.getElementById("pokemon-number")
  let pokemonImage = document.createElement('img')
  pokemonInfo.innerHTML = `<h2>${pokemon.name}</h2>`;
  pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPokemon+1}.png`;
  pokemonImg.innerHTML = pokemonImage.outerHTML;
  pokemonNum.innerHTML = `<h2>Pokemon Number:${currentPokemon}</h2>`;
}

// Handle the "previous" button click
document.getElementById('previous').addEventListener('click', function() {
    currentPokemon--;
    displayPokemon();
});

// Handle the "next" button click
document.getElementById('next').addEventListener('click', function() {
    currentPokemon++;
    displayPokemon();
});