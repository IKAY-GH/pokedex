interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
  return (
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
  );
}

export default NavBar;
