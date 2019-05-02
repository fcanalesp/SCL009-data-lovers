/* Manejo del DOM */
//declaramos una variable para llamar la data 
let codePoke = POKEMON.pokemon;
//aqui estamos mostrando todos los pokemon  
const root = document.getElementById("root");

let filtType = document.getElementById("type");

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
window.selectType = selectType;
let guardar = document.getElementById("root");
filtType.addEventListener("change", () => {
		//window.pokeByFilter.filterType(codePoke, element.getAttribute(""));
	//});

let condition = filtType.options
[filtType.selectedIndex].text;
console.log(condition);
});

let filter =codePoke.filter(element => {
  for(let i= 0; i <selectType.length; i++){
    rootBody.innerHTML =[];
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
console.log(codePoke.type);  
});
/*window.onload= filter(codePoke.filter);
selectType = (codePoke, condition) => {
 let selectTypeResult = codePoke.filter( element => {
   return element.type == "condition"
 })
}*/

//llamando a funcion de filtrado

/*Filtrar pokemones*/

filtType.addEventListener("change",()=>{
   rootBody = '';
    let condicion = document.getElementById("filtType");
        
    const pokeByFilter = window.pokedexType(codePoke, condicion);
    for ( let i=0; i<pokeByFilter.length;i++){
        rootBody.innerHTML += `<div class="col-sm-2">
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
        for ( let pikachu=0; pikachu<pokeByFilter[i].type.length;pikachu++){
        
            rootBody.innerHTML += `<div id="result">${pokeByFilter[i].type[pikachu]}</div>`
          
        }

}

});