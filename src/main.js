/* Manejo del DOM */
//declaramos una variable para llamar la data 
let codePoke = POKEMON.pokemon;
//aqui estamos mostrando todos los pokemon  
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
        <h5 class="card-title">"Nombre:${codePoke[i].name}"</h5>
        <h6 class="card-title">"Número:${codePoke[i].num}"</h6>
        <p class="card-text">"Tipo:${codePoke[i].type}"</p>
        <a href="#" class="btn-primary">Evolucion</a>
        </div>
      </div>
    </div>`
    //console.log(codePoke[i].name);

  }
}
window.onload = pokepoke(codePoke);

let selectType = "";
let filter =codePoke.forEach(element => {

  
});

selectType = (codePoke, condition) => {
 let selectTypeResult = codePoke.filter( element => {
   return element.type == "condition"
 })
}
//window.selectType = selectType;
// al final declaramos todos lo window.(....) que sean necesarios para hacer globales todas las funciones
let filType = document.getElementById("type-select");
let guardar = document.getElementById("root");
filType.addEventListener("change", () => {

let condition = filType.options
[filType.selectedIndex].text;
console.log(condition);

let getPoke= "";
for(let i = 0; i <codePoke.length; i++) {
  `<div class="col-sm-2">
      <img src="${codePoke[i].img}" class="card-img-top" alt="Poke">
      <div class="card-body">
          <div class="col-sm-2">
        <h5 class="card-title">"Nombre:${codePoke[i].name}"</h5>
        <h6 class="card-title">"Número:${codePoke[i].num}"</h6>
        <p class="card-text">"Tipo:${codePoke[i].type}"</p>
        <a href="#" class="btn-primary">Evolucion</a>
        </div>
      </div>
    </div>`
}

});

