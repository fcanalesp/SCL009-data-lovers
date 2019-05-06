/* Manejo del DOM */
//declaramos una variable para llamar la data 
const codePoke = window.POKEMON.pokemon;
//aqui estamos mostrando todos los pokemon  
//const root = document.getElementById("root");
document.getElementById("recharge").addEventListener("click", () => {
  location.reload();
})
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
        </div>
      </div>`
        
    }
}
window.onload = pokepoke(codePoke);


let saveForType = document.getElementById("type");
saveForType.addEventListener("change", () => {

  let condition = saveForType.options[saveForType.selectedIndex].value;
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


// FILTRANDO POR DEBILIDADES
let saveForWeakness= document.getElementById("weaknesses");
saveForWeakness.addEventListener("change", () => {

  let conditionTwo = saveForWeakness.options[saveForWeakness.selectedIndex].value;
  //console.log(condition);
  let filter = window.pokedexWeaknesses(codePoke, conditionTwo);
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


//llamar funcion ordena
/*let order= document.getElementById("descendente");
order.addEventListener('change', function (){

let ordenAs = document.getElementById("ascdesc");
ordenAs.addEventListener("change", () => {
  let pokeSort = ordenAs.value;
  let ordenPoke = sortCode(codePoke, pokeSort);
  rootBody.innerHTML = "";

  ordenPoke.forEach(element => {
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
