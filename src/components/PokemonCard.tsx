interface PokemonProps {
  pokemon: {
    name: string;
    imgSrc?: string | undefined;
    type: string;
  };
}

function PokemonCard({ pokemon }: PokemonProps) {
  const { imgSrc, name, type } = pokemon;
  return (
    <figure>
      {/* Utilisation de l'opérateur ternaire pour afficher l'image ou "???" */}
      {imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
      <p> Type: {type} </p>
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
