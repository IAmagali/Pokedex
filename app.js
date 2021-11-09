
function cargarListado(){
fetch('https://pokeapi.co/api/v2/pokemon/')
.then(res => res.json())
.then(list => crearBoton(list.results));
}


function crearBoton(poke) {
    const contenedor = document.getElementById("contenedor-listado")
    for (const i of poke) {
        contenedor.innerHTML += `<button id="${"boton-"+poke.indexOf(i)}">${i.name}</button>`       
        let boton = document.getElementById("boton-"+ poke.indexOf(i));
        boton.addEventListener('click', ()=>cargarPokemon(i.url) )
    }
    
    
}
function cargarPokemon(url){
    fetch(url)
    .then(res => res.json())
    .then(pokemon => crearCarta(pokemon));
}

function crearCarta(poke){
    document.getElementById("contenedor-carta").innerHTML = `
    <h1>${poke.name}</h1>
    <img src="${poke.sprites.front_default}">
    `

}
cargarListado();