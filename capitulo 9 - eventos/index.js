const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const contenedorRojo = document.getElementById('contenedor-rojo');
const contenedorAzul = document.getElementById('contenedor-azul');

// Agregar un eventListener a un objeto de la página web
// Al pasar un evento con el argumento e, entendemos que es el evento que estamos ejecutando
boton1.addEventListener('click', (e) => {

  // e.target nos daría el objeto sobre el cual fue ejecutado el evento
  console.log(e)
  console.log(e.target)
  alert('Di click en el boton sin propagación')
  e.stopPropagation()
})

boton2.addEventListener('click', (e) => {
  alert('Di click en el botón con propagación')
})

contenedorRojo.addEventListener('click', (e) => {
  alert('Di click en el contenedor rojo');
})

contenedorAzul.addEventListener('click', (e) => {
  alert('Di click en el contenedor azul');
})


const contenedorDblClick = document.getElementById('contenedor-dblclick');

contenedorDblClick.addEventListener('dblclick', (e) => {
  alert('Excelente! Hiciste doble click')
})

const contenedorMouseOver = document.getElementById('contenedor-mouseover');

contenedorMouseOver.addEventListener('mouseover', function() {
  this.style.backgroundColor = '#123456';
  this.style.color = '#ffffff'
  console.log('Entraste al div contenedor-mouseover')
})

contenedorMouseOver.addEventListener('mouseleave', function() {
  this.style.backgroundColor = 'orange';
  this.style.color = '#000000';
  console.log('Saliste del div contenedor-mouseover')
})

const contenedorRightClick = document.getElementById('contenedor-clickderecho')

contenedorRightClick.addEventListener('contextmenu', (e) => {
  alert('Hiciste click derecho! Buen trabajo')
})

const contenedorMover = document.getElementById('contenedor-move');

contenedorMover.addEventListener('mousemove', (e) => {
  let x = e.clientX
  let y = e.clientY
  console.log(`Coordenadas (${x},${y})`)
})

const input = document.getElementById('input1');
const formulario = document.querySelector('.pizarron');

input.addEventListener('keydown', (e) => {
  let contenido = `La última tecla presionada fue: <b>${e.key}</b>`
  formulario.innerHTML = contenido
})

input.addEventListener('keyup', (e) => {
  let texto = e.target.value

  if (texto == "password") {
    alert('Has iniciado sesión')
  }
})

addEventListener('resize', () => {
  console.log('Cambió la resolución de la página')
})

addEventListener('scroll', fondoPagina)
addEventListener('scroll', topPagina)

function topPagina() {
  if (window.scrollY == 0) {
    addEventListener('scroll', fondoPagina)
    console.log('Se agregó evento fondoPagina')
  }
}

function fondoPagina() {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    console.log('Llegaste al fondo de la página')

    console.log(`Windows scrollY: ${window.scrollY}`)
    console.log(`Windows innerHeight: ${window.innerHeight}`)
    console.log(`Document scrollHeight: ${document.body.scrollHeight}`)
    removeEventListener('scroll', fondoPagina)
  }
}


addEventListener('load', () => {
  // setTimeout(funcion, t) que se ejecuta una sola vez en el tiempo t indicado
  let tiempo = 5
  let veces = 2

  const sayHello = setTimeout(saludar, tiempo * 1000, tiempo)

  // setInterval(funcion, t) se ejecuta infinitamente cada t cantidad de tiempo
  const sayBye = setInterval(despedir, tiempo * 1000, tiempo)

  // clearInterval detiene la función setInterval (para esto la tuve que agregar a una variable)
  setTimeout(()=>{clearInterval(sayBye)},tiempo * 1000 * veces)
})

function saludar(tiempo) {
  console.log(`Te saludo a los ${tiempo} segundos`)
}

function despedir(tiempo) {
  console.log(`Me despido cada ${tiempo} segundos`)
}
