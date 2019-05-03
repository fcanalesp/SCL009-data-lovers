/* Manejo del DOM */
<<<<<<< HEAD
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
=======
//declaramos una variable para llamar la data 
const codePoke = window.POKEMON.pokemon;
//aqui estamos mostrando todos los pokemon  
//const root = document.getElementById("root");

//const type = document.getElementById("type");

//console.log(codePoke);
//mostrar toda la data a traves de una variable, tomando un id del body
let rootBody = document.getElementById("root");
//aqui llamamos a los pokemon solo por sus nombres en el orden que esta establecido en la data
let pokepoke = (codePoke) => {
  for (let i = 0; i < codePoke.length; i++) {
    rootBody.innerHTML +=
      `<div class="col-sm-2">
      <img src="${codePoke[i].img}" class="card-img-top" alt="Poke">
      <div class="card-body">
          <div class="col-sm-2">
        <h5 class="card-title">"${codePoke[i].name}"</h5>
        <h6 class="card-title">"Número:${codePoke[i].num}"</h6>
        <p class="card-text">"Tipo:${codePoke[i].type}"</p>
        <a href="#" class="btn-primary">Evolucion</a>
>>>>>>> d72b02b7e3fbe9b9abe811bebd4c1bed3a955c58
        </div>
      </div>`
        //xconsole.log(codePoke[i].name);
    }
}
<<<<<<< HEAD

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

=======
window.onload = pokepoke(codePoke);

//window.selectType = selectType;
let guardar = document.getElementById("type");
guardar.addEventListener("change", () => {

  let condition = guardar.options[guardar.selectedIndex].value;
  //console.log(condition);
  let filter = window.pokedexType(codePoke, condition);
  rootBody.innerHTML = "";

  filter.forEach(element => {
    rootBody.innerHTML +=

      `<div class="col-sm-2">
    <img src="${element.img}" class="card-img-top" alt="Poke">
    <div class="card-body">
        <div class="col-sm-2">
      <h5 class="card-title">${element.name}"</h5>
      <h6 class="card-title">"Número:${element.num}"</h6>
      <p class="card-text">"Tipo:${element.type}"</p>
      <a href="#" class="btn-primary">Evolucion</a>
      </div>
    </div>
  </div>`
  })

});

//llamar funcion ordenar

/*let order= document.getElementById("descendente");
order.addEventListener('change', function (){

  let ordenados= window.pokedexType(codePoke,"name",)
})*/
>>>>>>> d72b02b7e3fbe9b9abe811bebd4c1bed3a955c58
