// Funciones para abrir y cerrar ventanas
let url = "https://www.prolomer.com.mx"

let ventana = window.open(url)
ventana.close()

if (ventana.closed) {
  document.write("La ventana se abrió y se cerró")
}

// Para imprimir la ventana activa ya que finaliza toda la carga del sitio
//print()

//para solicitar valores
//let nombre = prompt("Escribe tu nombre: ")
//console.log(`Bienvenido ${nombre}`)

// Muestra una ventana de confirmación
//let respuesta = confirm("Deseas salir del sitio web?")
//console.log(respuesta)

// Objeto screen
let sc = window.screen
console.log(sc)

let st = window.screenTop
let sl = window.screenLeft

document.write(`<br>Left: ${sl}<br>Top: ${st}`)

console.log(window.scrollY)
