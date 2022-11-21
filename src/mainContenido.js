//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);


const homeBtn = document.getElementById('homeBtn'); //capturando homeBtn
const contenidoHome = document.getElementById('contenidoHome'); //capturando contenidoHome

const personajesBtn = document.getElementById('personajesBtn'); //capturando personajesBtn
const contenidoPersonajes = document.getElementById('contenidoPersonajes'); //capturando contenidoPersonajes

//Evento click de homeBtn despliega contendioHome y oculta contenidoPersonajes
homeBtn.addEventListener('click', function () {
  contenidoHome.style.display = "flex";
  contenidoPersonajes.style.display = "none";
})

//Evento click de personajesBtn despliega contendioPersonajes y oculta contenidoHome
personajesBtn.addEventListener('click', function () {
  contenidoPersonajes.style.display = "flex";
  contenidoHome.style.display = "none";
})


//Guardar valor - nombre del invitado
//localStorage.setItem("nombreM");
//localStorage.removeItem("nombreM")

//Obtener valor almacenado local Storage --Ingrid
let nombreObtenido = localStorage.getItem("nombreM");
console.log (nombreObtenido)

//to uppercase al indice 0

//Mostrar valor almacenado  --Ingrid
let nombreBienv= document.getElementById("mensaje-bienvenida");
nombreBienv.innerHTML = "Bienvenida " + nombreObtenido;
