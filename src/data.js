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



