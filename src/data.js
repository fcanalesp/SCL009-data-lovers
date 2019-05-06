/* Manejo de data */

// FILTRADO POR TIPO
const pokedexType = (codePoke, condition) => {
  const pokeByFilter = codePoke.filter(element => {

    return element.type.includes(condition);

  });

  return pokeByFilter;

}
window.pokedexType = pokedexType;

// FILTRADO POR DEBILIDAD
const pokedexWeaknesses = (codePoke, conditionTwo) => {
  const pokeByWeakness = codePoke.filter(element => {

    return element.weaknesses.includes(conditionTwo);

  });
  return pokeByWeakness;
}
  window.pokedexWeaknesses = pokedexWeaknesses;
  
  //FUNCION ORDENAR
  
  const sortCode=(codePoke, sortCodeBy, sortCodeOrder) => { 
    let resultOrdenate = "";
    
      if (sortCodeOrder === "AZ") {
        resultOrdenate = codePoke.sort(sortCodeBy)
      }
    
      if (sortCodeOrder === "ZA") {
        resultOrdenate = codePoke.sort(sortCodeBy).reverse();
         
      }
      return resultOrdenate;
    }
    window.sortCode = sortCode;

// BOTÓN SERCH

function getPokemonByName(name) {
   var codePoke = POKEMON.pokemon; 
   for (var i = 0; i < codepoke.length; i++) {
     if (codepoke[i].name.toLowerCase() == name.toLowerCase())
       return (codepoke[i]);
   }
   return ("No existe ese Pokemon");
 }
 
 
 /*function getPokemonById(id) {
 
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
 };*/
