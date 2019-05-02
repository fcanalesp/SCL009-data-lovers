/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window 
//declaramos variable 

//llamando de la forma cipher pero para filtrar
//window.dexPoke = {
const pokedexType = (codePoke, condicion) => {
  const pokeByFilter = codePoke.filter(element => {

    return element.type.includes(condicion);
    //let filterType = codePoke.filter(element => {
    //el filter pasa por todos los elementos del array
    //element va a tomar ese valor en cada vuelta
    //return element.type.includes(condition);
  });

  return pokeByFilter;

}
window.pokedexType = pokedexType;




function getPokemonByName(name) {
  var pokemonList = POKEMON.pokemon; //pokrmonlist es la variable que guardara el pokemon que se busque
  for (var i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].name.toLowerCase() == name.toLowerCase())
      return (pokemonList[i]);
  }
  return ("No existe ese Pokemon");
}


function getPokemonById(id) {

  var pokemonList = POKEMON.pokemon;
  for (var i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].id == id)
      return (pokemonList[i]);
  }
  return ("No existe ese Pokemon");
}

function getPokemonByType(type) {
  var pokemonList = POKEMON.pokemon;
  var foundList = [];
  for (var i = 0; i < pokemonList.length; i++) {
    for (var j = 0; j < pokemonList[i].type.length; j++) {
      if (pokemonList[i].type[j].toLowerCase() == type.toLowerCase())
        foundList.push(pokemonList[i]);
    }
  }
  if (foundList.length > 0)
    return (foundList);
  return ("No existen pokemones asociados a ese tipo");
}

function getPokemonByWeakness(weaknesses) {
  var pokemonList = POKEMON.pokemon;
  var foundList = [];
  for (var i = 0; i < pokemonList.length; i++) {
    for (var j = 0; j < pokemonList[i].weaknesses.length; j++) {
      if (pokemonList[i].weaknesses[j].toLowerCase() == weaknesses.toLowerCase())
        foundList.push(pokemonList[i]);
    }
    if (foundList.length > 0)
      return (foundList);
	return ("No existen pokemones asociados a esa debilidad");
};
}
