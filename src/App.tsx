import "./App.css";
import PokemonCard from "../src/components/PokemonCard.tsx";
import { useState } from "react";
import NavBar from "./components/NavBar.tsx";

const pokemonList = [
  {
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    type: "Herbe",
  },
  {
    name: "Mew",
    imgSrc: "https://www.pokepedia.fr/images/e/e6/Mew-RFVF.png",
    type: "Psy",
  },
  {
    name: "Salamèche",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    type: "Feu",
  },
  {
    name: "Carapuce",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    type: "Eau",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    type: "Electrique",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("Bulbizarre");
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
      <NavBar setPokemonName={setPokemonName} pokemonList={pokemonList} />
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;
