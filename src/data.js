/* Manejo de data */
//Aqui Filtraremos, ordenaremos y calcularemos

// FILTRADO POR TIPO
const pokedexType = (codePoke, condition) => {
  const pokeByFilter = codePoke.filter(element => {

    return element.type.includes(condition);

  });

  return pokeByFilter;

}
window.pokedexType = pokedexType;


const sortCode = (codePoke, sortCodeOrder) => {
  if (sortCodeOrder == "az") {
    codePoke.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }

      if (a.name < b.name) {
        return -1;
      }

      return 0;


    })
  }
  if (sortCodeOrder == "za") {
    codePoke.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }

      if (a.name < b.name) {
        return 0;
      }

      return 1;
    })
  }
  return codePoke;
}

window.sortCode = sortCode;
//Funcion ordenar
/*const sortCode = (codePoke, sortCodeBy, sortCodeOrder) => {
  return codePoke.sort((a, b) => {
    if (sortCodeOrder == "az") {
      if (a[sortCodeBy] > b[sortCodeBy]) {
        return 1;
      }

      if (a[sortCodeBy] < b[sortCodeBy]) {
        return -1;
      }

      return 0;

    }

    if (sortCodeOrder == "za") {
      if (a[sortCodeBy] > b[sortCodeBy]) {
        return -1;
      }

      if (a[sortCodeBy] < b[sortCodeBy]) {
        return 1;
      }

      return 0;
    };


  })
}*/
//funcion ordenar : sort code => codepoke es la data; sortcodeby: es lo que quiero ordenar; sortcodeorder: es como lo voy a ordenar
/*const sortCode = (codePoke, sortCodeBy, sortCodeOrder) => {
  if (sortCodeOrder == "az") {
    codePoke.sort((a, b) => {
      if (a[sortCodeBy].localeCompare(b[sortCodeBy])) return 1;
    })
  }
    if (sortCodeOrder == "za") {
      codePoke.sort((a, b) => {
        if (a[sortCodeBy].localeCompare(b[sortCodeBy])) return -1;
      })
    
  }
  return codePoke;
}*/
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
window.pokedexWeaknesses = pokedexWeaknesses;
    }
//Funcion ordenar
//const sortCode= (sortData, sortBy, sortOrder)
//pokedexType= data; sort by= que quiero ordenar; sortOrder = como lo voy a ordenar

/*const sortCode = codePoke.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
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
