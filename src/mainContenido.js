
import data from './data/harrypotter/harry.js';

// los 10 primeros datos
let primerosPersonajes = data.characters.slice(0,10)

//NODOS

const homeBtn = document.getElementById('homeBtn'); //capturando homeBtn
const salidaBtn = document.getElementById('salidaBtn'); //capturando salidaBtn
const nombreBienv= document.getElementById("mensaje-bienvenida"); // capturando nombreBienvenida
const contenidoHome = document.getElementById('contenidoHome'); //capturando contenidoHome
const personajesBtn = document.getElementById('personajesBtn'); //capturando personajesBtn
const contenidoPersonajes = document.getElementById('contenidoPersonajes') // Capturando contenidoPersonajes
const targeta = document.getElementById('targeta') // Capturando contenidoPersonajes
const option = document.getElementById('orden') // capturando las opciones de ordenar
const btnOrdenar = document.getElementById ('enviarOrdenar') // capturando el boton de ordenar

//UTILS

//Función para crear las tarjetas con los personajes e imprimirlas en html
function crearTarjetas(data) {
  targeta.innerHTML = '';
  data.forEach(characters => { //por cada objeto del objeto "characters" se ejecuta la siguiente función para imprimir la tarjeta dentro del contenedor "contenidoPersonajes":
    targeta.innerHTML += `
      <div class="tarjetas" id= ${characters.id}>
        <h2 class="nombre">${characters.name}</h2>
        <li class="casa"> Casa: ${characters.house}</li>
        <li class="especie">Especie: ${characters.species}</li>
        <li class="ascendencia">Ascendencia: ${characters.ancestry}</li>
        <li class="genero">Género: ${characters.gender}</li>
        <li class="fecha-nacimiento">Nacimiento: ${characters.birth}</li>
        <li class="libros">Libros en los que aparece: ${characters.books_featured_in}</li>
      </div>
  `});
}

//Funcion para invertir el orden de un Array
function invertir (data){
  let invertido = []

  for (let i = data.length -1; i >= 0; --i) {
    invertido.push(data [i])
  }
  return invertido;
}

// funcion para ordenar de forma ascendente o descendente
function ordenar (data) {

  console.log(option.value)
  const dataOrdenada = data.sort((a, b) => (a.name.localeCompare(b.name)))

  if (option.value === "ascendente") {
    crearTarjetas(dataOrdenada)

  } else if (option.value==="descendente") {
    const dataDesendente = data.sort((a, b) => (b.name.localeCompare(a.name)))
    crearTarjetas(dataDesendente)
  }
}

// MANIPULACIÓN PÁGINA INDEX/CONTENIDO

//Evento click de homeBtn despliega contendioHome y oculta contenidoPersonajes
homeBtn.addEventListener('click', function () {
  contenidoHome.style.display = "flex";
  contenidoPersonajes.style.display = "none";
  targeta.innerHTML = ''
})

//Evento para salir al index.html
salidaBtn.addEventListener('click', function () {
  window.location.href = "index.html";
})

//Obtener valor almacenado local Storage
let nombreObtenido = localStorage.getItem("nombreM");
nombreBienv.innerHTML = "Bienvenida " + nombreObtenido; //Mostrar valor almacenado


//Evento click de personajesBtn despliega contendioPersonajes y oculta contenidoHome
personajesBtn.addEventListener('click', function () {
  contenidoPersonajes.style.display = "flex";
  contenidoPersonajes.style.height = "20px";
  targeta.style.display = "flex";               //AÑADÍ ESTA ARTICLE AL HTML!!
  contenidoHome.style.display = "none";
});

//Renderizamos las cartas de los personajes
crearTarjetas(primerosPersonajes);

//Añadimos la funcion de ordenar al boton de Ordenar.
btnOrdenar.addEventListener('click', function () {
  ordenar (primerosPersonajes)
})

