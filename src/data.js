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
