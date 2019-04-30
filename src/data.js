/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window 
//declaramos variable 


const filterType = (codePoke, condition) => {
  /* Acá va tu código */
  let filterType = codePoke.filter(element => {
    //el filter pasa por todos los elementos del array
    //element va a tomar ese valor en cada vuelta
    return element.type.includes(condition);
  });
  return resultFilterType;
}
window.filterType = filterType;