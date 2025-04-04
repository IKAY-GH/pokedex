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
    type: "psy",
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
      <PokemonCard pokemon={pokemon} />
      <p>{pokemonName}</p>
      <button type="button" onClick={() => setPokemonName("bulbizarre")}>
        Bulbizarre
      </button>
      <button type="button" onClick={() => setPokemonName("mew")}>
        Mew
      </button>
    </div>
  );
}

export default App;
