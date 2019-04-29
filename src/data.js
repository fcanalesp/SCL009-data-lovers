/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window 
//declaramos variable 

window.dataPokemon = dataPokemon;
  const dataPokemon = (codePoke, condition) => {
      /* Acá va tu código */ 
 const filtrar= codePoke.filter(element=>{
   //el filter pasa por todos los elementos del array
   //element va a tomar ese valor en cada vuelta
   return element.type.includes(condition);
 });
 return filtrar;
      }      
   
    