/* Manejo del DOM */
// MOSTRANDO DATA
const codePoke = POKEMON.pokemon; //variable para LLAMAR a la data
const rootBody = document.getElementById("root");// variable para MOSTRAR la data


let pokepoke = (codePoke) => { // LLamando pokemones por el orden establecido por la data.
    for (let i = 0; i < codePoke.length; i++) {
        rootBody.innerHTML +=
            `<div class="col-sm-2">
        <img src="${codePoke[i].img}" class="card-img-top" alt="Poke">
        <div class="card-body">
            <div class="col-sm-2">
          <h5 class="card-title">Nombre:${codePoke[i].name}</h5>
          <h6 class="card-title">Número:${codePoke[i].num}</h6>
          <p class="card-text">Tipo:${codePoke[i].type}</p>
          <a href="#" class="btn-primary">Evolucion</a>
          </div>
        </div>
      </div>`
        //xconsole.log(codePoke[i].name);
    }
}

window.onload = pokepoke(codePoke);// para que cada vez que se cargue la pagina, se muestre toda la data

//filtrar
//let containerRoot = document.getElementById("result");
let selectType = document.getElementById("type");
selectType.addEventListener("change", () => {
  let tipo = selectType.options[selectType.selectedIndex].value;
  console.log(tipo);
  
  let conecta = window.filterPoke(codePoke, tipo);
  rootBody.innerHTML = "";
    
  conecta.forEach(element => {
    rootBody.innerHTML +=
    `<div class="col-sm-2">
        <img src="${element.img}" class="card-img-top" alt="Poke">
        <div class="card-body">
            <div class="col-sm-2">
          <h5 class="card-title">Nombre:${element.name}</h5>
          <h6 class="card-title">Número:${element.num}</h6>
          <p class="card-text">Tipo:${element.type}</p>
          <a href="#" class="btn-primary">Evolucion</a>
          </div>
        </div>
      </div>`
  });
});

