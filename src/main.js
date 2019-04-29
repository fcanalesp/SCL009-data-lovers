/* Manejo del DOM */
//declaramos una variable para llamar la data 
let codePoke = window.POKEMON.pokemon;
//aqui estamos mostrando todos los pokemon  
console.log(codePoke);
//mostrar toda la data a traves de una variable, tomando un id del body
let rootBody = document.getElementById("root");
//aqui llamamos a los pokemon solo por sus nombres en el orden que esta establecido en la data
let pokepoke = (codePoke) => {
  for (let i = 0; i < codePoke.length; i++) {
    rootBody.innerHTML+=
    `<div class="container">
    <div id="root"></div>
   <div class="col-sm-2">
      <img src="${codePoke[i].img}" class="card-img-top" alt="Poke_fire">
      <div class="card-body">
          <div class="col-sm-2">
        <h5 class="card-title">"Nombre:${codePoke[i].name}"</h5>
        <p class="card-text">${codePoke[i].type}</p>
        <a href="#" class="btn-primary">Evolucion</a>
        </div>
      </div>
    </div>`
    console.log(codePoke[i].name);
    
  }
}
window.onload=pokepoke(codePoke);
//para llamar a nuestra funcion de filtrar por tipo desde el dom 
/*document.getElementById("category_type").addEventListener("click", () => {

  let codePoke = document.getElementById("codePoke").value;
  let condition = document.getElementById("condition").value;
});*/
