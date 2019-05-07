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

     else if (a[sortCodeBy] < b[sortCodeBy]) {
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

/*OTRO SORT PERO CORTITO
// parametro 1: es la data, patrametro 2: lo que quiere ordenar, parametro 3: como lo quiero ordenar 
const sortCode = (codePoke, sortCodeBy, sortCodeOrder) => {
  const comparar = codePoke.sort((a,b)=>{
    return a[codeBy].localeCompare(b[codeBy])
  })
  if (sortCodeOrder==="za"){
    return comparar.reverse();
  }
}
window.ordenar = ordenar;
*/
window.sortCode = sortCode;

