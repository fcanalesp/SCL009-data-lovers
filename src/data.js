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

/*OTRO SORT PERO CORTITO
// parametro 1: es la data, patrametro 2: lo que quiere ordenar, parametro 3: como lo quiero ordenar 
const ordenar = (codePoke, codeBy, sortCodeOrder) => {
  const comparar = codePoke.sort((a,b)=>{
    return a[codeBy].localeCompare(b[codeBy])
  })
  if (sortCodeOrder==="za"){
    return comparar.reverse();
  }
}
window.ordenar = ordenar;
*/