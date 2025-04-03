function PokemonCard({ pokemon }) {
  return (
    <figure>
      {/* Utilisation de l'opérateur ternaire pour afficher l'image ou "???" */}
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}

      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
