import "./App.css";
import PokemonCard from "../src/components/PokemonCard.tsx";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    type: "herbe",
  },
  {
    name: "mew",
    imgSrc: "",
    type: "psy",
  },
];

function App() {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
    </div>
  );
}

export default App;
