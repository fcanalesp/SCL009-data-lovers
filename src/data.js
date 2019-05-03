<<<<<<< HEAD
//esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//FILTRANDO!
const filterPoke = (codePoke, condition) => {
  let filterTypeResult = codePoke.filter(element => {
    
    return element.type.includes(condition);
  })
  return filterTypeResult;
};

window.filterPoke = filterPoke;



=======
/* Manejo de data */
//declaramos variable 

//Funcion filtrar
  const pokedexType = (codePoke, condition) => {
    const pokeByFilter = codePoke.filter(element => {
  
      return element.type.includes(condition);
      
    });
  
    return pokeByFilter;
  
  }
  window.pokedexType = pokedexType;
  
  //Funcion ordenar
  //const sortCode= (sortData, sortBy, sortOrder)
    //pokedexType= data; sort by= que quiero ordenar; sortOrder = como lo voy a ordenar
  
  const sortCode= codePoke.sort((a,b )=> {
      if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
   return 0;     
  console.log
});
  

 window.sortCode= sortCode; 

 
 /* function getPokemonByName(name) {
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
  }*/
>>>>>>> d72b02b7e3fbe9b9abe811bebd4c1bed3a955c58
