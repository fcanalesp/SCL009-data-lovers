/* Manejo del DOM */
//declaramos una variable para llamar la data 
let codePoke = window.POKEMON.pokemon;
//aqui estamos mostrando todos los pokemon  
//console.log(codePoke);
//mostrar toda la data a traves de una variable, tomando un id del body
let rootBody = document.getElementById("root");
//aqui llamamos a los pokemon solo por sus nombres en el orden que esta establecido en la data
let pokepoke = (codePoke) => {
  for (let i = 0; i < codePoke.length; i++) {
    rootBody.innerHTML +=
      `<div class="container">
    <div id="root"></div>
   <div class="col-sm-2">
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



//crear una funcion para llamar un tipo de select en html
/*function cargar_select() {
  let tipPoke = ["acero", "agua", "bicho","dragón","eléctrico", "fantasma", "fuego", "hada", "hielo", ""];
  for (let i = 0; i < tipPoke.length; i++)
  if()
document.getElementById("").value;
}*/
/*
selectType.forEach(element => {
  element.addEventListener("click", () => {
    pokepoke(codePoke.filter(codePoke, element.setAttribute("poke-type")));
  });
});*/
/*document.getElementById("a").addEventListener("click", () =>{
  let typPoke =document.getElementById("codePoke").value;
  let filter =document.getElementById("condition").value;
  let result = element.type.includes(codePoke,condition);
});*/
let selectType = document.querySelectorAll("a.poke-type");
 selectType.forEach(element => {
   element.addEventListener("click", ()=>{
    codePoke(window.dataPokemon(codePoke,element.getAttribute("poke-type")));

   })
 })
