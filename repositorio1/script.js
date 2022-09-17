let titulo = document.getElementById("titular")
console.log(titulo)

let subtitle = document.getElementsByClassName("subtitular")
console.log(subtitle)

let elementoH1 = document.getElementsByTagName("h1")
console.log(elementoH1)

console.log(titulo.innerText)
titulo.innerText = "Ya no somos más una página de NBA"

let tituloQS = document.querySelector("#titular")
console.log(tituloQS)

tituloQS.innerText = "Basta de NBA"

class Jugador {
    constructor(nombre, equipo, posición, imagen){
        this.nombre = nombre
        this.equipo = equipo
        this.posición = posición
        this.imagen = imagen
    }
}

const jug1 = new Jugador ("Sthephen Curry", "Golden State Warriors", "Base", "Curry.jpg")
const jug2 = new Jugador ("Donovan Mitchell", "Utah Jazz", "Escolta", "Mitchell.jpg")
const jug3 = new Jugador ("LeBron James", "Los Ángeles Lakers", "Alero", "James.jpg")
const jug4 = new Jugador ("Zion Williamson", "New Orleans Pelicans", "Ala-Pívot", "Williamson.jpg")
const jug5 = new Jugador ("Joel Embiid", "Philadelphia 76ers", "Pívot", "Embiid.jpg")


const destacados = []
destacados.push(jug1,jug2,jug3,jug4,jug5)

let divJugadores = document.getElementById("jugadores")
destacados.forEach((Jugador) => {
    let nuevoJugador = document.createElement("div")
    nuevoJugador.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="assets/${Jugador.imagen}" class="card-img-top" alt="${Jugador.nombre}">
    <div class="card-body">
      <h5 class="card-title">${Jugador.nombre}</h5>
      <p class="card-text">${Jugador.equipo} - ${Jugador.posición}</p>
      <a href="#" class="btn btn-primary">Ver estadísticas</a>
    </div>
  </div>`
    divJugadores.append(nuevoJugador)
})

































