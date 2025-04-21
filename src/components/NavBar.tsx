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
          onClick={() => {
            setPokemonName(element.name);
            if (element.name.toLowerCase() === "pikachu") {
              alert("Pika Pika!!!!!");
            }
          }}
        >
          {element.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
