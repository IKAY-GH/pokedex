import "./App.css";
import PokemonCard from "../src/components/PokemonCard.tsx";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    type: "herbe",
  },
  {
    name: "mew",
    imgSrc: "https://www.pokepedia.fr/images/e/e6/Mew-RFVF.png",
    type: "psy",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    type: "Feu",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    type: "eau",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    type: "électrique",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("bulbizarre");
  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <nav>
        {pokemonList.map((element) => (
          <button
            key={element.name}
            type="button"
            onClick={() => setPokemonName(element.name)}
          >
            {element.name}
          </button>
        ))}
      </nav>
      <PokemonCard pokemon={pokemon} />
      <p>{pokemonName}</p>
    </div>
  );
}

export default App;
