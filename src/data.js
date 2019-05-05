/* Manejo de data */
//Aqui Filtraremos, ordenaremos y calcularemos

//Funcion filtrar
const pokedexType = (codePoke, condition) => {
  const pokeByFilter = codePoke.filter(element => {

    return element.type.includes(condition);

  });

  return pokeByFilter;

}
window.pokedexType = pokedexType;

//Funcion ordenar

/*let sortCode = (codePoke, condition) => {
  let resultOrdenate = "";
  if (Condition == "az") {

    resultOrdenate = codePoke.sort(sortPoke);
  }

  if (condition == "za") {
    resultOrdenate = codepoke.sort(sortPoke).reverse();
  }


  return resultOrdenate;
}
window.orderByName = orderByName;*/
//funcion ordenar : sort code => codepoke es la data; sortcodeby: es lo que quiero ordenar; sortcodeorder: es como lo voy a ordenar
//const sortCode = (codePoke, sortBy, sortCodeOrder) => {
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

//sort Poke = sortBy
//sortCode= data; sort by= que quiero ordenar; sortOrder = como lo voy a ordenar
function sortCodeBy(a, b) {
  if (a.name > b.name) {
    return 1;
  }

  if (a.name < b.name) {
    return -1;
  }

  return 0;
}

 //const sortCode= (sortData, sortBy, sortOrder)
  

/*const sortPoke = (sortData, sortBy, sortOrder) => {
if (codePoke == "za"){
   return orderReverse = codePoke.sort((a, b) => {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name = b.name) {
      return 0;
    }
    return -1;
  })
}
}*/