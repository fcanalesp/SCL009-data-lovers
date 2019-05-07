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


// FILTRADO POR DEBILIDAD
const pokedexWeaknesses = (codePoke, conditionTwo) => {
  const pokeByWeakness = codePoke.filter(element => {

    return element.weaknesses.includes(conditionTwo);

  });
  return pokeByWeakness;
}
window.pokedexWeaknesses = pokedexWeaknesses;

//funcion ordenar : sort code => codepoke es la data; sortcodeby: es lo que quiero ordenar; sortcodeorder: es como lo voy a ordenar
const sortCode = (codePoke, sortCodeBy, sortCodeOrder) => {
  let resultCode = codePoke;
  if (sortCodeOrder == "az") {
    resultCode.sort((a, b) => {
      if (a[sortCodeBy] > b[sortCodeBy]) {
        return 1;
      }

      if (a[sortCodeBy] < b[sortCodeBy]) {
        return -1;
      }

      return 0;
    })

  }

  if (sortCodeOrder == "za") {
    resultCode.sort((a, b) => {
      if (a[sortCodeBy] > b[sortCodeBy]) {
        return -1;
      }

      if (a[sortCodeBy] < b[sortCodeBy]) {
        return 1;
      }

      return 0;
    })


  }
  return resultCode;

}


window.sortCode = sortCode;
